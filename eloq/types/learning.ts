// •• Unit

export interface UnitOverview {
  summary?: LocalizedText;
  learningObjectives?: LocalizedText[];
  keyVocabulary?: string[];
  grammarFocus?: string[];

  skills?: (
    | "reading"
    | "writing"
    | "listening"
    | "speaking"
    | "grammar"
    | "vocabulary"
    | "pronunciation"
  )[];

  prerequisites?: string[];
}


export interface Unit {
  id: string;
  title: LocalizedText;
  slug: string;
  overview?: UnitOverview;
  lessons: Lesson[];
}


// •• Lesson

export interface LessonRules {
  maxErrors?: number;

  passingScorePercentage?: number;

  completionRule?: {
    type:
      | "all_required_blocks"
      | "minimum_score"
      | "custom";
  };

  scoringRule?: {
    type:
      | "sum"
      | "percentage"
      | "weighted";
  };
}


export interface LessonRewards {
  completionXp?: number;
  maxXp?: number;
  bonusRules?: {
    type:
      | "perfect"
      | "no_errors"
      | "fast_completion"
      | "custom";
    
    xp: number;
  }[];
}


export interface Lesson {
  id: string;
  title: LocalizedText;
  slug: string;
  description?: LocalizedText;
  rules?: LessonRules;
  rewards?: LessonRewards;
  blocks: Block[];
}


/* ======
Block
====== */

// •• Block Types

export type BlockType =
  | "dialogue"
  | "fill_blanks"
  | "free_practice"
  | "grammar_point"
  | "image_card"
  | "image_cards"
  | "matching"
  | "reading"
  | "reorder_words"
  | "self_check"
  | "word_list";


// •• Base Block

export type BaseBlock<T extends BlockType, D> = {
  id: string;
  type: T;
  purpose?: string;
  // -- TODO: Rename `data` to `content` in a future schema revision.
  data: D;
  interactions?: Record<string, unknown>;
  extensions?: ExtensionType;
  media?: ImageContent[];
  span?: string;
  style?: StyleConfig;
  isActive?: boolean;
};


// •• Block

export type Block =
  | DialogueBlock
  | FillBlanksBlock
  | FreePracticeBlock
  | GrammarPointBlock
  | ImageCardBlock
  | ImageCardsBlock
  | MatchingBlock
  | ReadingBlock
  | ReorderWordsBlock
  | SelfCheckBlock
  | WordListBlock;


/* ======
Shared Block Features
====== */

// •• Localization

export interface LocalizedText {
  ar?: string;
  en?: string;

  [language: string]: string | undefined;
}


// •• Styling

export interface StyleConfig {
  description?: string;
  className?: string;
  tailwindClass?: string;
  svg?: unknown;
}


// •• Interactive Text

export interface Blank {
  answers: string[];
  points?: number;
}


// •• Word Bank

export interface WordBankItem {
  word: string;
  maxUses?: number;
}

export interface WordBank {
  items: WordBankItem[];

  allowReuse?: boolean;
}


// •• Media

export interface ImageContent {
  id?: string;

  url: string;

  alt?: string;

  description?: string;

  purpose?: string;

  position?: {
    type:
      | "inline"
      | "side"
      | "top"
      | "bottom"
      | "background"
      | "floating";

    targetId?: string;

    align?:
      | "start"
      | "center"
      | "end";

    order?: number;
  };

  style?: StyleConfig;
}


// •• Extensions

export interface ExtensionType {
  title?: {
    text: LocalizedText;
    style?: StyleConfig;
  };

  instruction?: {
    id?: string;
    text: LocalizedText;
    style?: StyleConfig;
  };
  
  translation?: LocalizedText;
  audio?: {
    url: string;
    ref?: string;
  };

  tip?: {
    icon?: string;
    text: LocalizedText;
  };

  explanation?: LocalizedText;
};


/* ======
Block Types
====== */

// •• Dialogue

export type DialogueBlock = BaseBlock<
  "dialogue",
  {
    image?: ImageContent;

    lines: {
      id: string;

      speakerId?: string;

      speaker: string;

      text: string;

      audioUrl?: string;
    }[];
  }
>;


// •• Fill Blanks

export type FillBlanksBlock = BaseBlock<
  "fill_blanks",
  {
    items: {
      id: string;

      text: string;

      answer: string | string[];

      points?: number;
    }[];
  }
>;


// •• Free Practice

export type FreePracticeBlock = BaseBlock<
  "free_practice",
  {
    text?: string;
  }
>;


// •• Grammar Point

export type GrammarPointBlock = BaseBlock<
  "grammar_point",
  {
    text?: string;
  }
>;


// •• Image Card

export type ImageCardBlock = BaseBlock<
  "image_card",
  {
    image?: ImageContent;

    text?: string;
  }
>;


// •• Image Cards

export type ImageCardsBlock = BaseBlock<
  "image_cards",
  {
    items: {
      id: string;

      image: ImageContent;

      text?: string;
    }[];
  }
>;


// •• Matching

export type MatchingBlock = BaseBlock<
  "matching",
  {
    items: {
      id: string;

      left: string;

      right: string;

      points?: number;
    }[];
  }
>;


// •• Reading

export type ReadingBlock = BaseBlock<
  "reading",
  {
    paragraphs: {
      id: string;

      text: string;
    }[];
  }
>;


// •• Reorder Words

export type ReorderWordsBlock = BaseBlock<
  "reorder_words",
  {
    items: {
      id: string;

      words: string[];

      correctOrder: string[];

      points?: number;
    }[];
  }
>;


// •• Self Check

export type SelfCheckBlock = BaseBlock<
  "self_check",
  {
    text?: string;
  }
>;


// •• Word List

export type WordListBlock = BaseBlock<
  "word_list",
  {
    words: {
      id: string;

      word: string;

      definition?: string;

      example?: string;
    }[];
  }
>;

// •• Short Answers

export type ShortAnswersBlock = BaseBlock<
  "short_answers",
  {
    items: {
      id: string;

      question: string;

      placeholder?: string;

      explanation?: LocalizedText;

      exampleAnswers?: string[];
    }[];
  }
>;


// •• Multiple Choice

export type MultipleChoiceBlock = BaseBlock<
  "multiple_choice",
  {
    items: {
      id: string;

      question: string;

      options: string[];

      correctAnswerIndex: number;

      points?: number;

      explanation?: LocalizedText;

      optionExplanations?: Record<number, LocalizedText>;
    }[];
  }
>;


// •• Writing

export type WritingBlock = BaseBlock<
  "writing",
  {
    prompt: string;

    placeholder?: string;

    minWords?: number;

    maxWords?: number;

    exampleAnswer?: string;

    explanation?: LocalizedText;
  }
>;


// •• Free Practice

export type FreePracticeBlock = BaseBlock<
  "free_practice",
  {
    prompt: string;

    hints?: string[];

    targetVocabulary?: string[];

    targetGrammar?: string[];

    timeLimitSeconds?: number;

    explanation?: LocalizedText;
  }
>;


// •• Grammar Point

export type GrammarPointBlock = BaseBlock<
  "grammar_point",
  {
    title?: string;

    explanation: string;

    examples?: {
      text: string;

      translation?: string;
    }[];

    notes?: string[];
  }
>;


// •• Table

export type TableBlock = BaseBlock<
  "table",
  {
    columns: {
      id: string;

      title: string;
    }[];

    rows: {
      id: string;

      cells: string[];
    }[];

    points?: number;
  }
>;