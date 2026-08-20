import Image from "next/image";
import { DialogueBlock as DialogueBlockType, type LocalizedText } from "@/types/learning";
import { Explanation } from "../Explanation";

interface DialogueBlockProps {
  data: DialogueBlockType["data"];
  explanation?: LocalizedText;
}

// Colors assigned to speakers based on their first appearance.
const speakerColors = [
  "text-eloq-purple",
  "text-amber-600",
  "text-eloq-green",
  "text-blue-600",
];

export default function DialogueBlock({ data, explanation }: DialogueBlockProps) {
  if (!data) return null;

  // Store the assigned color for each speaker.
  const speakerColorsMap: { [speakerId: string]: string } = {};

  let colorIndex = 0;

  data.lines?.forEach((line) => {
    if (!line.speakerId) return;

    // Do not change the color if the speaker already has one.
    if (!speakerColorsMap[line.speakerId]) {
      speakerColorsMap[line.speakerId] =
        speakerColors[colorIndex % speakerColors.length];

      colorIndex++;
    }
  });

  return (
    <div className="w-full">
      <div className="relative flex flex-col gap-4 w-full bg-foreground p-4 pt-8 pr-8 border border-border-subtle rounded-xl shadow-md">
        {explanation && (
          <Explanation
            explanation={explanation.en || "No Explanation"}
          />
        )}
        {/* Render optional dialogue image */}
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

        {/* Render dialogue lines */}
        <div className="flex flex-col gap-[6px]">
          {data.lines?.map((line) => {
            const colorClass =
              speakerColorsMap[line.speakerId] || "text-foreground";

            return (
              <div
                key={line.id}
                className="grid grid-cols-[80px_1fr] items-start gap-x-2"
              >
                {/* Speaker name */}
                <span className={`font-bold self-start ${colorClass}`}>
                  {line.speaker}:
                </span>

                {/* Spoken text */}
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