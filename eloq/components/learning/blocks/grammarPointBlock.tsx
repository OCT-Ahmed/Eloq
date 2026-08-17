import { Card } from "@/components/ui/card";
import { GrammarPointBlock as GrammarPointBlockType } from "@/types/learning";

interface GrammarPointBlockProps {
    data: GrammarPointBlockType["data"];
}

export default function GrammarPointBlock({
    data,
}: GrammarPointBlockProps) {
    return (
        <Card className="gap-0 bg-eloq-soft-purple p-4 px-8 w-fit border-border-subtle">

            {/* Block heading */}
            <h2 className="mb-2 pb-2 border-b border-border-subtle text-xl font-bold text-eloq-purple">
                Grammar Point
            </h2>

            {/* Grammar content */}
            {data?.text && (
                <p className="whitespace-pre-line text-base font-medium leading-normal">
                    {data.text}
                </p>
            )}

        </Card>
    );
}