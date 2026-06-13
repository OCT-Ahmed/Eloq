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
        <Card className=" text-md leading-normal gap-0 bg-eloq-purple/25 p-4 px-8 w-fit">
            <h2 className="w-full font-semibold text-xl text-eloq-purple mb-2 pb-2 border-b border-zinc-300">
                Grammer Point
            </h2>
            {data?.instruction && <p className="font-medium text-md text-eloq-purple mb-2">
                {data.instruction}
            </p>}
            {
                data.rules.map((rule) => (
                    <div className="flex gap-1">
                        <p> 
                            {rule}
                        </p> 
                    </div>
                ))
            }
        </Card>
    )
}