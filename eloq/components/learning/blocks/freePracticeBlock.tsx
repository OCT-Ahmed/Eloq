"use client";

import { Textarea } from "@/components/ui/textarea";
import { FreePracticeBlock as FreePracticeBlockType } from "@/types/learning";
import { useLearningAnswersStore } from "@/store/learningAnswersStore";

interface FreePracticeBlockProps {
  id: string;
  data: FreePracticeBlockType["data"];
}

export default function FreePracticeBlock({
  id,
  data,
}: FreePracticeBlockProps) {
  const answer =
    useLearningAnswersStore(
      (state) => state.answers[id]?.["free-practice"] ?? ""
    );

  const setAnswer = useLearningAnswersStore(
    (state) => state.setAnswer
  );

  return (
    <div className="w-full">
      <Textarea
        value={answer}
        onChange={(e) =>
          setAnswer(id, "free-practice", e.target.value)
        }
        className="h-80 w-full resize-y border-2 border-eloq-purple text-md outline-none focus:border-2 focus:border-eloq-primary"
        placeholder="Write here"
      />
    </div>
  );
}