"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { MatchingBlock as MatchingBlockType } from "@/types/learning";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

interface MatchingBlockProps {
  id: string;
  data: MatchingBlockType["data"];
}

type Connections = Record<string, string>;
type BlockAnswers = Record<string, unknown>;

type ConnectionLine = {
  leftId: string;
  rightId: string;
  path: string;
  color: string;
};

// لوحة ألوان متناسقة لكل زوج موصل
const PAIR_PALETTES = [
  { stroke: "#8b5cf6", border: "border-eloq-purple", bg: "bg-eloq-purple/10", text: "text-eloq-purple" },
  { stroke: "#f59e0b", border: "border-amber-500", bg: "bg-amber-500/10", text: "text-amber-500" },
  { stroke: "#10b981", border: "border-emerald-500", bg: "bg-emerald-500/10", text: "text-emerald-500" },
  { stroke: "#06b6d4", border: "border-cyan-500", bg: "bg-cyan-500/10", text: "text-cyan-500" },
  { stroke: "#ec4899", border: "border-pink-500", bg: "bg-pink-500/10", text: "text-pink-500" },
];

function shuffle<T>(items: T[]): T[] {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

export default function MatchingBlock({ id, data }: MatchingBlockProps) {
  const [leftItems, setLeftItems] = useState<MatchingBlockType["data"]["items"]>([]);
  const [rightItems, setRightItems] = useState<MatchingBlockType["data"]["items"]>([]);

  const blockAnswers = useLearningAnswersStore(
    (state) => state.answersByLesson[state.activeLessonId ?? ""]?.[id]
  ) as BlockAnswers | undefined;

  const updateBlockAnswer = useLearningAnswersStore(
    (state) => state.updateBlockAnswer
  );

  const connections = (blockAnswers?.connections as Connections) ?? {};

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const rightRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [lines, setLines] = useState<ConnectionLine[]>([]);

  useEffect(() => {
    if (!data?.items) return;
    setLeftItems(shuffle(data.items));
    setRightItems(shuffle(data.items));
  }, [data]);

  useEffect(() => {
    const updateLines = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const newLines: ConnectionLine[] = [];

      Object.entries(connections).forEach(([leftId, rightId]) => {
        const leftElement = leftRefs.current[leftId];
        const rightElement = rightRefs.current[rightId];

        if (!leftElement || !rightElement) return;

        const leftIndex = leftItems.findIndex((item) => item.id === leftId);
        const palette = PAIR_PALETTES[leftIndex % PAIR_PALETTES.length];

        const leftRect = leftElement.getBoundingClientRect();
        const rightRect = rightElement.getBoundingClientRect();

        const startX = leftRect.right - containerRect.left;
        const startY = leftRect.top + leftRect.height / 2 - containerRect.top;
        const endX = rightRect.left - containerRect.left;
        const endY = rightRect.top + rightRect.height / 2 - containerRect.top;

        const distance = Math.max(25, (endX - startX) * 0.4);

        const path = `
          M ${startX} ${startY}
          C ${startX + distance} ${startY},
            ${endX - distance} ${endY},
            ${endX} ${endY}
        `;

        newLines.push({
          leftId,
          rightId,
          path,
          color: palette.stroke,
        });
      });

      setLines(newLines);
    };

    const frame = requestAnimationFrame(updateLines);
    window.addEventListener("resize", updateLines);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateLines);
    };
  }, [connections, leftItems, rightItems]);

  const createConnection = (leftId: string, rightId: string) => {
    const newConnections = { ...connections };
    delete newConnections[leftId];

    Object.entries(newConnections).forEach(([existingLeftId, existingRightId]) => {
      if (existingRightId === rightId) {
        delete newConnections[existingLeftId];
      }
    });

    newConnections[leftId] = rightId;
    updateBlockAnswer(id, "connections", newConnections);

    setSelectedLeft(null);
    setSelectedRight(null);
  };

  const handleLeftClick = (leftId: string) => {
    if (selectedLeft === leftId) {
      setSelectedLeft(null);
      return;
    }

    if (selectedRight) {
      createConnection(leftId, selectedRight);
      return;
    }

    setSelectedLeft(leftId);
  };

  const handleRightClick = (rightId: string) => {
    if (selectedRight === rightId) {
      setSelectedRight(null);
      return;
    }

    if (selectedLeft) {
      createConnection(selectedLeft, rightId);
      return;
    }

    setSelectedRight(rightId);
  };

  const resetAll = () => {
    updateBlockAnswer(id, "connections", {});
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  return (
    <div className="w-full space-y-3">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl border border-border-subtle bg-card p-4 sm:p-6 shadow-soft"
      >
        {/* Connection Lines (Desktop & Tablets) */}
        <svg className="pointer-events-none absolute inset-0 z-10 hidden sm:block h-full w-full overflow-visible">
          {lines.map((line) => (
            <path
              key={`${line.leftId}-${line.rightId}`}
              d={line.path}
              fill="none"
              stroke={line.color}
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </svg>

        <div className="relative z-20 grid grid-cols-2 gap-3 sm:gap-8 md:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {leftItems.map((item, index) => {
              const rightConnectedId = connections[item.id];
              const isConnected = !!rightConnectedId;
              const isSelected = selectedLeft === item.id;
              const palette = PAIR_PALETTES[index % PAIR_PALETTES.length];

              return (
                <button
                  key={item.id}
                  ref={(el) => { leftRefs.current[item.id] = el; }}
                  type="button"
                  onClick={() => handleLeftClick(item.id)}
                  className={`min-h-12 w-full rounded-xl border-2 px-3 py-2.5 text-left text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                    isSelected
                      ? "border-eloq-purple bg-eloq-purple/15 text-eloq-purple ring-2 ring-eloq-purple/20"
                      : isConnected
                        ? `${palette.border} ${palette.bg} ${palette.text}`
                        : "border-border-subtle bg-card text-foreground hover:border-eloq-purple/50"
                  }`}
                >
                  <span className="mr-1.5 opacity-60">{index + 1}.</span>
                  {item.left}
                </button>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            {rightItems.map((item, index) => {
              const connectedLeftId = Object.entries(connections).find(
                ([, rId]) => rId === item.id
              )?.[0];
              const isConnected = !!connectedLeftId;
              const isSelected = selectedRight === item.id;

              const connectedLeftIndex = connectedLeftId
                ? leftItems.findIndex((l) => l.id === connectedLeftId)
                : -1;

              const palette =
                connectedLeftIndex !== -1
                  ? PAIR_PALETTES[connectedLeftIndex % PAIR_PALETTES.length]
                  : null;

              return (
                <button
                  key={item.id}
                  ref={(el) => { rightRefs.current[item.id] = el; }}
                  type="button"
                  onClick={() => handleRightClick(item.id)}
                  className={`min-h-12 w-full rounded-xl border-2 px-3 py-2.5 text-left text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                    isSelected
                      ? "border-eloq-purple bg-eloq-purple/15 text-eloq-purple ring-2 ring-eloq-purple/20"
                      : isConnected && palette
                        ? `${palette.border} ${palette.bg} ${palette.text}`
                        : "border-border-subtle bg-card text-foreground hover:border-eloq-purple/50"
                  }`}
                >
                  <span className="mr-1.5 opacity-60">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {item.right}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {Object.keys(connections).length > 0 && (
        <button
          type="button"
          onClick={resetAll}
          className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-card px-3 py-1.5 text-xs font-semibold text-muted transition active:scale-95 hover:text-eloq-purple"
        >
          <RotateCcw size={13} />
          <span>Undo all</span>
        </button>
      )}
    </div>
  );
}
