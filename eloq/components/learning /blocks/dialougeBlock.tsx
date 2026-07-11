import { FileText } from "lucide-react";
import { DialougeBlock as DialougeBlockType } from "@/types/learning";

interface DialougeBlockTypeProps {
    data: DialougeBlockType["data"];
}

export default function DialougeBlock(
    {data}: DialougeBlockTypeProps
) {
    return (
        <div className="">
            <div className="relative flex flex-col gap-[2px] w-auto bg-foreground p-4 pt-8 pr-8 border border-border-subtle rounded-xl shadow-md">
                <FileText className="absolute top-2 right-2 cursor-pointer text-muted" size={20} />
                {
                    data.lines.map(line => (
                        <div key={line.id} className="grid grid-cols-[80px_1fr] items-start gap-y-2 gap-x-2 cursor-default">
                            <span className={`font-bold self-start ${
                                line.speakerId === "1st" 
                                    ? "text-eloq-purple" 
                                    : line.speakerId === "2nd" 
                                    ? "text-primary" 
                                    : line.speakerId === "3rd" 
                                    ? "text-eloq-green" 
                                    : "text-amber-600 dark:text-amber-400"
                            }`}>
                                {line.speaker}
                            </span> 
                            <p className="text-md font-medium leading-normal text-base">   
                                {line.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
