import { Block } from "@/types/learning";
import DialogueBlock from "./blocks/dialogueBlock";
import FillBlanksBlock from "./blocks/fillBlanksBlock";
import GrammarPointBlock from "./blocks/grammarPointBlock";
import ImageCardsBlock from "./blocks/imageCardsBlock";
import FreePracticeBlock from "./blocks/freePracticeBlock";
import WordListBlock from "./blocks/wordListBlock";
import MatchingBlock from "./blocks/matchingBlock";

// pass the whole block "block={block}" to the block component instead of passing the data "block={block.data}"

export default function BlockRenderer({block}: {block:Block}) {
    switch(block.type) {
        case "dialogue":
            return (
                <DialogueBlock data={block.data} />
            )
        case "grammar_point": 
            if (block.extensions?.title) {
                return (
                    <GrammarPointBlock data={block.data} title={block.extensions?.title} />
                )
            } else {
                return (
                    <GrammarPointBlock data={block.data} />
                )
            }
        case "fill_blanks":
            return (
                <FillBlanksBlock id={block.id} data={block.data} />
            )
        case "free_practice":
            return (
                <FreePracticeBlock data={block.data} />
            )
        case "image_cards":
            return (
                <ImageCardsBlock data={block.data} />
            )
        case "word_list":
            return (
                <WordListBlock data={block.data} />
            )
        case "matching":
            return (
                <MatchingBlock data={block.data} />
            )
        default: 
            return null
    }
}