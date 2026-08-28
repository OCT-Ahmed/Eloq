import { supabase } from "@/lib/supabase";

export interface TextEvaluationResult {
  ok: boolean;
  isCorrect: boolean;
  error: Error | null;
}

export async function evaluateTextAnswer(
  itemId: string,
  answer: string
): Promise<TextEvaluationResult> {
  if (!itemId) {
    return {
      ok: false,
      isCorrect: false,
      error: new Error("ITEM_ID_REQUIRED"),
    };
  }

  if (answer == null) {
    return {
      ok: false,
      isCorrect: false,
      error: new Error("ANSWER_REQUIRED"),
    };
  }

  const { data, error } = await supabase.rpc(
    "check_practice_item",
    {
      p_item_id: itemId,
      p_answer: answer,
    }
  );

  if (error) {
    return {
      ok: false,
      isCorrect: false,
      error,
    };
  }

  const result = data?.[0];

  if (!result) {
    return {
      ok: false,
      isCorrect: false,
      error: new Error("INVALID_EVALUATION_RESPONSE"),
    };
  }

  return {
    ok: true,
    isCorrect: result.is_correct === true,
    error: null,
  };
}