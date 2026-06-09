import { FileText, Paperclip } from "lucide-react";
import { DialougeBlock as DialougeBlockType } from "@/types/learning";

interface DialougeBlockTypeProps {
    data: DialougeBlockType["data"];
}

export default function DialougeBlock(
    {data}: DialougeBlockTypeProps
) {
    return (
        <div className="">
            
            <div className="relative flex flex-col w-auto bg-white p-4 border-2 border-primary/25 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">
                {/* onclick add popup box that contain explanation or translation of the text/grammer/new words - (should be in every block or page) */}
                <FileText className="absolute top-2 right-2 cursor-pointer" color="gray" size={20} />
                {
                    data.lines.map(line => (
                        <div key={line.id} className=" grid grid-cols-[80px_1fr] gap-y-2 gap-x-2 cursor-default">
                            <span className={`font-bold ${line.speakerId === "1st" ? "text-eloq-purple/85" : line.speakerId === "2nd" ? "text-primary/85" : line.speakerId === "3rd" ? "text-green-800" : "text-brown-700"} make diffrent colors for every speaker `}>
                                {line.speaker}
                            </span> 
                            <p className="font-medium">
                                
                                {line.text}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}