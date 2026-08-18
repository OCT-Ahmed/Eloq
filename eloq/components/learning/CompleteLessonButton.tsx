"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  completeLessonAction,
  type BlockData,
} from "@/actions/lessons";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

interface CompleteLessonButtonProps {
  lessonId: string;
  unitId: string;
  levelId: string;
  startedAt: string;
  onSuccess?: (result: Awaited<ReturnType<typeof completeLessonAction>>) => void;
}

export default function CompleteLessonButton({
  lessonId,
  unitId,
  levelId,
  startedAt,
  onSuccess,
}: CompleteLessonButtonProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const answers = useLearningAnswersStore(
    (state) => state.answers
  );

  async function handleComplete() {
    if (loading || submitted) return;

    setLoading(true);

    try {
      // ---------------------------------------------
      // Convert Zustand state to RPC format
      // ---------------------------------------------

      const blocksData: BlockData[] = Object.entries(
        answers
      ).map(([blockId, savedResponses]) => ({
        block_id: blockId,
        saved_responses: savedResponses,
      }));

      const result = await completeLessonAction({
        lessonId,
        unitId,
        levelId,
        startedAt,
        blocksData,
      });

      // ---------------------------------------------
      // Server / RPC failure
      // ---------------------------------------------

      if (!result.success) {
        console.error("Complete lesson failed:", result.error);

        alert(
          result.error ??
            "تعذر إكمال الدرس. حاول مرة أخرى."
        );

        return;
      }

      // ---------------------------------------------
      // RPC succeeded
      // ---------------------------------------------

      setSubmitted(true);

      onSuccess?.(result);

      // ---------------------------------------------
      // Failed lesson is still a valid server result.
      // It is NOT a network/server error.
      // ---------------------------------------------

      if (result.data && !result.data.passed) {
        alert(
          `لم تجتز الدرس.\n\nالنتيجة: ${result.data.percentage}%\nالأخطاء: ${result.data.errors}/${result.data.allowed_errors}`
        );

        // Allow another attempt.
        setSubmitted(false);

        return;
      }

      // ---------------------------------------------
      // Successful completion
      // ---------------------------------------------

      if (result.data?.passed) {
        alert(
          `تم إكمال الدرس بنجاح!\n\n+${result.data.xp_earned} XP\nStreak: ${result.data.streak_count}`
        );
      }
    } catch (error) {
      console.error(
        "CompleteLessonButton unexpected error:",
        error
      );

      alert(
        "حدث خطأ غير متوقع. تحقق من اتصال الإنترنت وحاول مرة أخرى."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      onClick={handleComplete}
      disabled={loading || submitted}
      className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold rounded-xl transition shadow-md"
    >
      {loading
        ? "جاري الإرسال..."
        : submitted
          ? "تم إكمال الدرس ✓"
          : "إكمال الدرس"}
    </Button>
  );
}