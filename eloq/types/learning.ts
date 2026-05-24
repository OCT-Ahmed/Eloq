/* =====================
    Interfaces
        UnitType
        Section
        Block
===================== */
interface UnitType {
    id: "1";
    slug: "what's-up";
    title: "What's up!";
    sectionorder: string[];
    sections: Section[]
}

export interface Section {
    id: string;
    type: SectionType;
    title: string;
    blocks: Block[]
}

/* =====================
    Types
        SectionType
        BlockType
        Block
        BaseBlock
===================== */
type SectionType = [
  "starter",
  "grammar",
  "vocabulary",
  "listening",
  "speaking",
  "reading",
  "writing",
  "quiz",
  "everyday_english"
];

// A-Z Order
type BlockType =
    | "audio"
    | "dialouge"
    | "fill_blanks"
    | "grammer_point"
    | "image"
    | "instruction"
    | "practice"
    | "question"
    | "quiz"
    | "reading"
    | "vocabulary_grid"
    | "word_list"
;

export type Block = 
    | DialougeBlock
    | GrammerPointBlock
    | FillBlanksBlock
    | ImageBlock
;

type BaseBlock<T extends string, D> = {
    id: number;
    type: T;
    instructions?: string;
    data: D;
};

type DialougeBlock = BaseBlock<"dialouge", {
    lines: {
        speaker: string;
        text: string;
    }[]
}>;

type GrammerPointBlock = BaseBlock<"grammer_point", {
    title: string;
    rules: string[]
}>;

type FillBlanksBlock = BaseBlock<"fill_blanks", {
    questions: {
        text: string;
        answer: string;
    }[]
}>

type ImageBlock = BaseBlock<"image", {
    url: string;
    caption?: string;
}>