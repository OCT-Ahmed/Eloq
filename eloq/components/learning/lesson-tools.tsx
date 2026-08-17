"use client";

import { useState } from "react";
import { Bot, CheckCheck, FileText, Grid2X2, Lightbulb, StickyNote, X, Volume2 } from "lucide-react";

export default function LessonTools() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-3 top-1/2 z-40 -translate-y-1/2 sm:right-5">
      <div className={`flex flex-col items-center gap-2 rounded-2xl border border-border-subtle bg-foreground/95 p-2 shadow-xl backdrop-blur transition-all duration-200 ${isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"}`}>
        <button type="button" aria-label="Play audio" className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-eloq-purple">
          <Volume2 size={19} />
        </button>

        <button type="button" aria-label="Show explanation" className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-eloq-purple">
          <FileText size={19} />
        </button>

        <button type="button" aria-label="Show tip" className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-amber-500">
          <Lightbulb size={19} />
        </button>

        <button type="button" aria-label="Show answers" className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-eloq-purple">
          <CheckCheck size={19} />
        </button>

        <button type="button" aria-label="AI assistant" className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-eloq-purple">
          <Bot size={19} />
        </button>

        <button type="button" aria-label="Notes" className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-eloq-purple">
          <StickyNote size={19} />
        </button>
      </div>

      <button type="button" onClick={() => setIsOpen((value) => !value)} aria-label="Lesson tools" className="mt-2 flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-foreground text-muted shadow-lg transition hover:text-eloq-purple active:scale-95">
        {isOpen ? <X size={21} /> : <Grid2X2 size={21} />}
      </button>
    </div>
  );
}