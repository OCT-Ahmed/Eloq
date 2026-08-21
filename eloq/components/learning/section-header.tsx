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
    <header className="relative col-span-full mb-6 overflow-hidden rounded-2xl border border-border-subtle bg-card p-5 sm:p-7 shadow-soft">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-eloq-purple">
              {type || "Lesson Session"}
            </span>
            <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
              {title}
            </h1>
          </div>

          {!videoUrl ? (
            <button
              type="button"
              aria-label="Play lesson video"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-eloq-purple text-white shadow-float transition-transform hover:scale-105 active:scale-95"
            >
              <Play size={20} fill="currentColor" />
            </button>
          ) : null}
        </div>

        {lesson && (
          <p className="mt-1 text-sm sm:text-base font-medium leading-relaxed text-muted">
            {lesson}
          </p>
        )}
      </div>

      {/* Lesson Tools */}
      {lessonTools ?? <LessonTools />}
    </header>
  );
}