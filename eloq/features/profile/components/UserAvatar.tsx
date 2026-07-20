import Image from "next/image"

export default function UserAvatar({
  avatarUrl
}: {
  url?: string | null
}) {

  if (!avatarUrl) {
    return (
      <div className="w-12 h-12 rounded-md bg-slate-700/50 animate-pulse" />
    )
  }

  return (
    <Image
      className="rounded-md"
      src={avatarUrl}
      alt="User avatar"
      width={49}
      height={49}
    />
  )
}