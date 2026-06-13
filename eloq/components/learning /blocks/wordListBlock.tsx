import { FileText, Paperclip } from "lucide-react";
import { WordListBlock as WordListBlockType } from "@/types/learning";

interface WordListBlockProps {
    data: WordListBlockType["data"];
}

export default function WordListBlock(
    {data}: WordListBlockProps
) {
    return (
        <div className="">
            
            <div className="relative flex flex-col gap-2 w-auto bg-white p-4 pt-8 pr-8 border-2 border-primary/25 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">
                {/* onclick add popup box that contain explanation or translation of the text/grammer/new words - (should be in every block or page) */}
                <FileText className="absolute top-2 right-2 cursor-pointer" color="gray" size={20} />
                {
                    data.items.map((item, index) => (
                        <div key={item.id} className="flex flex-col bg-primary/15 shadow-md py-2 px-4 rounded-xl">
                            <span className="font-semibold text-xl text-eloq-purple">{index + 1}</span>
                            <div className="
                                grid grid-cols-[80px_1fr_1fr] items-start justify-start gap-y-2 gap-x-2 cursor-default
                            ">
                                <span className={`
                                    font-bold self-start ${item.id === "1st" ? "text-eloq-purple/75" : item.id === "2nd" ? "text-primary/65" : item.id === "3rd" ? "text-green-800" : "text-brown-700"}`
                                }>
                                    {}
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