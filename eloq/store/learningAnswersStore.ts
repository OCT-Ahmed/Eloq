import { create } from "zustand";

type BlockAnswers = Record<string, unknown>;

interface LearningAnswersState {
  /**
   * Answers are permanently separated by lessonId.
   *
   * lessonId
   *   └── blockId
   *         └── answers
   */
  answersByLesson: Record<
    string,
    Record<string, BlockAnswers>
  >;

  activeLessonId: string | null;

  /**
   * Make a lesson the currently active lesson.
   *
   * IMPORTANT:
   * We do NOT delete its previous answers.
   * If the student comes back to the lesson,
   * their answers are still available.
   */
  initializeLesson: (lessonId: string) => void;

  setBlockAnswers: (
    blockId: string,
    answers: BlockAnswers
  ) => void;

  updateBlockAnswer: (
    blockId: string,
    answerKey: string,
    answer: unknown
  ) => void;

  getBlockAnswers: (
    blockId: string
  ) => BlockAnswers;

  clearBlockAnswers: (
    blockId: string
  ) => void;

  clearLessonAnswers: (
    lessonId: string
  ) => void;

  clearAllAnswers: () => void;
}

export const useLearningAnswersStore =
  create<LearningAnswersState>((set, get) => ({
    answersByLesson: {},

    activeLessonId: null,

    initializeLesson: (lessonId) => {
      set((state) => ({
        activeLessonId: lessonId,

        answersByLesson: {
          ...state.answersByLesson,

          // Create the lesson bucket if it does not exist.
          // If it already exists, preserve its answers.
          [lessonId]:
            state.answersByLesson[lessonId] ?? {},
        },
      }));
    },

    setBlockAnswers: (blockId, answers) => {
      const lessonId = get().activeLessonId;

      if (!lessonId) return;

      set((state) => ({
        answersByLesson: {
          ...state.answersByLesson,

          [lessonId]: {
            ...(state.answersByLesson[lessonId] ?? {}),

            [blockId]: answers,
          },
        },
      }));
    },

    updateBlockAnswer: (
      blockId,
      answerKey,
      answer
    ) => {
      const lessonId = get().activeLessonId;

      if (!lessonId) return;

      set((state) => ({
        answersByLesson: {
          ...state.answersByLesson,

          [lessonId]: {
            ...(state.answersByLesson[lessonId] ?? {}),

            [blockId]: {
              ...(state.answersByLesson[lessonId]?.[
                blockId
              ] ?? {}),

              [answerKey]: answer,
            },
          },
        },
      }));
    },

    getBlockAnswers: (blockId) => {
      const lessonId = get().activeLessonId;

      if (!lessonId) {
        return {};
      }

      return (
        get().answersByLesson[lessonId]?.[blockId] ??
        {}
      );
    },

    clearBlockAnswers: (blockId) => {
      const lessonId = get().activeLessonId;

      if (!lessonId) return;

      set((state) => {
        const lessonAnswers = {
          ...(state.answersByLesson[lessonId] ?? {}),
        };

        delete lessonAnswers[blockId];

        return {
          answersByLesson: {
            ...state.answersByLesson,

            [lessonId]: lessonAnswers,
          },
        };
      });
    },

    clearLessonAnswers: (lessonId) => {
      set((state) => {
        const newAnswers = {
          ...state.answersByLesson,
        };

        delete newAnswers[lessonId];

        return {
          answersByLesson: newAnswers,

          // If this was the currently active lesson,
          // remove the active reference too.
          activeLessonId:
            state.activeLessonId === lessonId
              ? null
              : state.activeLessonId,
        };
      });
    },

    clearAllAnswers: () => {
      set({
        answersByLesson: {},
        activeLessonId: null,
      });
    },
  }));