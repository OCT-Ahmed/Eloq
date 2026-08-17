import { Play } from "lucide-react";
import LessonTools from "./lesson-tools";

interface SectionHeaderProps {
  type: string;
  title: string;
  lesson?: string;
  lessonTools?: React.ReactNode;
  videoUrl?: string;
}

export default function SectionHeader({
  type,
  title,
  lesson,
  lessonTools,
  videoUrl,
}: SectionHeaderProps) {
  return (
    <header className="relative col-span-full mb-6 rounded-2xl bg-foreground p-5 sm:p-7 shadow-sm border border-border-subtle">
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h2 className="font-extrabold text-3xl leading-tight text-eloq-green">
              {title}
            </h2>

            {!videoUrl && (
              <button
                type="button"
                aria-label="Play lesson video"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eloq-purple text-white shadow-md transition hover:scale-105 active:scale-95"
              >
                <Play size={21} fill="currentColor" />
              </button>
            )}
          </div>

          {lesson && (
            <p className="mt-4 max-w-3xl text-lg sm:text-xl font-medium italic leading-relaxed text-foreground">
              {lesson}
            </p>
          )}
        </div>
      </div>

      {/* Lesson tools */}
      {lessonTools ?? <LessonTools />}
    </header>
  );
}