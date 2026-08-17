"use client";

import { useState } from "react";
import { FileText, Lightbulb, Volume2, X } from "lucide-react";
import type { ExtensionType, LocalizedText } from "@/types/learning";

interface BlockToolsProps {
  explanation?: LocalizedText;
  tip?: ExtensionType["tip"];
  audio?: ExtensionType["audio"];
}

export default function BlockTools({
  explanation,
  tip,
  audio,
}: BlockToolsProps) {
  const [openTool, setOpenTool] = useState<string | null>(null);

  const hasExplanation =
    !!explanation &&
    Object.values(explanation).some(Boolean);

  const hasTip =
    !!tip?.text &&
    Object.values(tip.text).some(Boolean);

  const toggleTool = (tool: string) => {
    setOpenTool((current) => (current === tool ? null : tool));
  };

  const explanationLanguage =
    explanation?.en
      ? "en"
      : Object.keys(explanation ?? {}).find(
          (language) => !!explanation?.[language]
        );

  const explanationText = explanationLanguage
    ? explanation?.[explanationLanguage]
    : undefined;

  const tipText =
    tip?.text?.en ??
    Object.values(tip?.text ?? {}).find(Boolean);

  return (
    <div className="relative ml-auto flex shrink-0 items-center gap-1">
      {/* Explanation */}
      {hasExplanation && (
        <div className="relative">
          <button
            type="button"
            aria-label="Show explanation"
            onClick={() => toggleTool("explanation")}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-eloq-purple"
          >
            {openTool === "explanation" ? (
              <X size={18} />
            ) : (
              <FileText size={18} />
            )}
          </button>

          {openTool === "explanation" && explanationText && (
            <div className="absolute right-0 top-11 z-50 w-[min(340px,calc(100vw-2rem))] rounded-2xl border border-border-subtle bg-background p-4 shadow-xl">
              <h3 className="mb-2 font-bold text-eloq-purple">
                Explanation
              </h3>

              <p className="text-sm leading-6 text-foreground">
                {explanationText}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tip */}
      {hasTip && (
        <div className="relative">
          <button
            type="button"
            aria-label="Show tip"
            onClick={() => toggleTool("tip")}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-amber-500"
          >
            {openTool === "tip" ? (
              <X size={18} />
            ) : (
              <Lightbulb size={18} />
            )}
          </button>

          {openTool === "tip" && tipText && (
            <div className="absolute right-0 top-11 z-50 w-[min(320px,calc(100vw-2rem))] rounded-2xl border border-border-subtle bg-background p-4 shadow-xl">
              <div className="mb-2 flex items-center gap-2 font-bold text-amber-500">
                <Lightbulb size={18} />
                <span>Tip</span>
              </div>

              <p className="text-sm leading-6 text-foreground">
                {tipText}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Audio */}
      <button
        type="button"
        aria-label={audio?.url ? "Play audio" : "Audio coming soon"}
        onClick={() => {
          if (!audio?.url) {
            alert("Audio support will be available soon.");
          }
        }}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-background hover:text-eloq-purple"
      >
        <Volume2 size={18} />
      </button>
    </div>
  );
}