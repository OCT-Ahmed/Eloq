"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

type ContinueLearningData = {
  status?: "continue" | "completed";
  level?: any;
  unit?: any;
  lesson?: any;
  progress?: {
    completed: number;
    total: number;
    percentage: number;
  };
};

export default function ContinueLearningCard({
  data,
}: {
  data?: ContinueLearningData;
}) {
  // ============================================================
  // بيانات وهمية مؤقتة (Mock Data)
  // ============================================================
  const href = "/dashboard/learning/beginner/unit-1/day-and-night-greetings";

  const unitNumber = 1;
  const lessonNumber = 3;

  const progress = data?.progress ?? {
    completed: 2, // تم إكمال درسين
    total: 5,     // إجمالي دروس الوحدة
    percentage: 40, // 40%
  };

  const hasStarted = progress.completed > 0;

  if (data?.status === "completed") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-background p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-eloq-green/10 text-eloq-green">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-eloq-purple">
              Beginner
            </p>

            <h3 className="mt-1 text-xl font-bold text-foreground">
              Level completed 🎉
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-muted">
              You completed all the lessons in this level.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-eloq-green" />
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-border-subtle bg-background p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-eloq-purple/50 hover:shadow-float"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-eloq-purple">
            <BookOpen className="h-4 w-4 shrink-0" />
            <span>Unit {unitNumber}</span>
          </div>

          <h3 className="mt-2 text-lg font-bold text-foreground transition-colors group-hover:text-eloq-purple sm:text-xl">
            {hasStarted
              ? "Continue where you left off"
              : "Start your English journey 🚀"}
          </h3>

          <p className="mt-1 text-sm text-muted">
            Greetings & Basic Expressions
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-eloq-purple/10 text-eloq-purple transition-all duration-300 group-hover:bg-eloq-purple group-hover:text-white">
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* Lesson */}
      <div className="mt-5 rounded-xl border border-border-subtle/70 bg-card/40 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {hasStarted ? "Next lesson" : "Your first lesson"}
        </p>

        <p className="mt-1 font-semibold text-foreground">
          Unit {unitNumber} · Lesson {lessonNumber}: Day & Night Greetings
        </p>
      </div>

      {/* Progress */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-muted">
            {hasStarted ? "Unit progress" : "Your journey"}
          </span>

          <span className="text-foreground">
            {progress.percentage}%
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-border-subtle/60">
          <div
            className="h-full rounded-full bg-eloq-purple transition-all duration-500"
            style={{
              width: `${progress.percentage}%`,
            }}
          />
        </div>

        <p className="text-xs text-muted">
          {hasStarted
            ? `${progress.completed} of ${progress.total} lessons completed`
            : "Begin your first lesson and start building your progress."}
        </p>
      </div>

      {/* Action */}
      <div className="mt-6 flex justify-end">
        <div className="flex w-full items-center justify-center rounded-xl bg-eloq-purple px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-eloq-purple/90 sm:w-auto">
          <span>
            {hasStarted ? "Continue Learning" : "Start Learning"}
          </span>

          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>

      {/* Accent */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-eloq-green" />
    </Link>
  );
}
