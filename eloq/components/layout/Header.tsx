"use client"
import { useAuth } from "@/features/auth" 
import Link from "next/link"
import Image from "next/image"
export default function Header() {
  const { user, isLoading } =  useAuth()
  return (
    <div className="flex gap-8 p-4">
        <Link href="/">Home</Link>
        <Link href="/test">Test</Link>
        {isLoading && (
        <div className="w-25 h-10 bg-muted animate-pulse"></div>
        )}
        {(user && !isLoading) ? <div className="flex gap-3">
          {user?.user_metadata?.avatar_url && <div className="border-2 border-green-500 rounded-lg"><Image
              src={user.user_metadata.avatar_url}
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-md object-cover"
              priority
            /></div>}
        <p>
          {user?.user_metadata.full_name}
        </p></div> : ""}
        {user ? "" : <Link href="/signup">Sign Up</Link>}
        {user ? "" : <Link href="/login">Login</Link>}
      </div>
  )
}