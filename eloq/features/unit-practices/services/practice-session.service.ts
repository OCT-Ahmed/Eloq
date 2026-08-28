import type {
  Practice,
  PracticeItem,
  PracticeItemAudio,
} from "../types/practice";


// =========================================================
// Types
// =========================================================

export interface PracticeSessionData {
  practice: Practice;
  items: PracticeItem[];
  audio: PracticeItemAudio[];
}

export interface PracticeAnswer {
  itemId: string;
  answer: string;
}

export interface PracticeSessionState {
  practiceId: string;

  currentIndex: number;

  answers: Record<string, string>;

  checkedItems: Record<string, boolean>;

  completedItems: string[];

  startedAt: string;

  isFinished: boolean;
}


// =========================================================
// Session Creation
// =========================================================

export function createPracticeSession(
  data: PracticeSessionData
): PracticeSessionState {
  return {
    practiceId: data.practice.id,

    currentIndex: 0,

    answers: {},

    checkedItems: {},

    completedItems: [],

    startedAt: new Date().toISOString(),

    isFinished: false,
  };
}


// =========================================================
// Current Item
// =========================================================

export function getCurrentPracticeItem(
  state: PracticeSessionState,
  items: PracticeItem[]
): PracticeItem | null {
  return items[state.currentIndex] ?? null;
}


// =========================================================
// Answer
// =========================================================

export function setPracticeAnswer(
  state: PracticeSessionState,
  itemId: string,
  answer: string
): PracticeSessionState {
  return {
    ...state,

    answers: {
      ...state.answers,
      [itemId]: answer,
    },
  };
}


// =========================================================
// Get Answer
// =========================================================

export function getPracticeAnswer(
  state: PracticeSessionState,
  itemId: string
): string {
  return state.answers[itemId] ?? "";
}


// =========================================================
// Mark Item As Checked
// =========================================================

export function markItemChecked(
  state: PracticeSessionState,
  itemId: string
): PracticeSessionState {
  return {
    ...state,

    checkedItems: {
      ...state.checkedItems,
      [itemId]: true,
    },

    completedItems: state.completedItems.includes(itemId)
      ? state.completedItems
      : [...state.completedItems, itemId],
  };
}


// =========================================================
// Next
// =========================================================

export function moveToNextItem(
  state: PracticeSessionState,
  items: PracticeItem[]
): PracticeSessionState {
  const nextIndex = state.currentIndex + 1;

  if (nextIndex >= items.length) {
    return {
      ...state,
      isFinished: true,
    };
  }

  return {
    ...state,
    currentIndex: nextIndex,
  };
}


// =========================================================
// Progress
// =========================================================

export function getPracticeProgress(
  state: PracticeSessionState,
  items: PracticeItem[]
) {
  const total = items.length;

  const completed = state.completedItems.length;

  return {
    current: Math.min(state.currentIndex + 1, total),
    total,
    completed,
    percentage:
      total === 0
        ? 0
        : Math.round((completed / total) * 100),
  };
}


// =========================================================
// Completion
// =========================================================

export function canCompletePractice(
  state: PracticeSessionState,
  items: PracticeItem[]
): boolean {
  return (
    items.length > 0 &&
    state.completedItems.length === items.length
  );
}


// =========================================================
// Build Completion Payload
// =========================================================

export function buildPracticeCompletionPayload(
  state: PracticeSessionState,
  items: PracticeItem[]
) {
  return {
    practiceId: state.practiceId,

    startedAt: state.startedAt,

    answers: items.map((item) => ({
      item_id: item.id,
      answer: state.answers[item.id] ?? "",
    })),
  };
}