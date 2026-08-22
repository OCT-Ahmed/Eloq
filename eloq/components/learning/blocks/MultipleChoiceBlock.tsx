"use client";

import { MultipleChoiceBlock as MultipleChoiceBlockType } from "@/types/learning";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

interface MultipleChoiceBlockProps {
  id: string;
  data: MultipleChoiceBlockType["data"];
}

export default function MultipleChoiceBlock({ id, data }: MultipleChoiceBlockProps) {
  const updateBlockAnswer = useLearningAnswersStore(
    (state) => state.updateBlockAnswer
  );

  const answers = useLearningAnswersStore(
    (state) =>
      (state.answersByLesson[state.activeLessonId ?? ""]?.[id] as Record<string, string>) ?? {}
  );

  const handleSelect = (itemId: string, optionId: string) => {
    updateBlockAnswer(id, itemId, optionId);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {data?.items?.map((item, index) => {
        const selectedAnswer = answers[item.id];

        return (
          <div
            key={item.id}
            className="flex flex-col gap-4 w-full bg-card border border-border-subtle p-4 sm:p-5 rounded-2xl shadow-soft"
          >
            {/* Question */}
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-eloq-purple/10 text-xs font-bold text-eloq-purple">
                {index + 1}
              </span>

              <p className="font-semibold leading-relaxed text-foreground text-sm sm:text-base">
                {item.question.en ?? Object.values(item.question).find(Boolean)}
              </p>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-2.5">
              {item.options.map((option, optionIndex) => {
                const isSelected = selectedAnswer === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelect(item.id, option.id)}
                    className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition-all active:scale-[0.99] ${
                      isSelected
                        ? "border-eloq-purple bg-eloq-purple/10 text-eloq-purple"
                        : "border-border-subtle bg-card text-foreground hover:border-eloq-purple/50"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        isSelected
                          ? "bg-eloq-purple text-white"
                          : "border border-border-subtle bg-muted/10 text-muted"
                      }`}
                    >
                      {String.fromCharCode(65 + optionIndex)}
                    </span>

                    <span className="font-medium text-sm sm:text-base leading-normal">
                      {option.text.en ?? Object.values(option.text).find(Boolean)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
