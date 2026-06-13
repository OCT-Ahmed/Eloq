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
            <Textarea className="text-md border-2 border-eloq-purple focus:border-2 focus:border-eloq-primary" placeholder="Write here">
            </Textarea>
        </div>
    )
}