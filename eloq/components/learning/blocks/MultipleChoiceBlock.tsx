"use client";

import {
  MultipleChoiceBlock as MultipleChoiceBlockType,
} from "@/types/learning";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

interface MultipleChoiceBlockProps {
  id: string;
  data: MultipleChoiceBlockType["data"];
}

export default function MultipleChoiceBlock({
  id,
  data,
}: MultipleChoiceBlockProps) {
  const updateBlockAnswer = useLearningAnswersStore(
    (state) => state.updateBlockAnswer
  );

  const answers = useLearningAnswersStore(
    (state) =>
      state.answersByLesson[
        state.activeLessonId ?? ""
      ]?.[id] ?? {}
  );

  // Handle the student's current selection
  const handleSelect = (
    itemId: string,
    optionId: string
  ) => {
    updateBlockAnswer(
      id,
      itemId,
      optionId
    );
  };

  return (
    <div className="flex flex-col gap-5 w-full bg-foreground border border-border-subtle p-4 sm:p-5 rounded-2xl shadow-sm">
      {data?.items?.map((item, index) => {
        const selectedAnswer =
          answers[item.id];

        return (
          <div
            key={item.id}
            className="flex flex-col gap-4 w-full bg-background border border-border-subtle p-4 rounded-xl"
          >
            {/* Question */}
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-eloq-purple/10 text-sm font-bold text-eloq-purple">
                {index + 1}
              </span>

              <p className="font-semibold leading-relaxed">
                {item.question.en ??
                  Object.values(item.question).find(
                    Boolean
                  )}
              </p>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-2">
              {item.options.map(
                (option, optionIndex) => {
                  const isSelected =
                    selectedAnswer === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        handleSelect(
                          item.id,
                          option.id
                        )
                      }
                      className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all active:scale-[0.99] ${
                        isSelected
                          ? "border-eloq-purple bg-eloq-purple/10"
                          : "border-border-subtle bg-foreground hover:border-eloq-purple/60"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                          isSelected
                            ? "border-eloq-purple bg-eloq-purple text-white"
                            : "border-border-subtle text-muted"
                        }`}
                      >
                        {String.fromCharCode(
                          65 + optionIndex
                        )}
                      </span>

                      <span className="font-medium leading-normal">
                        {option.text.en ??
                          Object.values(
                            option.text
                          ).find(Boolean)}
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/*
Future validation logic:

The block should NOT determine whether the student's answer
is correct or wrong.

When the lesson is submitted, the RPC will compare:

student answer:
answers[blockId][itemId]

against:

correct answer:
data.items[itemId].correctAnswer

The RPC will then calculate correctness, points, XP,
attempt results, and lesson progress.
*/