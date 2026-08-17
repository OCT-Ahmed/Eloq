import { supabase } from "@/lib/supabase/client"

export interface BlockData {
  block_id: string
  saved_responses: any
  score: number
  attempts: number
}

export interface CompleteLessonParams {
  studentId: string
  lessonId: string
  unitId: string
  levelId: string
  blocksData: BlockData[]
}

export async function completeLessonAction({
  studentId,
  lessonId,
  unitId,
  levelId,
  blocksData,
}: CompleteLessonParams) {
  try {
    const { data, error } = await supabase.rpc("complete_lesson_and_update_streak", {
      p_student_id: studentId,
      p_lesson_id: lessonId,
      p_unit_id: unitId,
      p_level_id: levelId,
      p_blocks_data: blocksData,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, newStreak: data as number }
  } catch (err) {
    return { success: false, error: "Unexpected Error" }
  }
}