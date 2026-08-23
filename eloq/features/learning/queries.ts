import { supabase } from "@/lib/supabase/client";
import {
  fetchLevelBySlug,
  fetchUnitBySlug,
  fetchLessonBySlug,
  fetchUnits,
  fetchLessons,
} from "./learning.service";

// شرط النشر المعتمد: يُقبل الدرس إلا إذا كان is_published = false صراحةً
const isPublished = (lesson: any) => lesson.is_published !== false;

// ==========================================
// Dynamic Fallback With Exact Slugs
// ==========================================
async function getExactFirstLessonFallback(levelSlug = "beginner") {
  try {
    const levelRes = await fetchLevelBySlug(levelSlug);
    if (!levelRes.ok || !levelRes.data) return null;
    const level = levelRes.data;

    // محاولة جلب وحدة say-hi أولاً أو أول وحدة متوفرة
    let unit = null;
    const unitRes = await fetchUnitBySlug("say-hi", level.id);
    if (unitRes.ok && unitRes.data) {
      unit = unitRes.data;
    } else {
      const unitsRes = await fetchUnits(level.id);
      if (unitsRes.ok && unitsRes.data && unitsRes.data.length > 0) {
        unit = unitsRes.data[0];
      }
    }

    if (!unit) return null;

    // محاولة جلب درس first-encounters أولاً أو أول درس منشور
    let lesson = null;
    const lessonRes = await fetchLessonBySlug("first-encounters", unit.id);
    if (lessonRes.ok && lessonRes.data) {
      lesson = lessonRes.data;
    } else {
      const lessonsRes = await fetchLessons(unit.id);
      if (lessonsRes.ok && lessonsRes.data && lessonsRes.data.length > 0) {
        const valid = lessonsRes.data.filter(isPublished);
        lesson = valid.length > 0 ? valid[0] : lessonsRes.data[0];
      }
    }

    if (!lesson) return null;

    return {
      status: "continue",
      level,
      unit,
      lesson,
      lessonNumber: 1,
      progress: { percentage: 0 },
    };
  } catch (err) {
    console.error("Fallback error:", err);
    return null;
  }
}

// ==========================================
// Main Engine: fetchContinueLearning
// ==========================================
export async function fetchContinueLearning(
  studentId: string,
  levelSlug = "beginner"
) {
  try {
    // 1. جلب المستوى
    const levelRes = await fetchLevelBySlug(levelSlug);
    if (!levelRes.ok || !levelRes.data) {
      const fallback = await getExactFirstLessonFallback(levelSlug);
      return { ok: true, data: fallback, error: null };
    }
    const level = levelRes.data;

    // 2. جلب جميع الوحدات
    const unitsRes = await fetchUnits(level.id);
    if (!unitsRes.ok || !unitsRes.data || unitsRes.data.length === 0) {
      const fallback = await getExactFirstLessonFallback(levelSlug);
      return { ok: true, data: fallback, error: null };
    }
    const units = unitsRes.data;

    // 3. جلب جميع الدروس المتاحة لكل وحدة
    const allUnitsWithLessons: Array<{ unit: any; lessons: any[] }> = [];

    for (const unit of units) {
      const lessonsRes = await fetchLessons(unit.id);
      if (lessonsRes.ok && lessonsRes.data && lessonsRes.data.length > 0) {
        const validLessons = lessonsRes.data.filter(isPublished);
        if (validLessons.length > 0) {
          allUnitsWithLessons.push({ unit, lessons: validLessons });
        }
      }
    }

    if (allUnitsWithLessons.length === 0) {
      const fallback = await getExactFirstLessonFallback(levelSlug);
      return { ok: true, data: fallback, error: null };
    }

    // 4. جلب سجلات الإكمال
    const { data: completedRows } = await supabase
      .from("student_completed_lessons")
      .select("lesson_id")
      .eq("student_id", studentId);

    const completedIds = new Set(
      (completedRows ?? []).map((row: any) => String(row.lesson_id))
    );

    // 5. البحث عن أول درس غير مكتمل
    let targetUnit = null;
    let targetLesson = null;
    let targetUnitLessons: any[] = [];

    for (const item of allUnitsWithLessons) {
      const uncompleted = item.lessons.find(
        (l: any) => !completedIds.has(String(l.id))
      );
      if (uncompleted) {
        targetUnit = item.unit;
        targetLesson = uncompleted;
        targetUnitLessons = item.lessons;
        break;
      }
    }

    // في حال تم إكمال المستوى بالكامل
    if (!targetLesson || !targetUnit) {
      const lastUnit = units[units.length - 1];
      return {
        ok: true,
        data: {
          status: "completed",
          level,
          unit: lastUnit,
          lesson: null,
          lessonNumber: 0,
          progress: { percentage: 100 },
        },
        error: null,
      };
    }

    // 6. حساب ترتيب الدرس البشري ونسبة تقدم الوحدة
    const lessonIndex = targetUnitLessons.findIndex(
      (l: any) => l.id === targetLesson.id
    );
    const humanLessonNumber = lessonIndex >= 0 ? lessonIndex + 1 : 1;

    const completedCountInUnit = targetUnitLessons.filter((l: any) =>
      completedIds.has(String(l.id))
    ).length;

    const unitPercentage =
      targetUnitLessons.length > 0
        ? Math.round((completedCountInUnit / targetUnitLessons.length) * 100)
        : 0;

    return {
      ok: true,
      data: {
        status: "continue",
        level,
        unit: targetUnit,
        lesson: targetLesson,
        lessonNumber: humanLessonNumber,
        progress: { percentage: unitPercentage },
      },
      error: null,
    };
  } catch (error) {
    console.error("fetchContinueLearning error:", error);
    const fallback = await getExactFirstLessonFallback(levelSlug);
    return { ok: true, data: fallback, error: null };
  }
}
