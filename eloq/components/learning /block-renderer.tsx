import { Block } from "@/types/learning";
import DialougeBlock from "./blocks/dialougeBlock";
import FillBlanksBlock from "./blocks/fillBlanksBlock";
import GrammerPointBlock from "./blocks/grammerPointBlock";

export default function BlockRenderer({block}: {block:Block}) {
    switch(block.type) {
        case "dialouge":
            return (
                <DialougeBlock data={block.data} />
            )
        case "grammer_point": 
            return (
                <GrammerPointBlock data={block.data} />
            )
        case "fill_blanks":
            return (
                <FillBlanksBlock data={block.data} />
            )
        default: 
            return null
    }
}