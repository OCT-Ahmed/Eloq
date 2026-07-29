import { ImageCardBlock as ImageCardBlockType } from "@/types/learning";
import { FileLineChartIcon } from "lucide-react";
import Image from "next/image";

interface ImageCardBlockProps {
  block: ImageCardBlockType["data"];
}

export default function ImageCardBlock({ data }: ImageCardBlockProps) {

  return (
    <div className={`flex flex-col gap-3 p-4 bg-foreground border border-border-subtle rounded-xl shadow-sm max-w-sm w-full`}>
      <div className={`${data?.style ?? ""} relative w-full aspect-video rounded-xl overflow-hidden bg-background border border-border-subtle flex items-center justify-center`}>
        {data?.url ? (
          <Image
            src={data.url}
            alt={data.alt ?? ""}
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background text-muted">
            <FileLineChartIcon size={28} />
            <span className="text-xs font-medium">Image don't exist</span>
          </div>
        )}
      </div>
      {data?.text && (
        <p className="text-base font-medium text-center">{data.text}</p>
      )}
    </div>
  );
}
