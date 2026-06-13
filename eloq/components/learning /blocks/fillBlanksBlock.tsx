import { FillBlanksBlock as FillBlanksBlockType } from "@/types/learning";

interface FillBlanksBlockProps {
    data: FillBlanksBlockType["data"]
}

export default function FillBlanksBlock(
    {data}:FillBlanksBlockProps
) {
    return (
        <div>
            {
                data?.items?.map(item => (
                    <div className="flex gap-1">
                        <p> 
                            {item.text}
                        </p>
                        <p className="hidden">{item.answer}</p>
                    </div>
                ))
            }
        </div>
    )
}