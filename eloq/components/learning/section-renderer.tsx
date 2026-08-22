"use client";

import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Lesson } from "@/types/learning";
import BlockRenderer from "./block-renderer";
import SectionHeader from "./section-header";
import CompleteLessonButton from "./CompleteLessonButton";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";
import { useAudioStore } from "@/store/useAudioStore";
import { cn } from "@/lib/utils";

export default function SectionRenderer({ lesson }: { lesson: Lesson }) {
  const [startedAt] = useState(() => new Date().toISOString());
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);

  const initializeLesson = useLearningAnswersStore(
    (state) => state.initializeLesson
  );

  const { playBlockAudio, isPlaying, audioUrl } = useAudioStore();

  useEffect(() => {
    initializeLesson(lesson.id);
  }, [lesson.id, initializeLesson]);

  // إظهار منبثق "الصوت قيد التجهيز" لفترة قصيرة
  const handleDisabledAudioClick = (blockId: string) => {
    setActiveTooltipId(blockId);
    setTimeout(() => setActiveTooltipId(null), 2000);
  };

  return (
    <section className="w-full flex flex-col gap-8 pt-2 pb-12 text-base">
      <SectionHeader
        type={lesson.slug}
        title={lesson.title.en ?? ""}
        lesson={lesson.description?.en}
        videoUrl={lesson.video?.url}
      />

      <div className="flex flex-col gap-8 w-full">
        {lesson.blocks.map((block, index) => {
          if (block.isActive === false) return null;

          const instruction = block.extensions?.instruction;
          const blockAudioUrl = block.extensions?.audio?.url;
          const isThisPlaying = isPlaying && audioUrl === blockAudioUrl;

          return (
            <article
              key={block.id}
              className="w-full flex flex-col gap-4 pb-8 border-b border-border-subtle/60 last:border-0"
            >
              <header className="flex items-start gap-3 w-full">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-eloq-green/10 text-sm font-bold text-eloq-green border border-eloq-green/20">
                  {index + 1}
                </span>

                <div className="flex items-center gap-3 text-base sm:text-lg font-bold leading-snug text-foreground pt-0.5">
                  <p>
                    {instruction?.text.en ||
                      instruction?.en ||
                      "Follow the instructions below:"}
                  </p>

                  {/* زر الصوت الأصلي */}
                  <div className="relative flex items-center">
                    {blockAudioUrl ? (
                      <button
                        type="button"
                        aria-label="Play audio"
                        onClick={() => playBlockAudio(blockAudioUrl)}
                        className={cn(
                          "relative flex size-9 shrink-0 items-center justify-center rounded-xl border-2 transition-all duration-300 active:scale-95",
                          isThisPlaying
                            ? "border-eloq-purple text-eloq-purple bg-eloq-purple/10 audio-pulse-ring"
                            : "border-border-subtle/80 bg-background text-muted-foreground hover:border-eloq-purple/50 hover:text-eloq-purple hover:bg-eloq-purple/5"
                        )}
                      >
                        <Volume2
                          size={18}
                          className={cn(
                            "transition-transform duration-300",
                            isThisPlaying && "scale-110"
                          )}
                        />
                      </button>
                    ) : (
                      <button
                        type="button"
                        aria-label="Audio coming soon"
                        onClick={() => handleDisabledAudioClick(block.id)}
                        className="flex size-9 shrink-0 items-center justify-center rounded-xl border-2 border-border-subtle/40 bg-background/50 text-muted-foreground/40 transition-colors hover:text-eloq-purple hover:border-eloq-purple/40"
                      >
                        <Volume2 size={18} />
                      </button>
                    )}

                    {/* المنبثق الصغير العائم بديل الـ alert */}
                    <AnimatePresence>
                      {activeTooltipId === block.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85, y: 6 }}
                          animate={{ opacity: 1, scale: 1, y: -4 }}
                          exit={{ opacity: 0, scale: 0.85, y: 2 }}
                          transition={{ duration: 0.15 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 whitespace-nowrap rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground shadow-lg backdrop-blur pointer-events-none z-10"
                        >
                          الصوت قيد التجهيز قريباً
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </header>

              <div className="pl-3 sm:pl-6 border-l-2 border-eloq-purple/30 ml-3.5 w-full text-foreground pt-1">
                <BlockRenderer block={block} />
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex justify-center pt-4 border-t border-border-subtle/40">
        <CompleteLessonButton
          lessonId={lesson.id}
          unitId={lesson.unitId}
          levelId={lesson.levelId}
          startedAt={startedAt}
        />
      </div>
    </section>
  );
}
