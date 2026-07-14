import { supabase } from "@/lib/supabase/client"
import type { SignupData, LoginData} from "../types/auth.types"

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

export async function login(data: LoginData) {
  return await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  })
}

export async function logout() {
  return await supabase.auth.signOut()
}

export async function getSession() {
  return await supabase.auth.getSession()
}

export async function getCurrentUser() {
  return await supabase.auth.getUser()
}