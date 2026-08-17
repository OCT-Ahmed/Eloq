import { create } from "zustand";

type BlockAnswers = Record<string, unknown>;

interface LearningAnswersState {
  answers: Record<string, BlockAnswers>;

  setBlockAnswers: (
    blockId: string,
    answers: BlockAnswers
  ) => void;

  updateBlockAnswer: (
    blockId: string,
    answerKey: string,
    answer: unknown
  ) => void;

  getBlockAnswers: (blockId: string) => BlockAnswers;

  clearBlockAnswers: (blockId: string) => void;

  clearAllAnswers: () => void;
}

export const useLearningAnswersStore = create<LearningAnswersState>(
  (set, get) => ({
    answers: {},

    // Replace all answers for one block
    setBlockAnswers: (blockId, answers) => {
      set((state) => ({
        answers: {
          ...state.answers,
          [blockId]: answers,
        },
      }));
    },

    // Update one answer inside a block
    updateBlockAnswer: (blockId, answerKey, answer) => {
      set((state) => ({
        answers: {
          ...state.answers,
          [blockId]: {
            ...state.answers[blockId],
            [answerKey]: answer,
          },
        },
      }));
    },

    // Get answers belonging to one block
    getBlockAnswers: (blockId) => {
      return get().answers[blockId] ?? {};
    },

    // Remove one block's answers
    clearBlockAnswers: (blockId) => {
      set((state) => {
        const newAnswers = { ...state.answers };
        delete newAnswers[blockId];

        return {
          answers: newAnswers,
        };
      });
    },

    // Clear the whole lesson's current answers
    clearAllAnswers: () => {
      set({ answers: {} });
    },
  })
);