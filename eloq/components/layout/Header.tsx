"use client"
import { useAuth } from "@/features/auth" 
import { useProfile } from "@/features/profile"
import { UserAvatar } from "@/features/profile"
import Link from "next/link"
import Image from "next/image"
export default function Header() {
  const { user, isLoading } =  useAuth()
  const { avatar_url, full_name, profileB, id } = useProfile()
  return (
    <div className="flex gap-8 p-4">
        <Link href="/">Home</Link>
        <Link href="/test">Test</Link>
        {isLoading && (
        <div className="w-25 h-10 bg-muted"></div>
        )}
        {avatar_url && <UserAvatar avatarUrl={avatar_url} />}
        <p className="text-white">
          {full_name}
        </p>
        {user ? "" : <Link href="/signup">Sign Up</Link>}
        {user ? "" : <Link href="/login">Login</Link>}
      </div>
  )
}