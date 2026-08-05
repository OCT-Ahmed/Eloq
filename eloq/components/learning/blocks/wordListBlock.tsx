import { FileText } from "lucide-react";
import { WordListBlock as WordListBlockType } from "@/types/learning";

interface WordListBlockProps {
    data: WordListBlockType["data"];
}

export default function WordListBlock(
    {data}: WordListBlockProps
) {
    return (
        <div className="">
            <div className="relative flex flex-col gap-2 w-auto bg-foreground lg:p-4 pt-10 lg:pr-8 border border-border-subtle rounded-xl shadow-md">
                <FileText className="absolute top-2 right-2 cursor-pointer text-muted" size={20} />
                {
                    data.items.map((item, index) => (
                        <div key={item.id} className="flex flex-col bg-background border border-border-subtle shadow-sm py-2 px-4 rounded-xl">
                            <span className="font-semibold text-xl text-eloq-purple">{index + 1}</span>
                            <div className="flex flex-col items-start justify-between lg:grid lg:grid-cols-[80px_1fr_1fr] lg:items-start lg:justify-start lg:gap-y-2 lg:gap-x-2 cursor-default text-base">
                                <span className={`font-bold self-start ${
                                    item.id === "1st" 
                                        ? "text-eloq-purple" 
                                        : item.id === "2nd" 
                                        ? "text-primary" 
                                        : item.id === "wl3" 
                                        ? "text-eloq-green" 
                                        : "text-amber-600 dark:text-amber-400"
                                }`}>
                                </span> 
                                <p className="text-md font-medium leading-normal">   
                                    A: {item.primaryText}
                                </p>
                                <p className="text-md font-medium leading-normal">   
                                    B: {item.secondaryText}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
