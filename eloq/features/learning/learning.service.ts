import { supabase } from "@/lib/supabase/client";

// =========================
// Levels
// =========================

export async function fetchLevels() {
  const { data, error } = await supabase
    .from("levels")
    .select("*")
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}

export async function fetchLevelBySlug(levelSlug: string) {
  const { data, error } = await supabase
    .from("levels")
    .select("*")
    .eq("slug", levelSlug)
    .single();

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}


// =========================
// Units
// =========================

export async function fetchUnits(levelId: string) {
  const { data, error } = await supabase
    .from("units")
    .select("*")
    .eq("level_id", levelId)
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}

export async function fetchUnitBySlug(
  unitSlug: string,
  levelId: string
) {
  const { data, error } = await supabase
    .from("units")
    .select("*")
    .eq("slug", unitSlug)
    .eq("level_id", levelId)
    .single();

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}


// =========================
// Lessons
// =========================

export async function fetchLessons(unitId: string) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("unit_id", unitId)
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}

export async function fetchLessonBySlug(
  lessonSlug: string,
  unitId: string
) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("slug", lessonSlug)
    .eq("unit_id", unitId)
    .single();

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}


// =========================
// Blocks
// =========================

export async function fetchBlocks(lessonId: string) {
  const { data, error } = await supabase
    .from("blocks")
    .select("*")
    .eq("lesson_id", lessonId)
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}


// ============================================================
// Continue Learning
// ============================================================

