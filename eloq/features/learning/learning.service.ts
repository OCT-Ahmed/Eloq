import { supabase } from "@/lib/supabase/client";

// =========================
// Levels
// =========================

export async function fetchLevels() {
  const { data, error } = await supabase
    .from("levels")
    .select("*")
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}

export async function fetchLevelBySlug(levelSlug: string) {
  const { data, error } = await supabase
    .from("levels")
    .select("*")
    .eq("slug", levelSlug)
    .single();

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}


// =========================
// Units
// =========================

export async function fetchUnits(levelId: string) {
  const { data, error } = await supabase
    .from("units")
    .select("*")
    .eq("level_id", levelId)
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}

export async function fetchUnitBySlug(
  unitSlug: string,
  levelId: string
) {
  const { data, error } = await supabase
    .from("units")
    .select("*")
    .eq("slug", unitSlug)
    .eq("level_id", levelId)
    .single();

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}


// =========================
// Lessons
// =========================

export async function fetchLessons(unitId: string) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("unit_id", unitId)
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}

export async function fetchLessonBySlug(
  lessonSlug: string,
  unitId: string
) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("slug", lessonSlug)
    .eq("unit_id", unitId)
    .single();

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}


// =========================
// Blocks
// =========================

export async function fetchBlocks(lessonId: string) {
  const { data, error } = await supabase
    .from("blocks")
    .select("*")
    .eq("lesson_id", lessonId)
    .order("order_idx", { ascending: true });

  return {
    ok: !error,
    data: error ? null : data,
    error: error ?? null,
  };
}