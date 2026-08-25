"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, Play, Sparkles, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playUISound } from "@/lib/uiSounds";

export type LessonItem = {
  id: string;
  slug: string;
  title_en?: string;
  lesson?: string;
  lesson_type?: string;
};

interface InteractiveUnitPathProps {
  lessons: LessonItem[];
  levelSlug: string;
  unitSlug: string;
}

export default function InteractiveUnitPath({
  lessons,
  levelSlug,
  unitSlug,
}: InteractiveUnitPathProps) {
  const [selectedLesson, setSelectedLesson] = useState<LessonItem | null>(null);

  // مصفوفة لتحديد تموج النقاط (يمين، منتصف، يسار، منتصف...)
  const offsets = ["translate-x-0", "-translate-x-12 sm:-translate-x-20", "translate-x-0", "translate-x-12 sm:translate-x-20"];

  return (
    <div className="relative flex w-full flex-col items-center py-6">
      {/* SVG Connecting Line Background */}
      <div className="absolute inset-y-0 left-1/2 -z-10 w-1 -translate-x-1/2 bg-border-subtle/60 rounded-full" />

      {/* Nodes List */}
      <div className="flex w-full flex-col items-center gap-12 sm:gap-16">
        {lessons.map((lesson, index) => {
          const offsetClass = offsets[index % offsets.length];
          const isSelected = selectedLesson?.id === lesson.id;

          return (
            <div
              key={lesson.id}
              className={`relative flex items-center justify-center transition-transform duration-300 ${offsetClass}`}
            >
              {/* Node Button */}
              <button
                type="button"
                onClick={() => { playUISound("click"); setSelectedLesson(lesson); }}

                className={`group relative flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
                  isSelected
                    ? "border-eloq-green bg-eloq-purple text-white ring-4 ring-eloq-purple/30"
                    : "border-border-subtle bg-card text-eloq-purple hover:border-eloq-purple"
                }`}
              >
                <BookOpen className="h-6 w-6 transition-transform group-hover:scale-110" />

                {/* Node Index Badge */}
                <span className="absolute -bottom-2 flex h-6 w-6 items-center justify-center rounded-full bg-eloq-purple text-[11px] font-bold text-white shadow">
                  {index + 1}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Lesson Details Modal / Popover Card */}
      <AnimatePresence>
        {selectedLesson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 px-4 backdrop-blur-sm">
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedLesson(null)}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-border-subtle bg-card p-6 shadow-float"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => (playUISound("click"), setSelectedLesson(null))}
                className="absolute right-4 top-4 rounded-full p-1 text-muted transition-colors hover:bg-border-subtle/40 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Lesson Badge & Title */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-eloq-green/10 px-2.5 py-0.5 text-xs font-bold text-eloq-green border border-eloq-green/20">
                    <Sparkles className="h-3 w-3" />
                    {selectedLesson.lesson_type ?? "Lesson"}
                  </span>
                  {selectedLesson.lesson && (
                    <span className="text-xs font-semibold text-muted">
                      {selectedLesson.lesson}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  {selectedLesson.title_en ?? "Untitled Lesson"}
                </h3>

                <p className="text-xs text-muted leading-relaxed">
                  Ready to test your knowledge? Complete this lesson node to unlock the next challenge in your path.
                </p>
              </div>

              {/* Start Lesson CTA */}
              <div className="mt-6">
                <Link
                onClick={() => playUISound("click")}
                  href={`/dashboard/learn/${levelSlug}/${unitSlug}/${selectedLesson.slug}`}
                  className="block w-full"
                >
                  <Button className="w-full bg-eloq-purple text-white hover:bg-eloq-purple/90 font-bold py-5 rounded-xl flex items-center justify-center gap-2">
                    <span>Start Lesson</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Bottom Accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-eloq-green" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
