/* =====================
    Interfaces
        UnitType
        Section 
===================== */
export interface UnitType {
    id: number;
    slug: string;
    title: string;
    CEFR: string;
    goals: string[];
    sectionorder?: string[];
    sections: Section[]
}

export interface Section {
    id: string;
    type: SectionType;
    title: string;
    slug: string;
    lesson?: string;
    blocks: Block[]
}

/* =====================
    Types
        SectionType
        BlockType
        Block
        BaseBlock
===================== */
export type SectionType = 
  | "starter"
  | "grammar"
  | "vocabulary"
  | "listening"
  | "speaking"
  | "reading"
  | "writing"
  | "quiz"
  | "everyday_english";

// A-Z Order
export type BlockType = 
//  | "audio"
    | "dialogue"
    | "fill_blanks"
    | "free_practice"
    | "grammar_point"
//  | "grammer_reference"
    | "image_card"
    | "image_cards"
//  | "instruction"
//  | "practice"
    | "matching"
//  | "question"
//  | "quiz"
//  | "reading"
    | "reorder_words"
    | "self_check"
//  | "vocabulary_grid"
    | "word_list";

export type Block = 
    | DialougeBlock
    | GrammarPointBlock
    | FillBlanksBlock 
    | FreePracticeBlock
    | ImageCardBlock
    | ImageCardsBlock
    | MatchingBlock
    | ReorderWordsBlock
    | WordListBlock;

export interface ExtensionType {
  title?: string;
  instruction?: {
    id?: string | number;
    text: string;
    translation?: string;
  };
  audio?: {
    url: string;
    ref?: string;
  };
  tip?: {
    icon?: string;
    text: string;
  };
  explanation?: string;
}

type BaseBlock<T extends BlockType, D> = {
  id: string;
  type: T;
  data: D;
  interactions?: Record<string, unknown>;
  extensions?: ExtensionType;
  span?: string;  // e.g., "col-span-12", "grid"
  style?: string; // e.g., custom theme or background
};

type BaseBlock<T extends BlockType, D> = {
    id: string;
    type: T;
    data: D;
    interactions?: Record<string, unknown;
    extensions?: ExtensionType;
    span?: string; // controle display [grid or flex? column or row?]
    style?: string; // custom theme or background: social media blob -- etc.. 
};

/* =====================
    Specific Block Definitions
===================== */

export type DialogueBlock = BaseBlock<
  "dialogue",
  {
    image?: {
      url: string;
      desc?: string;
    };
    lines: {
      id: string;
      speakerId?: string;
      speaker: string;
      text: string;
      audioUrl?: string;
    }[];
  }
>;

export type GrammarPointBlock = BaseBlock<
  "grammar_point",
  {
    title: string;
    rules: string[];
    examples?: string[];
  }
>;

export type FillBlanksBlock = BaseBlock<
  "fill_blanks",
  {
    items: {
      id: string;
      text: string; // "My name [blank] Alex."
      answer: string; // "is"
      options?: string[]; // للخيارات المتعددة إذا وجدت
    }[];
  }
>;

export type ReorderWordsBlock = BaseBlock<
  "reorder_words",
  {
    items: {
      id: string;
      words: string[]; // ["is", "My", "Alex", "name"]
      correctOrder: string[]; // ["My", "name", "is", "Alex"]
    }[];
  }
>;

export type MatchingBlock = BaseBlock<
  "matching",
  {
    questions: { id: string; text: string }[];
    answers: { id: string; text: string }[];
    correctPairs: { questionId: string; answerId: string }[]; // أساسي جدا للتحقق!
  }
>;

export type FreePracticeBlock = BaseBlock<
  "free_practice",
  {
    prompt?: string;
    placeholder?: string;
    maxLength?: number;
    allowAudioRecord?: boolean;
  }
>;

export type ImageBlock = BaseBlock<
  "image",
  {
    url: string;
    caption?: string;
    alt?: string;
  }
>;

export interface ImageCardItem {
  id: string;
  url: string;
  text: string;
  caption?: string;
  pronunciation?: string;
  audioUrl?: string;
}

export type ImageCardsBlock = BaseBlock<
  "image_cards",
  {
    cards: ImageCardItem[];
    layout?: "grid" | "list" | "carousel";
  }
>;

export type WordListBlock = BaseBlock<
  "word_list",
  {
    items: {
      id: string;
      primaryText: string;
      secondaryText?: string;
      audioUrl?: string;
    }[];
  }
>;