export async function fetchContinueLearning(
  studentId: string,
  levelSlug = "beginner"
) {
  try {
    // --------------------------------------------------------
    // 1. المستوى
    // --------------------------------------------------------

    const levelResult = await fetchLevelBySlug(levelSlug);

    if (!levelResult.ok || !levelResult.data) {
      return {
        ok: false,
        data: null,
        error: levelResult.error ?? new Error("Level not found"),
      };
    }

    const level = levelResult.data;

    // --------------------------------------------------------
    // 2. وحدات المستوى مرتبة حسب order_idx
    // --------------------------------------------------------

    const unitsResult = await fetchUnits(level.id);

    if (!unitsResult.ok || !unitsResult.data) {
      return {
        ok: false,
        data: null,
        error: unitsResult.error ?? new Error("Units not found"),
      };
    }

    const units = [...unitsResult.data].sort(
      (a, b) => a.order_idx - b.order_idx
    );

    if (units.length === 0) {
      return {
        ok: true,
        data: null,
        error: null,
      };
    }

    // --------------------------------------------------------
    // 3. جميع دروس المستوى
    // --------------------------------------------------------

    const unitIds = units.map((unit) => unit.id);

    const { data: lessons, error: lessonsError } = await supabase
      .from("lessons")
      .select("*")
      .in("unit_id", unitIds)
      .order("order_idx", { ascending: true });

    if (lessonsError) {
      return {
        ok: false,
        data: null,
        error: lessonsError,
      };
    }

    if (!lessons || lessons.length === 0) {
      return {
        ok: true,
        data: null,
        error: null,
      };
    }

    // --------------------------------------------------------
    // 4. الدروس المكتملة
    // --------------------------------------------------------

    const { data: completedLessons, error: completedError } =
      await supabase
        .from("student_completed_lessons")
        .select("lesson_id")
        .eq("student_id", studentId);

    if (completedError) {
      return {
        ok: false,
        data: null,
        error: completedError,
      };
    }

    const completedIds = new Set(
      (completedLessons ?? []).map((item) => item.lesson_id)
    );

    // --------------------------------------------------------
    // 5. ترتيب الدروس
    // --------------------------------------------------------

    const sortedLessons = [...lessons].sort(
      (a, b) => a.order_idx - b.order_idx
    );

    // --------------------------------------------------------
    // 6. آخر درس مكتمل حسب ترتيب الوحدة ثم الدرس
    //
    // مهم:
    // لا نعتمد على created_at.
    // --------------------------------------------------------

    let lastCompletedLesson = null;

    for (const unit of units) {
      const unitLessons = sortedLessons
        .filter((lesson) => lesson.unit_id === unit.id)
        .sort((a, b) => a.order_idx - b.order_idx);

      for (const lesson of unitLessons) {
        if (completedIds.has(lesson.id)) {
          lastCompletedLesson = lesson;
        }
      }
    }

    // --------------------------------------------------------
    // 7. تحديد الدرس التالي
    // --------------------------------------------------------

    let candidateLesson = null;

    if (!lastCompletedLesson) {
      // أول درس في أول وحدة
      candidateLesson =
        sortedLessons
          .filter((lesson) => lesson.unit_id === units[0].id)
          .sort((a, b) => a.order_idx - b.order_idx)[0] ?? null;
    } else {
      // دروس الوحدة الحالية
      const currentUnitLessons = sortedLessons
        .filter(
          (lesson) =>
            lesson.unit_id === lastCompletedLesson.unit_id
        )
        .sort((a, b) => a.order_idx - b.order_idx);

      // ----------------------------------------------
      // الدرس التالي داخل نفس الوحدة
      // ----------------------------------------------

      candidateLesson =
        currentUnitLessons.find(
          (lesson) =>
            lesson.order_idx > lastCompletedLesson.order_idx
        ) ?? null;

      // ----------------------------------------------
      // انتهت الوحدة → الوحدة التالية
      // ----------------------------------------------

      if (!candidateLesson) {
        const currentUnitIndex = units.findIndex(
          (unit) => unit.id === lastCompletedLesson.unit_id
        );

        const nextUnit =
          currentUnitIndex >= 0
            ? units[currentUnitIndex + 1]
            : null;

        if (nextUnit) {
          candidateLesson =
            sortedLessons
              .filter(
                (lesson) => lesson.unit_id === nextUnit.id
              )
              .sort((a, b) => a.order_idx - b.order_idx)[0] ??
            null;
        }
      }
    }

    // --------------------------------------------------------
    // 8. المستوى انتهى بالكامل
    // --------------------------------------------------------

    if (!candidateLesson) {
      return {
        ok: true,
        data: {
          status: "completed",
          level,
          unit: null,
          lesson: null,
          progress: {
            completed: lessons.filter((lesson) =>
              completedIds.has(lesson.id)
            ).length,
            total: lessons.length,
            percentage: 100,
          },
        },
        error: null,
      };
    }

    // --------------------------------------------------------
    // 9. الوحدة الحالية للدرس التالي
    // --------------------------------------------------------

    const unit =
      units.find(
        (unit) => unit.id === candidateLesson.unit_id
      ) ?? null;

    if (!unit) {
      return {
        ok: false,
        data: null,
        error: new Error("Unit for candidate lesson not found"),
      };
    }

    // --------------------------------------------------------
    // 10. تقدم الوحدة
    // --------------------------------------------------------

    const unitLessons = sortedLessons.filter(
      (lesson) => lesson.unit_id === unit.id
    );

    const completedInUnit = unitLessons.filter((lesson) =>
      completedIds.has(lesson.id)
    ).length;

    const unitProgress =
      unitLessons.length > 0
        ? Math.round(
            (completedInUnit / unitLessons.length) * 100
          )
        : 0;

    // --------------------------------------------------------
    // 11. التأكد من وجود بلوك نشط
    // --------------------------------------------------------

    const { data: blocks, error: blocksError } =
      await supabase
        .from("blocks")
        .select("id, is_active")
        .eq("lesson_id", candidateLesson.id)
        .order("order_idx", { ascending: true });

    if (blocksError) {
      return {
        ok: false,
        data: null,
        error: blocksError,
      };
    }

    const hasActiveBlock =
      (blocks ?? []).some(
        (block) => block.is_active !== false
      );

    if (!hasActiveBlock) {
      return {
        ok: false,
        data: null,
        error: new Error(
          "The next lesson has no active blocks."
        ),
      };
    }

    // --------------------------------------------------------
    // 12. النتيجة
    // --------------------------------------------------------

    return {
      ok: true,
      data: {
        status: "continue",

        level,

        unit,

        lesson: candidateLesson,

        progress: {
          completed: completedInUnit,
          total: unitLessons.length,
          percentage: unitProgress,
        },
      },
      error: null,
    };
  } catch (error) {
    console.error("fetchContinueLearning error:", error);

    return {
      ok: false,
      data: null,
      error:
        error instanceof Error
          ? error
          : new Error("Unknown error"),
    };
  }
}