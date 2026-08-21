"use client";

import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { Lesson } from "@/types/learning";
import BlockRenderer from "./block-renderer";
import SectionHeader from "./section-header";
import CompleteLessonButton from "./CompleteLessonButton";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

export default function SectionRenderer({
  lesson,
}: {
  lesson: Lesson;
}) {
  // وقت بداية محاولة هذا الدرس (يتم إنشاؤه مرة واحدة عند فتح الدرس)
  const [startedAt] = useState(() => new Date().toISOString());

  const initializeLesson = useLearningAnswersStore(
    (state) => state.initializeLesson
  );

  useEffect(() => {
    initializeLesson(lesson.id);
  }, [lesson.id, initializeLesson]);

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

          return (
            <article
              key={block.id}
              className="w-full flex flex-col gap-4 pb-8 border-b border-border-subtle/60 last:border-0"
            >
              <header className="flex items-start gap-3 w-full">
                {/* Index badge - block.id commented out for clean UI */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-eloq-green/10 text-sm font-bold text-eloq-green border border-eloq-green/20">
                  {index + 1}
                  {/* {block.id} - Keep for debugging when needed */}
                </span>

                <div className="flex items-center gap-2 text-base sm:text-lg font-bold leading-snug text-foreground pt-0.5">
                  <p>
                    {instruction?.text.en ||
                      instruction?.en ||
                      "Follow the instructions below:"}
                  </p>

                  {block.extensions?.audio?.url ? (
                    <button
                      type="button"
                      aria-label="Play audio"
                      className="shrink-0 text-eloq-purple transition-transform hover:scale-110 active:scale-95"
                    >
                      <Volume2 size={20} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      aria-label="Audio coming soon"
                      onClick={() =>
                        alert("Audio support will be available soon.")
                      }
                      className="shrink-0 text-muted transition-colors hover:text-eloq-purple"
                    >
                      <Volume2 size={20} />
                    </button>
                  )}
                </div>
              </header>

              {/* Block Content Container */}
              <div className="pl-3 sm:pl-6 border-l-2 border-eloq-purple/30 ml-3.5 w-full text-foreground pt-1">
                <BlockRenderer block={block} />
              </div>
            </article>
          );
        })}
      </div>

      {/* Complete Lesson Action */}
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
