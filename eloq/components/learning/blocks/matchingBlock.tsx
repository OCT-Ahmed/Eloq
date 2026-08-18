"use client";

import { useEffect, useRef, useState } from "react";
import {
  MatchingBlock as MatchingBlockType,
} from "@/types/learning";
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
};

function shuffle<T>(items: T[]): T[] {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [array[i], array[randomIndex]] = [
      array[randomIndex],
      array[i],
    ];
  }

  return array;
}

export default function MatchingBlock({
  id,
  data,
}: MatchingBlockProps) {
  const [leftItems, setLeftItems] = useState<
    MatchingBlockType["data"]["items"]
  >([]);

  const [rightItems, setRightItems] = useState<
    MatchingBlockType["data"]["items"]
  >([]);

  const blockAnswers = useLearningAnswersStore(
    (state) => state.answers[id]
  ) as BlockAnswers | undefined;

  const updateBlockAnswer = useLearningAnswersStore(
    (state) => state.updateBlockAnswer
  );

  const connections =
    (blockAnswers?.connections as Connections) ?? {};

  const [selectedLeft, setSelectedLeft] =
    useState<string | null>(null);

  const [selectedRight, setSelectedRight] =
    useState<string | null>(null);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const leftRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

  const rightRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

  const [lines, setLines] = useState<
    ConnectionLine[]
  >([]);

  useEffect(() => {
    if (!data?.items) return;

    setLeftItems(shuffle(data.items));
    setRightItems(shuffle(data.items));
  }, [data]);

  useEffect(() => {
    const updateLines = () => {
      const container = containerRef.current;

      if (!container) return;

      const containerRect =
        container.getBoundingClientRect();

      const newLines: ConnectionLine[] = [];

      Object.entries(connections).forEach(
        ([leftId, rightId]) => {
          const leftElement =
            leftRefs.current[leftId];

          const rightElement =
            rightRefs.current[rightId];

          if (!leftElement || !rightElement) {
            return;
          }

          const leftRect =
            leftElement.getBoundingClientRect();

          const rightRect =
            rightElement.getBoundingClientRect();

          const startX =
            leftRect.right -
            containerRect.left;

          const startY =
            leftRect.top +
            leftRect.height / 2 -
            containerRect.top;

          const endX =
            rightRect.left -
            containerRect.left;

          const endY =
            rightRect.top +
            rightRect.height / 2 -
            containerRect.top;

          const distance = Math.max(
            35,
            (endX - startX) * 0.45
          );

          const path = `
            M ${startX} ${startY}
            C
            ${startX + distance} ${startY},
            ${endX - distance} ${endY},
            ${endX} ${endY}
          `;

          newLines.push({
            leftId,
            rightId,
            path,
          });
        }
      );

      setLines(newLines);
    };

    const frame =
      requestAnimationFrame(updateLines);

    window.addEventListener(
      "resize",
      updateLines
    );

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(
        "resize",
        updateLines
      );
    };
  }, [connections, leftItems, rightItems]);

  const createConnection = (
    leftId: string,
    rightId: string
  ) => {
    const newConnections = {
      ...connections,
    };

    delete newConnections[leftId];

    Object.entries(newConnections).forEach(
      ([existingLeftId, existingRightId]) => {
        if (existingRightId === rightId) {
          delete newConnections[
            existingLeftId
          ];
        }
      }
    );

    newConnections[leftId] = rightId;

    updateBlockAnswer(
      id,
      "connections",
      newConnections
    );

    setSelectedLeft(null);
    setSelectedRight(null);
  };

  const handleLeftClick = (
    leftId: string
  ) => {
    if (selectedLeft === leftId) {
      setSelectedLeft(null);
      return;
    }

    if (selectedRight) {
      createConnection(
        leftId,
        selectedRight
      );
      return;
    }

    setSelectedLeft(leftId);
  };

  const handleRightClick = (
    rightId: string
  ) => {
    if (selectedRight === rightId) {
      setSelectedRight(null);
      return;
    }

    if (selectedLeft) {
      createConnection(
        selectedLeft,
        rightId
      );
      return;
    }

    setSelectedRight(rightId);
  };

  const isLeftConnected = (
    leftId: string
  ) => leftId in connections;

  const isRightConnected = (
    rightId: string
  ) =>
    Object.values(connections).includes(rightId);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl border border-border-subtle bg-foreground p-3 pt-10 shadow-md sm:p-4 sm:pt-10"
      >
        <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible">
          {lines.map((line) => (
            <path
              key={`${line.leftId}-${line.rightId}`}
              d={line.path}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </svg>

        <div className="relative z-20 grid grid-cols-2 gap-3 sm:gap-6 md:gap-10">
          <div className="flex flex-col gap-3">
            {leftItems.map((item, index) => {
              const connected =
                isLeftConnected(item.id);

              const selected =
                selectedLeft === item.id;

              return (
                <button
                  key={item.id}
                  ref={(element) => {
                    leftRefs.current[item.id] =
                      element;
                  }}
                  type="button"
                  onClick={() =>
                    handleLeftClick(item.id)
                  }
                  className={`min-h-12 w-full rounded-xl border px-3 py-3 text-left text-sm font-medium shadow-sm transition-all duration-200 sm:px-4 sm:text-base ${
                    selected
                      ? "border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/20"
                      : connected
                        ? "border-amber-500/60 bg-amber-500/5"
                        : "border-border-subtle bg-background hover:border-amber-500/60"
                  }`}
                >
                  <span className="mr-2 font-bold text-eloq-purple">
                    {index + 1}.
                  </span>

                  {item.left}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-3">
            {rightItems.map((item, index) => {
              const connected =
                isRightConnected(item.id);

              const selected =
                selectedRight === item.id;

              return (
                <button
                  key={item.id}
                  ref={(element) => {
                    rightRefs.current[item.id] =
                      element;
                  }}
                  type="button"
                  onClick={() =>
                    handleRightClick(item.id)
                  }
                  className={`min-h-12 w-full rounded-xl border px-3 py-3 text-left text-sm font-medium shadow-sm transition-all duration-200 sm:px-4 sm:text-base ${
                    selected
                      ? "border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/20"
                      : connected
                        ? "border-amber-500/60 bg-amber-500/5"
                        : "border-border-subtle bg-background hover:border-amber-500/60"
                  }`}
                >
                  <span className="mr-2 font-bold text-primary">
                    {String.fromCharCode(65 + index)}
                  </span>

                  {item.right}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}