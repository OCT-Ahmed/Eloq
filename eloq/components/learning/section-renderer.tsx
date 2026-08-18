"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import { Lesson } from "@/types/learning";
import BlockRenderer from "./block-renderer";
import SectionHeader from "./section-header";
import CompleteLessonButton from "./CompleteLessonButton";

export default function SectionRenderer({
  lesson,
}: {
  lesson: Lesson;
}) {
  // وقت بداية محاولة هذا الدرس.
  // يتم إنشاؤه مرة واحدة عند فتح SectionRenderer
  // ولا يتغير أثناء الحل.
  const [startedAt] = useState(() =>
    new Date().toISOString()
  );

  return (
    <section className="w-full flex flex-col gap-6 pt-4 pb-24 text-base">
      <SectionHeader
        type={lesson.slug}
        title={lesson.title.en ?? ""}
        lesson={lesson.description?.en}
        videoUrl={lesson.video?.url}
      />

      <div className="flex flex-col gap-6 w-full">
        {lesson.blocks.map((block, index) => {
          if (block.isActive === false) return null;

          const instruction = block.extensions?.instruction;

          return (
            <article
              key={block.id}
              className="w-full flex flex-col gap-3 pb-6 border-b border-neutral-200/10 last:border-0"
            >
              <header className="flex items-start gap-3 w-full">
                <span className="shrink-0 select-none font-bold text-lg sm:text-xl text-eloq-green">
                  {index + 1}
                </span>

                <div className="flex items-start gap-2 text-white sm:text-lg font-bold leading-normal text-foreground">
                  <p>
                    {instruction?.text.en ||
                      instruction?.en ||
                      "......"}
                  </p>

                  {block.extensions?.audio?.url ? (
                    <button
                      type="button"
                      aria-label="Play audio"
                      className="mt-1 shrink-0 text-eloq-purple transition hover:scale-105"
                    >
                      <Volume2 size={19} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      aria-label="Audio coming soon"
                      onClick={() =>
                        alert(
                          "Audio support will be available soon."
                        )
                      }
                      className="mt-1 shrink-0 text-muted transition hover:text-eloq-purple"
                    >
                      <Volume2 size={19} />
                    </button>
                  )}
                </div>
              </header>

              <div className="pl-3 sm:pl-6 border-l-2 border-eloq-purple/20 ml-2 sm:ml-3 w-full text-foreground">
                <BlockRenderer block={block} />
              </div>
            </article>
          );
        })}
      </div>

      {/* Complete Lesson */}
      <div className="flex justify-center pt-2">
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