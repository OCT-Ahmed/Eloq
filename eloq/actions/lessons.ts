"use server";

import { createClient } from "@/lib/supabase/server";

export interface BlockData {
  block_id: string;
  saved_responses: Record<string, unknown>;
}

export interface CompleteLessonParams {
  lessonId: string;
  unitId: string;
  levelId: string;
  startedAt: string;
  blocksData: BlockData[];
}

export interface CompleteLessonResult {
  success: boolean;
  error?: string;

  data?: {
    passed: boolean;
    lesson_completed: boolean;

    score: number;
    max_score: number;
    percentage: number;

    errors: number;
    allowed_errors: number;

    attempt_id: string;
    attempt_number: number;

    xp_earned: number;
    total_xp: number;

    streak_updated: boolean;
    streak_count: number;
    highest_streak: number;
    last_activity_at: string | null;

    first_ever_completion: boolean;
    first_completion_of_lesson: boolean;

    unit_completion_percentage: number;
    completed_lessons: number;
    total_lessons: number;
  };
}

export async function completeLessonAction({
  lessonId,
  unitId,
  levelId,
  startedAt,
  blocksData,
}: CompleteLessonParams): Promise<CompleteLessonResult> {
  try {
    const supabase = await createClient();

    // --------------------------------------------------
    // 1. Get authenticated user on the server
    // --------------------------------------------------

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("completeLessonAction auth error:", userError);

      return {
        success: false,
        error: "تعذر التحقق من جلسة المستخدم.",
      };
    }

    if (!user) {
      return {
        success: false,
        error: "يجب تسجيل الدخول أولاً.",
      };
    }

    // --------------------------------------------------
    // 2. Find the student's database record
    //
    // Assumption:
    // students.id = authenticated user's auth UUID
    // --------------------------------------------------

    const { data: student, error: studentError } = await supabase
      .from("students")
      .select("id")
      .eq("id", user.id)
      .single();

    if (studentError || !student) {
      console.error(
        "completeLessonAction student lookup error:",
        studentError
      );

      return {
        success: false,
        error: "لم يتم العثور على ملف الطالب.",
      };
    }

    // --------------------------------------------------
    // 3. Basic validation
    // --------------------------------------------------

    if (!lessonId || !unitId || !levelId) {
      return {
        success: false,
        error: "بيانات الدرس غير مكتملة.",
      };
    }

    if (!Array.isArray(blocksData)) {
      return {
        success: false,
        error: "بيانات إجابات البلوكات غير صالحة.",
      };
    }

    // --------------------------------------------------
    // 4. Call the RPC
    // --------------------------------------------------

    const { data, error } = await supabase.rpc(
      "complete_lesson_and_update_streak",
      {
        p_student_id: student.id,
        p_lesson_id: lessonId,
        p_unit_id: unitId,
        p_level_id: levelId,
        p_started_at: startedAt,
        p_blocks_data: blocksData,
      }
    );

    if (error) {
      console.error("complete_lesson_and_update_streak error:", error);

      return {
        success: false,
        error: error.message || "تعذر إكمال الدرس.",
      };
    }

    // --------------------------------------------------
    // 5. RPC returns TABLE => one row
    // --------------------------------------------------

    const result = Array.isArray(data) ? data[0] : data;

    if (!result) {
      console.error("RPC returned no result.");

      return {
        success: false,
        error: "لم تصل نتيجة صالحة من الخادم.",
      };
    }

    return {
      success: true,
      data: {
        passed: Boolean(result.passed),
        lesson_completed: Boolean(result.lesson_completed),

        score: Number(result.score ?? 0),
        max_score: Number(result.max_score ?? 0),
        percentage: Number(result.percentage ?? 0),

        errors: Number(result.errors ?? 0),
        allowed_errors: Number(result.allowed_errors ?? 0),

        attempt_id: result.attempt_id,
        attempt_number: Number(result.attempt_number ?? 0),

        xp_earned: Number(result.xp_earned ?? 0),
        total_xp: Number(result.total_xp ?? 0),

        streak_updated: Boolean(result.streak_updated),
        streak_count: Number(result.streak_count ?? 0),
        highest_streak: Number(result.highest_streak ?? 0),
        last_activity_at: result.last_activity_at ?? null,

        first_ever_completion: Boolean(
          result.first_ever_completion
        ),

        first_completion_of_lesson: Boolean(
          result.first_completion_of_lesson
        ),

        unit_completion_percentage: Number(
          result.unit_completion_percentage ?? 0
        ),

        completed_lessons: Number(
          result.completed_lessons ?? 0
        ),

        total_lessons: Number(
          result.total_lessons ?? 0
        ),
      },
    };
  } catch (error) {
    console.error("completeLessonAction unexpected error:", error);

    return {
      success: false,
      error: "حدث خطأ غير متوقع أثناء إكمال الدرس.",
    };
  }
}