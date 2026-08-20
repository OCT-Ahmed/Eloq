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
  onSuccess?: (
    result: Awaited<ReturnType<typeof completeLessonAction>>
  ) => void;
}

export default function CompleteLessonButton({
  lessonId,
  unitId,
  levelId,
  startedAt,
  onSuccess,
}: CompleteLessonButtonProps) {
  const [loading, setLoading] = useState(false);

  const [debugPayload, setDebugPayload] =
    useState<unknown>(null);

  const [rpcResult, setRpcResult] =
    useState<unknown>(null);

  const [debugLesson, setDebugLesson] =
    useState<unknown>(null);

  const answers = useLearningAnswersStore(
    (state) => state.answers
  );

  async function handleComplete() {
    if (loading) return;

    setLoading(true);

    try {
      const blocksData: BlockData[] = Object.entries(
        answers
      ).map(([blockId, savedResponses]) => ({
        block_id: blockId,
        saved_responses: savedResponses,
      }));

      // كل ما سيتم إرساله للـ Server Action / RPC
      setDebugPayload({
        lessonId,
        unitId,
        levelId,
        startedAt,
        answers,
        submittedBlockIds: Object.keys(answers),
        blocksData,
      });

      const result = await completeLessonAction({
        lessonId,
        unitId,
        levelId,
        startedAt,
        blocksData,
      });

      // القيمة الكاملة التي رجعت من RPC عبر Server Action
      setRpcResult(result);

      if (!result.success) {
        alert(
          result.error ??
            "تعذر إكمال الدرس. حاول مرة أخرى."
        );

        return;
      }

      const data = result.data;

      if (!data) {
        alert("لم تصل نتيجة صالحة من الخادم.");
        return;
      }

      onSuccess?.(result);

      if (!data.passed) {
        alert(
          `لم تجتز الدرس.\n\n` +
            `النتيجة: ${data.percentage}%\n` +
            `الدرجة: ${data.score}/${data.max_score}\n` +
            `الأخطاء: ${data.errors}/${data.allowed_errors}\n` +
            `المحاولة: ${data.attempt_number}`
        );

        return;
      }

      alert(
        `تم إكمال الدرس بنجاح! 🎉\n\n` +
          `النتيجة: ${data.percentage}%\n` +
          `الدرجة: ${data.score}/${data.max_score}\n` +
          `+${data.xp_earned} XP\n` +
          `إجمالي XP: ${data.total_xp}\n` +
          `Streak: ${data.streak_count}\n` +
          `المحاولة: ${data.attempt_number}`
      );
    } catch (error) {
      const unexpectedError =
        error instanceof Error
          ? {
              name: error.name,
              message: error.message,
              stack: error.stack,
            }
          : error;

      setRpcResult({
        success: false,
        unexpectedError,
      });

      alert(
        "حدث خطأ غير متوقع. تحقق من اتصال الإنترنت وحاول مرة أخرى."
      );
    } finally {
      setLoading(false);
    }
  }

  function showDebugLesson() {
    setDebugLesson({
      lessonId,
      unitId,
      levelId,
      answers,
      submittedBlockIds: Object.keys(answers),
      submittedBlockCount: Object.keys(answers).length,
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-start gap-3 w-full">
        <Button
          type="button"
          onClick={handleComplete}
          disabled={loading}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold rounded-xl transition shadow-md"
        >
          {loading
            ? "جاري الإرسال..."
            : "إكمال الدرس"}
        </Button>

        <button
          type="button"
          onClick={showDebugLesson}
          className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-bold text-yellow-500"
        >
          DEBUG
        </button>
      </div>

      {/* =====================================================
          DEBUG LESSON / ANSWERS
      ===================================================== */}

      {debugLesson !== null && (
        <section className="w-full mt-6 rounded-xl border border-yellow-500/30 bg-black/20 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="font-bold text-yellow-500">
              Debug — Current Lesson / Answers
            </h2>

            <button
              type="button"
              onClick={() =>
                navigator.clipboard.writeText(
                  JSON.stringify(
                    debugLesson,
                    null,
                    2
                  )
                )
              }
              className="rounded-lg border border-border px-3 py-1.5 text-xs hover:bg-muted/10"
            >
              Copy
            </button>
          </div>

          <pre className="max-h-[500px] overflow-auto whitespace-pre-wrap break-all rounded-lg bg-black/50 p-4 text-xs leading-6 text-white">
            {JSON.stringify(
              debugLesson,
              null,
              2
            )}
          </pre>
        </section>
      )}

      {/* =====================================================
          DEBUG PAYLOAD
      ===================================================== */}

      {debugPayload !== null && (
        <section className="w-full mt-6 rounded-xl border border-blue-500/30 bg-black/20 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="font-bold text-blue-400">
              Debug — RPC Payload
            </h2>

            <button
              type="button"
              onClick={() =>
                navigator.clipboard.writeText(
                  JSON.stringify(
                    debugPayload,
                    null,
                    2
                  )
                )
              }
              className="rounded-lg border border-border px-3 py-1.5 text-xs hover:bg-muted/10"
            >
              Copy
            </button>
          </div>

          <pre className="max-h-[700px] overflow-auto whitespace-pre-wrap break-all rounded-lg bg-black/50 p-4 text-xs leading-6 text-white">
            {JSON.stringify(
              debugPayload,
              null,
              2
            )}
          </pre>
        </section>
      )}

      {/* =====================================================
          RPC RESULT
      ===================================================== */}

      {rpcResult !== null && (
        <section className="w-full mt-6 rounded-xl border border-green-500/30 bg-black/20 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="font-bold text-green-400">
              RPC Result
            </h2>

            <button
              type="button"
              onClick={() =>
                navigator.clipboard.writeText(
                  JSON.stringify(
                    rpcResult,
                    null,
                    2
                  )
                )
              }
              className="rounded-lg border border-border px-3 py-1.5 text-xs hover:bg-muted/10"
            >
              Copy
            </button>
          </div>

          <pre className="max-h-[700px] overflow-auto whitespace-pre-wrap break-all rounded-lg bg-black/50 p-4 text-xs leading-6 text-white">
            {JSON.stringify(
              rpcResult,
              null,
              2
            )}
          </pre>
        </section>
      )}
    </div>
  );
}