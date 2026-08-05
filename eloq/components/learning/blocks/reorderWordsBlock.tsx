"use client";

import { useState } from "react";
import { ReorderWordsBlock as ReorderWordsBlockType } from "@/types/learning";
import { RotateCcw, Check, X } from "lucide-react";

interface ReorderWordsBlockProps {
  block: ReorderWordsBlockType["data"];
}

export default function ReorderWordsBlock({ data }: ReorderWordsBlockProps) {

  const [userSelections, setUserSelections] = useState<{ [key: string]: string[] }>({});
  const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({});

  // إضافة كلمة لمنطقة الإجابة
  const handleSelectWord = (itemId: string, word: string) => {
    const currentSelected = userSelections[itemId] || [];
    setUserSelections({
      ...userSelections,
      [itemId]: [...currentSelected, word],
    });
    setShowResults({ ...showResults, [itemId]: false });
  };

  // إزالة كلمة وإعادتها لبنك الكلمات
  const handleRemoveWord = (itemId: string, wordIndex: number) => {
    const currentSelected = userSelections[itemId] || [];
    const updatedSelected = currentSelected.filter((_, idx) => idx !== wordIndex);
    
    setUserSelections({
      ...userSelections,
      [itemId]: updatedSelected,
    });
    setShowResults({ ...showResults, [itemId]: false });
  };

  // إعادة ضبط السؤال
  const handleReset = (itemId: string) => {
    setUserSelections({ ...userSelections, [itemId]: [] });
    setShowResults({ ...showResults, [itemId]: false });
  };

  // فحص النتيجة
  const handleCheck = (itemId: string) => {
    setShowResults({ ...showResults, [itemId]: true });
  };

  return (
    <div className={`flex flex-col gap-6 w-full bg-foreground border border-border-subtle p-5 rounded-2xl shadow-sm`}>
      {/* التعليمات والترويسة */}

      {/* الأسئلة */}
      <div className="flex flex-col gap-6 w-full">
        {data?.items?.map((item, index) => {
          const selected = userSelections[item.id] || [];
          
          // حساب الكلمات المتاحة في البنك
          const availableWords = [...(item?.words || [])];
          selected.forEach((selWord) => {
            const foundIdx = availableWords.indexOf(selWord);
            if (foundIdx !== -1) {
              availableWords.splice(foundIdx, 1);
            }
          });

          const isComplete = selected.length === item.correctOrder.length;
          const isCorrect = isComplete && selected.join(" ") === item.correctOrder.join(" ");
          const isChecked = showResults[item.id];

          return (
            <div
              key={item.id || index}
              className="flex flex-col gap-3 p-4 bg-background rounded-xl border border-border-subtle"
            >
              <div className="flex items-center justify-between text-xs text-muted font-medium">
                <span>Sentence {index + 1}</span>
                <button
                  onClick={() => handleReset(item.id)}
                  className="flex items-center gap-1 hover:text-eloq-purple transition-colors"
                >
                  <RotateCcw size={14} />
                  <span>Restart</span>
                </button>
              </div>

              {/* منطقة الإجابة */}
              <div
                className={`min-h-[52px] p-2.5 rounded-lg border-2 border-dashed flex flex-wrap items-center gap-2 transition-colors ${
                  isChecked
                    ? isCorrect
                      ? "border-green-500 bg-green-500/10"
                      : "border-red-500 bg-red-500/10"
                    : "border-border-subtle bg-foreground/50"
                }`}
              >
                {selected.length === 0 ? (
                  <span className="text-xs text-muted/60 px-2">
                    Tap on the words to reorder the sentence
                  </span>
                ) : (
                  selected.map((word, wordIdx) => (
                    <button
                      key={wordIdx}
                      onClick={() => handleRemoveWord(item.id, wordIdx)}
                      className="px-3 py-1.5 bg-eloq-purple text-white text-sm font-medium rounded-md shadow-sm hover:bg-eloq-purple/80 transition-all active:scale-95"
                    >
                      {word}
                    </button>
                  ))
                )}
              </div>

              {/* بنك الكلمات */}
              <div className="flex flex-wrap items-center gap-2 pt-1 min-h-[40px]">
                {availableWords.map((word, wordIdx) => (
                  <button
                    key={wordIdx}
                    onClick={() => handleSelectWord(item.id, word)}
                    className="px-3 py-1.5 bg-foreground border border-border-subtle hover:border-eloq-purple text-sm font-medium rounded-md shadow-sm transition-all active:scale-95"
                  >
                    {word}
                  </button>
                ))}
              </div>

              {/* التغذية الراجعة وزر التحقق */}
              <div className="flex items-center justify-between pt-2 border-t border-border-subtle/50 mt-1">
                <div>
                  {isChecked && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold">
                      {isCorrect ? (
                        <span className="text-green-600 flex items-center gap-1">
                          <Check size={16} /> ممتازة!
                        </span>
                      ) : (
                        <span className="text-red-500 flex items-center gap-1">
                          <X size={16} /> ترتيب غير صحيح، حاول مجدداً.
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {isComplete && !isChecked && (
                  <button
                    onClick={() => handleCheck(item.id)}
                    className="px-4 py-1.5 bg-eloq-purple text-white text-xs font-semibold rounded-lg hover:opacity-90"
                  >
                    تحقق
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
