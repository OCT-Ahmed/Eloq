/* =====================
    Interfaces
        UnitType
        Section
        Block
===================== */
export interface UnitType {
    id: number;
    slug: string;
    title: string;
    sectionorder?: string[];
    sections: Section[]
}

export interface Section {
    id: string;
    type: SectionType;
    title: string;
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
export type SectionType = (
  | "starter"
  | "grammar"
  | "vocabulary"
  | "listening"
  | "speaking"
  | "reading"
  | "writing"
  | "quiz"
  | "everyday_english"
);

// A-Z Order
export type BlockType = (
    | "audio"
    | "dialouge"
    | "fill_blanks"
    | "grammer_point"
    | "grammer_reference"
    | "image"
    | "image_card"
    | "instruction"
    | "practice"
    | "question"
    | "quiz"
    | "reading"
    | "reorder_words"
    | "vocabulary_grid"
    | "word_list"
    )[];

export type Block = 
    | DialougeBlock
    | GrammerPointBlock
    | FillBlanksBlock
    | ImageBlock
    | ImageCardBlock
    | ImageCardsBlock
;

type BaseBlock<T extends string, D> = {
    id: string;
    type: T;
    instruction?: {
        id: number;
        text: string
    };
    data: D;
};

export type DialougeBlock = BaseBlock<"dialouge", {
    image?: {
        url: string;
        desc?: string;
    };
    lines: {
        id: string;
        speakerId: string;
        speaker: string;
        text: string
    }[]
}>;

export type FillBlanksBlock = BaseBlock<"fill_blanks", {
    questions: {
        text: string;
        answer: string
    }[]
}>

export type GrammerPointBlock = BaseBlock<"grammer_point", {
    title: string;
    rules: string[]
}>;

export type ImageBlock = BaseBlock<"image", {
    url: string;
    caption?: string
}>

export type ImageCardBlock = BaseBlock<"image_card", {
    url: string;
    alt?: string;
    style?: string;
    text: string;
    caption?: string;
    pronunciation?: string;
}>

export type ImageCardsBlock = BaseBlock<"image_cards", {
    audioRef?: {
        id: string;
        url: string;
    };
    cards: ImageCardBlock[];
    layout?: "grid" | "list" | "carousel";
}>