import { FlameIcon } from "@/features/streak"

export default function UserIdentity({
  identity,
}:{
  identity: {
    full_name: string
    streak_count: string
  }
}) {
  
  return (
    <div className="flex flex-col items-start justify-top gap-0">
      <div className="flex items-center gap-4">
      <h1 className="font-semibold text-base -mt-5">
        { identity.full_name } 
      </h1>
      {/* StreakBadge */}
      <div className="relative flex items-center rounded-md gap-0.5 mt-1"> 
        <FlameIcon streak={identity.streak_count} />
        <span className={`absolute z-10 bottom-[-6px] ${identity.streak_count < 10 ? "right-[-2px]" : (identity.streak_count >= 10 && identity.streak_count < 100) ? "right-[-6px]" : "right-[-8px]"} font-bold text-[11px] text-amber-500`}>
          {
            identity ?
            identity.streak_count :
            0
          }
        </span>
      </div>
      </div>
      <span className="inline-block -mt-4 text-[10px] bg-background text-xs text-muted rounded-full px-2.5 py-0.5 font-mono border border-border-subtle">
              Intermediate
      </span>
    </div>
  )
}