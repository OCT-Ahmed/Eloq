"use client";

import { Fragment } from "react";
import { ReadingBlock as ReadingBlockType } from "@/types/learning";

interface ReadingBlockProps {
  data: ReadingBlockType["data"];
}

// دالة لتظليل النصوص المكتوبة بين ** **
function renderRichText(text: string) {
  if (!text) return null;
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="rounded bg-eloq-purple/15 px-1.5 py-0.5 font-bold text-eloq-purple">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export default function ReadingBlock({ data }: ReadingBlockProps) {
  if (!data) return null;

  return (
    <div className="w-full space-y-4 rounded-2xl border border-border-subtle bg-card p-5 sm:p-6 shadow-soft">
      {data.title && (
        <h3 className="text-lg font-bold text-foreground sm:text-xl">
          {data.title}
        </h3>
      )}

      <div className="space-y-3">
        {data.paragraphs?.map((paragraph, index) => (
          <p key={index} className="text-sm sm:text-base leading-relaxed text-muted font-medium">
            {renderRichText(paragraph)}
          </p>
        ))}
      </div>
    </div>
  );
}
