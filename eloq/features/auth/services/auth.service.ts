import { supabase } from "@/lib/supabase/client"
import type { SignupData, LoginData} from "../types/auth.types"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

// ••• REGISTER
export async function register(data: SignupData) {
  return await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        full_name: data.fullName,
      },
    },
  })
}
// ••• LOGIN
export async function login(data: LoginData) {
  return await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  })
}

export async function loginWithGoogle() {
  const redirectTo = `${window.location.origin}/auth/callback`
  return await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
    },
  })
}
// ••• LOGOUT
export async function logout() {
  return await supabase.auth.signOut()
}
// ••• SESSION
export async function getSession() {
  return await supabase.auth.getSession()
}
// ••• USER
export async function getCurrentUser() {
  return await supabase.auth.getUser()
}