import { supabase } from "@/lib/supabase";
import type {
  Practice,
  PracticeItem,
  PracticeItemAudio,
  PracticeType,
} from "../types/practice";


// =========================================================
// Database → Frontend Mappers
// =========================================================

function mapPractice(row: any): Practice {
  return {
    id: row.id,
    unitId: row.unit_id,
    type: row.type as PracticeType,
    title: row.title,
    description: row.description,
    orderIdx: row.order_idx,
    completionXp: row.completion_xp,
    isActive: row.is_active,
  };
}


function mapPracticeItem(row: any): PracticeItem {
  const content = row.content ?? {};

  return {
    id: row.id,
    practiceId: row.practice_id,
    interaction: content.interaction ?? "text",
    content,
    orderIdx: row.order_idx,
  };
}


function mapPracticeAudio(row: any): PracticeItemAudio {
  return {
    id: row.id,
    practiceItemId: row.practice_item_id,
    locale: row.locale,
    voiceId: row.voice_id,
    audioUrl: row.audio_url,
    duration: row.duration,
  };
}


// =========================================================
// Unit Practices
// =========================================================

export async function fetchUnitPractices(unitId: string) {
  const { data, error } = await supabase
    .from("unit_practices")
    .select(`
      id,
      unit_id,
      type,
      title,
      description,
      order_idx,
      completion_xp,
      is_active
    `)
    .eq("unit_id", unitId)
    .eq("is_active", true)
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : (data ?? []).map(mapPractice),
    error: error ?? null,
  };
}


// =========================================================
// Single Practice
// =========================================================

export async function fetchPractice(practiceId: string) {
  // -------------------------------------------------------
  // Practice
  // -------------------------------------------------------

  const { data: practiceData, error: practiceError } =
    await supabase
      .from("unit_practices")
      .select(`
        id,
        unit_id,
        type,
        title,
        description,
        order_idx,
        completion_xp,
        is_active
      `)
      .eq("id", practiceId)
      .eq("is_active", true)
      .maybeSingle();

  if (practiceError) {
    return {
      ok: false,
      data: null,
      error: practiceError,
    };
  }

  if (!practiceData) {
    return {
      ok: false,
      data: null,
      error: new Error("PRACTICE_NOT_FOUND"),
    };
  }


  // -------------------------------------------------------
  // Practice Items
  //
  // IMPORTANT:
  // accepted_answers is intentionally NOT selected.
  // -------------------------------------------------------

  const { data: itemData, error: itemError } =
    await supabase
      .from("practice_items")
      .select(`
        id,
        practice_id,
        content,
        order_idx
      `)
      .eq("practice_id", practiceId)
      .order("order_idx", { ascending: true });

  if (itemError) {
    return {
      ok: false,
      data: null,
      error: itemError,
    };
  }


  const items = (itemData ?? []).map(mapPracticeItem);


  // -------------------------------------------------------
  // Practice Audio
  // -------------------------------------------------------

  const itemIds = items.map((item) => item.id);

  let audio: PracticeItemAudio[] = [];

  if (itemIds.length > 0) {
    const { data: audioData, error: audioError } =
      await supabase
        .from("practice_item_audio")
        .select(`
          id,
          practice_item_id,
          locale,
          voice_id,
          audio_url,
          duration
        `)
        .in("practice_item_id", itemIds);

    if (audioError) {
      return {
        ok: false,
        data: null,
        error: audioError,
      };
    }

    audio = (audioData ?? []).map(mapPracticeAudio);
  }


  // -------------------------------------------------------
  // Result
  // -------------------------------------------------------

  return {
    ok: true,
    data: {
      practice: mapPractice(practiceData),
      items,
      audio,
    },
    error: null,
  };
}