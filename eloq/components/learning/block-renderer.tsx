import { Block, LocalizedText } from "@/types/learning";
import DialogueBlock from "./blocks/dialogueBlock";
import FillBlanksBlock from "./blocks/fillBlanksBlock";
import GrammarPointBlock from "./blocks/grammarPointBlock";
import ImageCardsBlock from "./blocks/imageCardsBlock";
import FreePracticeBlock from "./blocks/freePracticeBlock";
import WordListBlock from "./blocks/wordListBlock";
import MatchingBlock from "./blocks/matchingBlock";
import MultipleChoiceBlock from "./blocks/MultipleChoiceBlock";
import ReorderWordsBlock from "./blocks/reorderWordsBlock";
import Explanation from "./Explanation";

export default function BlockRenderer({ block }: { block: Block }) {
    let content;

    switch (block.type) {
        case "dialogue":
            content = <DialogueBlock data={block.data} />;
            break;
        case "grammar_point":
            content = <GrammarPointBlock data={block.data} />;
            break;
        case "fill_blanks":
            content = <FillBlanksBlock id={block.id} data={block.data} />;
            break;
        case "free_practice":
            content = <FreePracticeBlock data={block.data} />;
            break;
        case "image_cards":
            content = <ImageCardsBlock data={block.data} />;
            break;
        case "word_list":
            content = <WordListBlock data={block.data} />;
            break;
        case "matching":
            content = <MatchingBlock id={block.id} data={block.data} />;
            break;
        case "reorder_words":
            content = <ReorderWordsBlock id={block.id} data={block.data} />;
            break;
        case "multiple_choice":
            content = <MultipleChoiceBlock id={block.id} data={block.data} />;
            break;
        default:
            return null;
    }

    return (
        <>
            {content}
            <Explanation explanation={getLocalizedText(block.extensions?.explanation)} />
        </>
    );
}

function getLocalizedText(text?: LocalizedText) {
    return text?.ar ?? text?.en ?? Object.values(text ?? {}).find(Boolean);
}