export default interface Profile {
  id: string
  email: string
  full_name: string
  avatar_url: string
  role: "student" | "teacher" | "owner"
  phone_number: string | null
  region: string | null
  country: string | null
  city: string | null
  provider: string | null
  created_at: string
  updated_at: string
  // student_
  current_level: string | null
  learning_goal: string | null
  native_language: string
  is_subscribed_ai: boolean
  is_early_supporter: boolean
  supporter_badge_style: any
  supporter_title: string | null
  xp_points: number
  streak_count: number
  highest_streak: number
  last_active_date: string | null
  // current_course
  // activity_status
  // showStatus ?
}