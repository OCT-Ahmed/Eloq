"use client"
import { supabase } from "@/lib/supabase/client"
import { useAuthStore } from "../store/auth.store"
import { logout as logoutAction } from "../actions/logout"

export default function useAuth() {
  const { 
    user,
    session,
    isLoading,
  } = useAuthStore();
  
  async function logout() {
    await logoutAction()
  }
  
  return {
    user,
    session,
    isLoading,
    logout,
  }
}