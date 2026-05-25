import { ImageCardsBlock as ImageCardsBlockType } from "@/types/learning";
import { FileLineChartIcon } from "lucide-react";
import Image from "next/image";

interface ImageCardsBlockProps {
    data: ImageCardsBlockType["data"];
}
export default function ImageCardsBlock({data}: ImageCardsBlockProps) {
    
    return (
        <div className="w-full">
            <div className="">
                 <div className="flex items-cenetr justify-start gap-3 mb-1">
                        <p className="font-semibold text-xl text-green-700">
                            {data?.instruction?.id}
                        </p>
                        {/* {data?.instruction && <Volume2 className="" size={20} /> /* add hasAudio check   */}
                        <p>
                            {data?.instruction?.text}
                        </p>
                    </div>
            </div>
                { 
                    data?.cards.map((card) => (
                        <div className="flex flex-col gap-2"> 
                            <div className={`${card?.data?.style} w-10 h-10 rounded-xl`}>
                                <Image src={card?.data?.url} alt={card?.data?.alt ?? ""} fill />
                            </div>
                            <p>{card?.data?.text}</p>
                        </div>
                    ))
                }
            
        </div>
    )
}