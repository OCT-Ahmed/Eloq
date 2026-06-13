import { Block } from "@/types/learning";
import DialougeBlock from "./blocks/dialougeBlock";
import FillBlanksBlock from "./blocks/fillBlanksBlock";
import GrammerPointBlock from "./blocks/grammerPointBlock";
import ImageCardsBlock from "./blocks/imageCardsBlock";
import FreePracticeBlock from "./blocks/freePracticeBlock";
import WordListBlock from "./blocks/wordListBlock";
import MatchingBlock from "./blocks/matchingBlock";

export default function BlockRenderer({block}: {block:Block}) {
    switch(block.type) {
        case "dialouge":
            return (
                <DialougeBlock data={block.data} />
            )
        case "grammer_point": 
            if (block.extensions?.title) {
                return (
                    <GrammerPointBlock data={block.data} title={block.extensions?.title} />
                )
            } else {
                return (
                    <GrammerPointBlock data={block.data} />
                )
            }
        case "fill_blanks":
            return (
                <FillBlanksBlock data={block.data} />
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