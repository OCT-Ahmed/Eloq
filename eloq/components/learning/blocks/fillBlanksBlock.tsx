"use client";

import { FillBlanksBlock as FillBlanksBlockType } from "@/types/learning";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

interface FillBlanksBlockProps {
  id: string;
  data: FillBlanksBlockType["data"];
}

type BlockAnswers = Record<string, unknown>;

export default function FillBlanksBlock({ id, data }: FillBlanksBlockProps) {
  const blockAnswers = useLearningAnswersStore(
    (state) =>
      state.answersByLesson[state.activeLessonId ?? ""]?.[id]
  ) as BlockAnswers | undefined;

  const updateBlockAnswer = useLearningAnswersStore(
    (state) => state.updateBlockAnswer
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      {data?.items?.map((item) => {
        const answers = (blockAnswers?.[item.id] as string[]) ?? [];

        return (
          <div
            key={item.id}
            className="text-base sm:text-lg leading-loose text-foreground"
          >
            <p>
              {item.text
                .split(/\[blank_\d+\]|\[blank\]|___/g)
                .map((part, index, parts) => (
                  <span key={index}>
                    {part}

                    {index < parts.length - 1 && (
                      <input
                        type="text"
                        name={`blank-${id}-${item.id}-${index}`}
                        value={answers[index] ?? ""}
                        onChange={(event) => {
                          const newAnswers = [...answers];
                          newAnswers[index] = event.target.value;
                          updateBlockAnswer(id, item.id, newAnswers);
                        }}
                        className="mx-1.5 w-24 sm:w-28 rounded-lg border-b-2 border-border-subtle bg-card px-2 py-0.5 text-center font-semibold text-eloq-purple outline-none transition-all focus:border-eloq-purple focus:bg-eloq-purple/5"
                      />
                    )}
                  </span>
                ))}
            </p>
          </div>
        );
      })}
    </div>
  );
}
