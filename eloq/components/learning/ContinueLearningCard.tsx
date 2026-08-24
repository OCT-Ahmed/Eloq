"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import { playUISound } from "@/lib/uiSounds";

export default function ContinueLearningCard() {
  // بيانات ثابتة مؤقتة
  const unitNumber = 1;
  const unitTitle = "Say Hi";
  const lessonNumber = 1;
  const lessonTitle = "First Encounters";
  const percentage = 0;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    playUISound("eloqClick");
  };

  return (
    <div
      onClick={handleClick}
      className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-border-subtle bg-background p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-eloq-purple/50 hover:shadow-float"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-eloq-purple">
            <BookOpen className="h-4 w-4 shrink-0" />
            <span>Unit {unitNumber}</span>
          </div>

          <h3 className="mt-2 text-lg font-bold text-foreground transition-colors group-hover:text-eloq-purple sm:text-xl">
            Start your English journey 🚀
          </h3>

          <p className="mt-1 text-sm text-muted">{unitTitle}</p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-eloq-purple/10 text-eloq-purple transition-all duration-300 group-hover:bg-eloq-purple group-hover:text-white">
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-border-subtle/70 bg-card/40 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Your first lesson
        </p>
        <p className="mt-1 font-semibold text-foreground">
          Unit {unitNumber} · Lesson {lessonNumber}: {lessonTitle}
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-muted">Your journey</span>
          <span className="text-foreground">{percentage}%</span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-border-subtle/60">
          <div
            className="h-full rounded-full bg-eloq-purple transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <div className="flex w-full items-center justify-center rounded-xl bg-eloq-purple px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-eloq-purple/90 sm:w-auto">
          <span>Start Learning</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-eloq-green" />
    </div>
  );
}
