import { ImageCardsBlock as ImageCardsBlockType } from "@/types/learning";
import { FileLineChartIcon } from "lucide-react";
import Image from "next/image";

interface ImageCardsBlockProps {
  block: ImageCardsBlockType["data"];
}

export default function ImageCardsBlock({ data }: ImageCardsBlockProps) {

  return (
    <div className={`flex flex-col gap-4 w-full bg-foreground border border-border-subtle p-4 rounded-xl shadow-sm`}>
      {/* الترويسة والتعليمات */}

      {/* شبكة الكروت */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
        {data?.cards?.map((card, index) => (
          <div
            key={card?.id || index}
            className="flex flex-col gap-2 items-center bg-background border border-border-subtle p-3 rounded-xl shadow-sm w-full"
          >
            <div className={`${card?.data?.style ?? ""} relative w-full aspect-square max-w-[110px] rounded-xl overflow-hidden bg-foreground border border-border-subtle flex items-center justify-center`}>
              {card?.data?.url ? (
                <Image
                  src={card.data.url}
                  alt={card.data.alt ?? ""}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2 bg-foreground text-muted text-center">
                  <FileLineChartIcon size={20} />
                  <span className="text-[10px] font-medium block">There is no image</span>
                </div>
              )}
            </div>
            {card?.data?.text && (
              <p className="text-sm font-medium text-center">{card.data.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
