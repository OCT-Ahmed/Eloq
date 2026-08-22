import { Card } from "@/components/ui/card";
import { GrammarPointBlock as GrammarPointBlockType } from "@/types/learning";
import { BookMarked } from "lucide-react";

interface GrammarPointBlockProps {
  data: GrammarPointBlockType["data"];
}

export default function GrammarPointBlock({ data }: GrammarPointBlockProps) {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-soft p-0">
      <div className="flex">
        {/* Accent Bar */}
        <span className="w-1.5 shrink-0 bg-eloq-purple" aria-hidden />

        <div className="flex-1 p-5">
          <div className="flex items-center gap-2 text-eloq-purple mb-2">
            <BookMarked className="h-4 w-4" />
            <h3 className="text-base font-bold">Grammar Point</h3>
          </div>

          {data?.text && (
            <p className="whitespace-pre-line text-sm sm:text-base font-medium leading-relaxed text-foreground">
              {data.text}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
