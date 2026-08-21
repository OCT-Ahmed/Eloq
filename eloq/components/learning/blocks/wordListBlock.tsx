import { FileText } from "lucide-react";
import { WordListBlock as WordListBlockType } from "@/types/learning";

interface WordListBlockProps {
  data: WordListBlockType["data"];
}

export default function WordListBlock({
  data,
}: WordListBlockProps) {
  return (
    <div className="w-full">
      <div className="relative flex flex-col gap-2 w-full bg-foreground lg:p-4 pt-10 lg:pr-8 border border-border-subtle rounded-xl shadow-md">
        
        {/* Block icon */}
        <FileText
          className="absolute top-2 right-2 text-muted"
          size={20}
        />

        {/* Word list */}
        {data?.words?.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 bg-background border border-border-subtle shadow-sm py-3 px-4 rounded-xl"
          >
            {/* Item number */}
            <span className="font-semibold text-xl text-eloq-purple">
              {index + 1}
            </span>

            {/* Word */}
            <p className="text-lg font-bold">
              {item.word}
            </p>

            {/* Definition */}
            {item.definition && (
              <p className="text-base font-medium text-muted">
                {item.definition}
              </p>
            )}

            {/* Example */}
            {item.example && (
              <p className="text-base font-medium">
                {item.example}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}