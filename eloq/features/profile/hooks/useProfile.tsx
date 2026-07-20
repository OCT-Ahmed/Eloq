"use client"
import { useEffect, useState } from "react"
import { useAuth } from "@/features/auth"
import { getProfile } from "../services/profile.service"
import type { Profile } from "../types/profile.types"

export default function useProfile() {
  const { user } = useAuth()
  const [ profile, setProfile ] = useState<any>(null)
  
  useEffect(() => {
    if (!user) {
      setProfile(null)
      return
    }
    
    async function loadProfile() {
      const profileData = await getProfile(user?.id)
      setProfile(profileData)
    }
    
    loadProfile()
  }, [user])
  
  return {
    ...profile,
    email: user?.email,
    data: {...profile},
  }
}