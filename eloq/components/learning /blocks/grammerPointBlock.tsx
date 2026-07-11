  import { Card } from "@/components/ui/card"
import { GrammerPointBlock as GrammerPointBlockType } from "@/types/learning"

interface GrammerPointBlockProps {
    data: GrammerPointBlockType["data"];
    title?: string;
}

export default function GrammerPointBlock({
    data, title
}:GrammerPointBlockProps) {
    return (
        <Card className="text-md leading-normal gap-0 bg-eloq-soft-purple p-4 px-8 w-fit border-border-subtle">
            <h2 className="w-full font-semibold text-xl text-eloq-purple mb-2 pb-2 border-b border-border-subtle">
                Grammer Point
            </h2>
            {data?.instruction && <p className="font-medium text-md text-eloq-purple mb-2">
                {data.instruction}
            </p>}
            {
                data.rules.map((rule, i) => (
                    <div key={i} className="flex gap-1 text-base">
                        <p> 
                            {rule}
                        </p> 
                    </div>
                ))
            }
        </Card>
    )
}
