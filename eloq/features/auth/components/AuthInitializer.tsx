"use client"
import { useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import { useAuthStore } from "../store/auth.store"

export default function AuthInitializer() {
  const {
    setUser,
    setSession,
    setIsLoading,
  } = useAuthStore()
  useEffect(() => {
    const {
      data: { subscription }
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
        setSession(session)
        setIsLoading(false)
      })
      
    return () => subscription.unsubscribe()
  }, [setUser, setSession, setIsLoading])
  return null
}