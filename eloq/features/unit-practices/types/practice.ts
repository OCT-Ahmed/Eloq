/* =========================================================
 * Unit Practice
 * ========================================================= */

export type PracticeType =
  | "listen_write"
  | "listen_speak"
  | "fix_mistakes";


export interface Practice {
  id: string;
  unitId: string;

  type: PracticeType;

  title: string;
  description?: string | null;

  orderIdx: number;

  completionXp: number;

  isActive: boolean;
}


/* =========================================================
 * Practice Item
 * ========================================================= */

export type PracticeItemInteraction =
  | "text"
  | "fill_blanks"
  | "multiple_choice";


export interface PracticeItem {
  id: string;

  practiceId: string;

  interaction: PracticeItemInteraction;

  content: PracticeItemContent;

  orderIdx: number;
}


/* =========================================================
 * Item Content
 * ========================================================= */

export type PracticeItemContent =
  | TextPracticeContent
  | FillBlanksPracticeContent
  | MultipleChoicePracticeContent;


export interface TextPracticeContent {
  interaction: "text";
}


export interface FillBlanksPracticeContent {
  interaction: "fill_blanks";

  text: string;
}


export interface MultipleChoicePracticeContent {
  interaction: "multiple_choice";

  question: string;

  options: string[];
}


/* =========================================================
 * Practice Item Audio
 * ========================================================= */

export interface PracticeItemAudio {
  id: string;

  practiceItemId: string;

  locale: string;

  voiceId: string;

  audioUrl: string;

  duration: number | null;
}


/* =========================================================
 * Practice Answer
 * ========================================================= */

export interface PracticeAnswer {
  itemId: string;

  answer: string;
}


/* =========================================================
 * Practice Session
 * ========================================================= */

export interface PracticeSession {
  practice: Practice;

  items: PracticeItem[];

  audio: PracticeItemAudio[];

  currentItemIndex: number;

  answers: PracticeAnswer[];

  startedAt: string;
}


/* =========================================================
 * Practice Completion
 * ========================================================= */

export interface CompletePracticeResult {
  attemptId: string;

  practiceId: string;

  itemsTotal: number;

  itemsCompleted: number;

  correctCount: number;

  xpEarned: number;

  attemptNumber: number;

  completedAt: string;
}