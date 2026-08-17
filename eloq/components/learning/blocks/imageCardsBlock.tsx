"use client";

import { ImageCardsBlock as ImageCardsBlockType } from "@/types/learning";
import { FileLineChartIcon } from "lucide-react";
import Image from "next/image";

interface ImageCardsBlockProps {
  data: ImageCardsBlockType["data"];
}

export default function ImageCardsBlock({
  data,
}: ImageCardsBlockProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-border-subtle bg-foreground p-4 shadow-sm">

      {/* Image cards */}
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

        {data?.items?.map((item, index) => (
          <div
            key={item.id || index}
            className="flex w-full flex-col items-center gap-2 rounded-xl border border-border-subtle bg-background p-3 shadow-sm"
          >

            {/* Image */}
            <div className="relative flex aspect-square w-full max-w-[110px] items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-foreground">

              {item.image?.url ? (
                <Image
                  src={item.image.url}
                  alt={item.image.alt ?? item.label ?? ""}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-foreground p-2 text-center text-muted">
                  <FileLineChartIcon size={20} />

                  <span className="block text-[10px] font-medium">
                    There is no image
                  </span>
                </div>
              )}

            </div>

            {/* Optional label */}
            {item.label && (
              <p className="text-center text-sm font-medium">
                {item.label}
              </p>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}