import { FileText, Paperclip } from "lucide-react";
import { MatchingBlock as MatchingBlockType } from "@/types/learning";

interface MatchingBlockProps {
    data: MatchingBlockType["data"];
}

export default function MatchingBlock(
    {data}: MatchingBlockProps
) {
    return (
        <div className="">
            
            <div className="relative flex flex-col gap-2 w-auto bg-white p-4 pt-8 pr-8 border-2 border-primary/25 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">
                {/* onclick add popup box that contain explanation or translation of the text/grammer/new words - (should be in every block or page) */}
                <FileText className="absolute top-2 right-2 cursor-pointer" color="gray" size={20} />
                <div className="flex flex-col bg-primary/15 shadow-md py-2 px-4 rounded-xl">
                    <span className="font-semibold text-xl text-eloq-purple">
                        
                    </span>
                    <div className="
                        grid grid-cols-[1fr_1fr] answers-start justify-start gap-y-2 gap-x-2 cursor-default
                    ">
                        {/* 1st Column */}
                        <div className="flex flex-col gap-1">
                        {
                            data.questions.map((question, index) => (
                                <div key={index} id="" className="">
                                    <span className={`
                                        font-bold self-start ${question.id === "1st" ? "text-eloq-purple/75" : question.id === "2nd" ? "text-primary/65" : question.id === "3rd" ? "text-green-800" : "text-brown-700"}`
                                    }>
                                        {}
                                    </span> 
                                    <p className="w-fit text-md font-medium py-[0px] px-2 leading-normal border-2 border-transparent hover:border-eloq-purple rounded-full transition-all duration-200">   
                                        {question.text}
                                    </p>
                                </div>
                            ))
                        } 
                        </div>
                        {/* 2nd Column */}
                        <div className="flex flex-col gap-1">
                        {
                            data.answers.map((answer, index) => (
                                <div key={index} id="" className="">
                                    <span className={`
                                        font-bold self-start ${answer.id === "1st" ? "text-eloq-purple/75" : answer.id === "2nd" ? "text-primary/65" : answer.id === "3rd" ? "text-green-800" : "text-brown-700"}`
                                    }>
                                        {}
                                    </span> 
                                    <p className="w-fit text-md font-medium py-[0px] px-2 leading-normal border-2 border-transparent hover:border-eloq-purple rounded-full transition-all duration-200">   
                                        {answer.text}
                                    </p>
                                </div>
                            ))
                        }  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}