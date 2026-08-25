import Image from "next/image";
import { DialogueBlock as DialogueBlockType } from "@/types/learning";

interface DialogueBlockProps {
  data: DialogueBlockType["data"];
}

// ألوان المتحدثين الأصلية المعتمدة
const speakerColors = [
  "text-eloq-purple",
  "text-amber-600",
  "text-eloq-green",
  "text-blue-600",
];

export default function DialogueBlock({ data }: DialogueBlockProps) {
  if (!data) return null;

  // خريطة حفظ لون كل متحدث بناءً على speakerId
  const speakerColorsMap: { [speakerId: string]: string } = {};
  let colorIndex = 0;

  // فحص آمن لـ lines لتفادي خطأ runtime
  data.lines?.forEach((line) => {
    if (!line?.speakerId) return;

    if (!speakerColorsMap[line.speakerId]) {
      speakerColorsMap[line.speakerId] =
        speakerColors[colorIndex % speakerColors.length];

      colorIndex++;
    }
  });

  return (
    <div className="w-full">
      <div className="relative flex flex-col gap-4 w-full bg-background p-4 pt-8 pr-8 border border-border-subtle rounded-xl shadow-md">
        {/* صوة الحوار إن وجدت */}
        {data.image?.url && (
          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-2">
            <Image
              src={data.image.url}
              alt={data.image.description || "Dialogue scene"}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* أسطر الحوار */}
        <div className="flex flex-col gap-[6px]">
          {data.lines?.map((line) => {
            const colorClass =
              (line.speakerId && speakerColorsMap[line.speakerId]) || "text-foreground";

            return (
              <div
                key={line.id}
                className="grid grid-cols-[60px_1fr] items-start gap-x-2"
              >
                {/* اسم المتحدث */}
                <span className={`font-bold self-start ${colorClass}`}>
                  {line.speaker}:
                </span>

                {/* النص المقول */}
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
