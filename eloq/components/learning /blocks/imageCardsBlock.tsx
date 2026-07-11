import { ImageCardsBlock as ImageCardsBlockType } from "@/types/learning";
import { FileLineChartIcon } from "lucide-react";
import Image from "next/image";

interface ImageCardsBlockProps {
    data: ImageCardsBlockType["data"];
}
export default function ImageCardsBlock({data}: ImageCardsBlockProps) {
    return (
        <div className="flex flex-col gap-4 w-full bg-foreground border border-border-subtle p-4 rounded-xl shadow-sm">
            <div>
                 <div className="flex items-cenetr justify-start gap-3 mb-1">
                        <p className="font-semibold text-xl text-eloq-green">
                            {data?.instruction?.id}
                        </p>
                        <p className="text-base font-medium">
                            {data?.instruction?.text}
                        </p>
                    </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
                { 
                    data?.cards.map((card) => (
                        <div className="flex flex-col gap-2 items-center bg-background border border-border-subtle p-3 rounded-xl shadow-sm w-full"> 
                            <div className={`${card?.data?.style} relative w-full aspect-square max-w-[110px] rounded-xl overflow-hidden bg-foreground border border-border-subtle flex items-center justify-center`}>
                                {card?.data?.url ? (
                                    <Image src={card?.data?.url} alt={card?.data?.alt ?? ""} fill className="object-cover" />
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2 bg-foreground text-muted text-center">
                                        <FileLineChartIcon size={20} />
                                        <span className="text-[10px] font-medium block">لا توجد صورة</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-sm font-medium text-base text-center">{card?.data?.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
