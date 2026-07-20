"use client"
import { useState } from "react"
import useProfile from "../hooks/useProfile"
import UserAvatar from "./UserAvatar"
import UserIdentity from "./UserIdentity"
import UserIdentitySkeleton from "./UserIdentitySkeleton"

interface userCardProps {
  avatarUrl: string
  identity: any
  mini?: boolean
}

export default function UserCard(/*{
  avatarUrl,
  identity,
  mini = false
}: userCardProps*/
) {
  const {
    avatar_url,
    full_name,
    streak_count,
  } = useProfile()
  return (
  <div className="flex items-start justify-start gap-2 w-full pb-6 border-b border-muted/50">
    <UserAvatar avatarUrl={avatar_url} />
    
    {(
      !full_name && streak_count == undefined 
      ) ? ( 
      <UserIdentitySkeleton />
      ) : (
      <UserIdentity identity={{
        full_name,
        streak_count,
      }} /> 
    )}
  </div>
  )
}