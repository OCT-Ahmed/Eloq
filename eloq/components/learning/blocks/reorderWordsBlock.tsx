"use client";

import { RotateCcw } from "lucide-react";
import {
  ReorderWordsBlock as ReorderWordsBlockType,
} from "@/types/learning";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

interface ReorderWordsBlockProps {
  id: string;
  data: ReorderWordsBlockType["data"];
}

type BlockAnswers = Record<string, unknown>;

export default function ReorderWordsBlock({
  id,
  data,
}: ReorderWordsBlockProps) {
  const blockAnswers = useLearningAnswersStore(
    (state) =>
      state.answersByLesson[
        state.activeLessonId ?? ""
      ]?.[id]
  ) as BlockAnswers | undefined;

  const updateBlockAnswer = useLearningAnswersStore(
    (state) => state.updateBlockAnswer
  );

  const handleSelectWord = (
    itemId: string,
    word: string
  ) => {
    const currentSelected =
      (blockAnswers?.[itemId] as string[]) ?? [];

    updateBlockAnswer(id, itemId, [
      ...currentSelected,
      word,
    ]);
  };

  const handleRemoveWord = (
    itemId: string,
    wordIndex: number
  ) => {
    const currentSelected =
      (blockAnswers?.[itemId] as string[]) ?? [];

    const updatedSelected =
      currentSelected.filter(
        (_, index) =>
          index !== wordIndex
      );

    updateBlockAnswer(
      id,
      itemId,
      updatedSelected
    );
  };

  const handleReset = (
    itemId: string
  ) => {
    updateBlockAnswer(
      id,
      itemId,
      []
    );
  };

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-border-subtle bg-foreground p-5 shadow-sm">
      <div className="flex w-full flex-col gap-6">
        {data?.items?.map(
          (item, index) => {
            const selected =
              (blockAnswers?.[
                item.id
              ] as string[]) ?? [];

            const availableWords = [
              ...(item.words ?? []),
            ];

            selected.forEach(
              (selectedWord) => {
                const wordIndex =
                  availableWords.indexOf(
                    selectedWord
                  );

                if (wordIndex !== -1) {
                  availableWords.splice(
                    wordIndex,
                    1
                  );
                }
              }
            );

            return (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-xl border border-border-subtle bg-background p-4"
              >
                <div className="flex items-center justify-between text-xs font-medium text-muted">
                  <span>
                    Sentence {index + 1}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      handleReset(item.id)
                    }
                    className="flex items-center gap-1 transition-colors hover:text-eloq-purple"
                  >
                    <RotateCcw
                      size={14}
                    />

                    <span>
                      Restart
                    </span>
                  </button>
                </div>

                <div className="flex min-h-[52px] flex-wrap items-center gap-2 rounded-lg border-2 border-dashed border-border-subtle bg-foreground/50 p-2.5">
                  {selected.length ===
                  0 ? (
                    <span className="px-2 text-xs text-muted/60">
                      Tap on the words to
                      reorder the sentence
                    </span>
                  ) : (
                    selected.map(
                      (
                        word,
                        wordIndex
                      ) => (
                        <button
                          key={`${word}-${wordIndex}`}
                          type="button"
                          onClick={() =>
                            handleRemoveWord(
                              item.id,
                              wordIndex
                            )
                          }
                          className="rounded-md bg-eloq-purple px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-eloq-purple/80 active:scale-95"
                        >
                          {word}
                        </button>
                      )
                    )
                  )}
                </div>

                <div className="flex min-h-[40px] flex-wrap items-center gap-2 pt-1">
                  {availableWords.map(
                    (
                      word,
                      wordIndex
                    ) => (
                      <button
                        key={`${word}-${wordIndex}`}
                        type="button"
                        onClick={() =>
                          handleSelectWord(
                            item.id,
                            word
                          )
                        }
                        className="rounded-md border border-border-subtle bg-foreground px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-eloq-purple active:scale-95"
                      >
                        {word}
                      </button>
                    )
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}