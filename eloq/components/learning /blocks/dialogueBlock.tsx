import { FileText } from "lucide-react";
import { DialogueBlock as DialogueBlockType } from "@/types/learning";
import Image from "next/image";

interface DialogueBlockProps {
    data: DialogueBlockType["data"];
}

// مصفوفة ألوان متناسقة لشخصيات الحوار
const speakerColors = [
    "text-eloq-purple",
    "text-amber-600",
    "text-eloq-green",
    "text-amber-600 dark:text-amber-400"
];

export default function DialogueBlock({ data }: DialogueBlockProps) {
    return (
        <div className="w-full">
            <div className="relative flex flex-col gap-4 w-auto bg-foreground p-4 pt-8 pr-8 border border-border-subtle rounded-xl shadow-md">
                <FileText className="absolute top-2 right-2 cursor-pointer text-muted" size={20} />

                {/* دعم إظهار صورة الموقف إن وجدت في الحوار */}
                {data?.image?.url && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-2">
                        <Image 
                            src={data.image.url} 
                            alt={data.image.desc || "Dialogue image"} 
                            fill 
                            className="object-cover" 
                        />
                    </div>
                )}

                {/* عرض أسطر الحوار مع الحماية وتناوب الألوان */}
                <div className="flex flex-col gap-[2px]">
                    {data?.lines?.map((line, index) => {
                        // تحديد اللون: إما عبر speakerId أو عبر الترتيب الزوجي والفردي
                        const colorClass = 
                            line.speakerId === "1st" ? speakerColors[0] :
                            line.speakerId === "2nd" ? speakerColors[1] :
                            line.speakerId === "3rd" ? speakerColors[2] :
                            speakerColors[index % speakerColors.length]; // توزيع تلقائي ممتاز!

                        return (
                            <div key={line.id || index} className="grid grid-cols-[80px_1fr] items-start gap-y-2 gap-x-2 cursor-default">
                                <span className={`font-bold self-start ${colorClass}`}>
                                    {line.speaker}:
                                </span> 
                                <p className="text-md font-medium leading-normal text-base">   
                                    {line.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

