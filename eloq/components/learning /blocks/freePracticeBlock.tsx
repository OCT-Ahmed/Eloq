import { Textarea } from "@/components/ui/textarea";
import { FreePracticeBlock as FreePracticeBlockType } from "@/types/learning";

interface FreePracticeBlockProps {
    data: FreePracticeBlockType["data"]
}

export default function FreePracticeBlock(
    {data}:FreePracticeBlockProps
) {
    return (
        <div>
            <Textarea className="text-md h-80 border-2 border-eloq-purple focus:border-2 focus:border-eloq-primary outline-none" placeholder="Write here">
            </Textarea>
        </div>
    )
}