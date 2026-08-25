"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { completeLessonAction, type BlockData } from "@/actions/lessons";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";
import { playUISound } from "@/lib/uiSounds";

interface CompleteLessonButtonProps {
  lessonId: string;
  unitId: string;
  levelId: string;
  startedAt: string;
  onSuccess?: (result: Awaited<ReturnType<typeof completeLessonAction>>) => void;
}

type LessonResult = NonNullable<Awaited<ReturnType<typeof completeLessonAction>>["data"]>;

type ModalState =
  | { type: "result"; data: LessonResult }
  | { type: "error"; message: string }
  | null;

const EMPTY_ANSWERS = {};

export default function CompleteLessonButton({
  lessonId,
  unitId,
  levelId,
  startedAt,
  onSuccess,
}: CompleteLessonButtonProps) {
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState<ModalState>(null);

  const answers =
    useLearningAnswersStore((state) => state.answersByLesson[lessonId]) ??
    EMPTY_ANSWERS;

  async function handleComplete() {
    if (loading) return;

    setLoading(true);

    try {
      const blocksData: BlockData[] = Object.entries(answers).map(
        ([blockId, savedResponses]) => ({
          block_id: blockId,
          saved_responses: savedResponses,
        })
      );

      const result = await completeLessonAction({
        lessonId,
        unitId,
        levelId,
        startedAt,
        blocksData,
      });

      if (!result.success) {
        playUISound("wrongAnswer");
        setModalState({
          type: "error",
          message: result.error ?? "تعذر إكمال الدرس. حاول مرة أخرى.",
        });
        return;
      }

      const data = result.data;

      if (!data) {
        playUISound("wrongAnswer");
        setModalState({
          type: "error",
          message: "لم تصل نتيجة صالحة من الخادم.",
        });
        return;
      }

      // تشغيل الصوت المناسب فور استقبال النتيجة
      playUISound(data.passed ? "correctAnswer" : "wrongAnswer");

      onSuccess?.(result);
      setModalState({ type: "result", data });
    } catch (error) {
      playUISound("wrongAnswer");
      setModalState({
        type: "error",
        message: "حدث خطأ غير متوقع. تحقق من اتصال الإنترنت وحاول مرة أخرى.",
      });
    } finally {
      setLoading(false);
    }
  }

  const closeModal = () => setModalState(null);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-center w-full">
        <Button
          type="button"
          onClick={() => {
            playUISound("click");
            handleComplete(); // تم إضافة الأقواس لاستدعاء الدالة
          }}
          disabled={loading}
          className="w-full max-w-xs py-3 bg-green-600 hover:bg-green-700 active:scale-95 disabled:opacity-50 text-white font-bold rounded-xl transition shadow-md"
        >
          {loading ? "جاري الإرسال..." : "إكمال الدرس"}
        </Button>
      </div>

      {/* Modal التفاعلي لإظهار النتائج */}
      {modalState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 text-white shadow-2xl text-right dir-rtl">
            
            {/* حالة الخطأ العام */}
            {modalState.type === "error" && (
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-2xl">
                  ⚠️
                </div>
                <h3 className="text-xl font-bold text-red-400">تنبيه</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {modalState.message}
                </p>
                <Button
                  onClick={() => {
                    playUISound("click");
                    closeModal(); // تم إضافة الأقواس لاستدعاء الدالة
                  }}
                  className="w-full mt-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl py-2.5"
                >
                  حسناً
                </Button>
              </div>
            )}

            {/* حالة نتيجة الدرس */}
            {modalState.type === "result" && (
              <div className="flex flex-col gap-5">
                <div className="text-center space-y-2">
                  <div className="text-5xl mb-2">
                    {modalState.data.passed ? "🎉" : "💪"}
                  </div>
                  <h3
                    className={`text-2xl font-black ${
                      modalState.data.passed ? "text-emerald-400" : "text-amber-400"
                    }`}
                  >
                    {modalState.data.passed ? "أحسنت! أتممت الدرس" : "لم تجتز الدرس هذه المرة"}
                  </h3>
                  <p className="text-xs text-slate-400">
                    المحاولة رقم: {modalState.data.attempt_number}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 dir-rtl">
                  <div className="col-span-2 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-300">النتيجة والدرجة</span>
                    <span className="text-base font-bold text-white">
                      {modalState.data.percentage}% ({modalState.data.score}/{modalState.data.max_score})
                    </span>
                  </div>

                  {modalState.data.passed && (
                    <>
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col gap-1">
                        <span className="text-xs text-emerald-400/80 font-medium">النقاط المكتسبة</span>
                        <span className="text-lg font-bold text-emerald-400">
                          +{modalState.data.xp_earned} XP
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col gap-1">
                        <span className="text-xs text-slate-400 font-medium">إجمالي XP</span>
                        <span className="text-lg font-bold text-slate-200">
                          {modalState.data.total_xp}
                        </span>
                      </div>
                    </>
                  )}

                  {modalState.data.passed && modalState.data.streak_count !== undefined && (
                    <div className="col-span-2 p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-orange-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🔥</span>
                        <span className="text-sm font-bold text-orange-400">أيام المتابعة (Streak)</span>
                      </div>
                      <span className="text-base font-black text-orange-300">
                        {modalState.data.streak_count} أيام
                      </span>
                    </div>
                  )}

                  {!modalState.data.passed && (
                    <div className="col-span-2 p-3.5 rounded-xl bg-red-950/30 border border-red-500/30 flex justify-between items-center">
                      <span className="text-sm font-medium text-red-300">الأخطاء</span>
                      <span className="text-sm font-bold text-red-400">
                        {modalState.data.errors}
                      </span>
                    </div>
                  )}
                </div>

                <Button
                  onClick={closeModal}
                  className={`w-full py-3 font-bold rounded-xl text-white transition shadow-lg mt-2 ${
                    modalState.data.passed
                      ? "bg-emerald-600 hover:bg-emerald-500"
                      : "bg-amber-600 hover:bg-amber-500"
                  }`}
                >
                  {modalState.data.passed ? "متابعة" : "إعادة المحاولة"}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
