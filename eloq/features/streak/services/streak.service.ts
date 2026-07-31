import supabase from "@/lib/supabase"
import { toUtcIso, formatDate } from "@/utils/date/datetimeHelpers"

export async function lastActiveDate(studentId: string) {
  const studentLastActiveDate = await supabase.from("students")
    .select("last_active_date")
    .eq("id", studentId)
    .single();
    
    
}