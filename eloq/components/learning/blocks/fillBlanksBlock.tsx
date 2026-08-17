"use client";

import { FillBlanksBlock as FillBlanksBlockType } from "@/types/learning";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

interface FillBlanksBlockProps {
  id: string;
  data: FillBlanksBlockType["data"];
}

export default function FillBlanksBlock({
  id,
  data,
}: FillBlanksBlockProps) {
  const blockAnswers = useLearningAnswersStore(
    (state) => state.answers[id] ?? {}
  );

  const setBlockAnswer = useLearningAnswersStore(
    (state) => state.setBlockAnswer
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      {data?.items?.map((item) => {
        const answers = blockAnswers[item.id] ?? [];

        return (
          <div key={item.id} className="flex gap-1 text-base leading-relaxed">
            <p>
              {item.text.split(/\[blank_\d+\]|\[blank\]|___/g).map(
                (part, index, parts) => (
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

                          setBlockAnswer(id, item.id, newAnswers);
                        }}
                        className="mx-1 mt-[-44px] w-20 border-b-2 border-muted bg-transparent px-1 font-medium outline-none"
                      />
                    )}
                  </span>
                )
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}