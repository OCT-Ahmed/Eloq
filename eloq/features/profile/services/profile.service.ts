import { supabase } from "@/lib/supabase/client"

export async function getProfile(userId: string) {
  const { data: profile, errorPro } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single()

  const { data: student, errorStu } = await supabase
    .from("students")
    .select("*")
    .eq("id", userId)
    .single()

  if (errorPro || errorStu) {
    return {
      success: false,
      errorPro: errorPro ? errorPro : null,
      errorStu: errorStu ? errorStu : null
    }
  }

  const lastActive = student.last_activity_at ? new Date(student.last_activity_at) : null
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  yesterday.setHours(0, 0, 0, 0)

  const isStreakExpired = lastActive ? lastActive < yesterday : true
  const displayStreak = isStreakExpired ? 0 : (student.streak_count || 0)

  return {
    ...profile,
    ...student,
    streak_count: displayStreak
  }
}
