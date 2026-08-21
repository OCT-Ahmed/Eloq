"use client";

import { Sparkles, X } from "lucide-react";

interface LessonAssistantModalProps {
  onClose: () => void;
}

export default function LessonAssistantModal({ onClose }: LessonAssistantModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-3xl bg-background border border-border p-5 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
            <Sparkles size={18} className="text-purple-600 dark:text-purple-400" />
            مساعد الدرس الذكي
          </p>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-muted-foreground hover:bg-muted"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 max-h-[50vh] overflow-y-auto space-y-3">
          <div className="rounded-2xl bg-muted/50 p-3.5 text-sm">
            <p className="font-semibold text-foreground mb-1">كيف أسأل بشكل مؤدب؟</p>
            <p className="text-muted-foreground">
              استخدم عبارة <span className="font-bold text-foreground">"Could I have..."</span> للطلب بلباقة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
