import { Flame } from "lucide-react"

export default function UserIdentity({
  identity,
}:{
  identity: {
    full_name: string
    streak_count: string
  }
}) {
  
  return (
    <div className="flex flex-col items-start gap-0">
      <div className="flex items-center gap-1">
      <h1 className="font-semibold text-base">
        { identity.full_name } 
      </h1>
      {/* StreakBadge */}
      <div className="flex items-center bg-amber-500/10 px-1.5 py-0.5 rounded-md gap-0.5"> 
        <Flame 
          fill="darkorange" 
          color="orange" 
          size={15} 
          strokeWidth={1} 
        />
        <span className="font-mono font-bold text-[11px] text-amber-500">
          {
            identity ?
            identity.streak_count :
            0
          }
        </span>
      </div>
      </div>
      <span className="inline-block mt-1 text-[10px] bg-background text-muted rounded-full px-2.5 py-0.5 font-mono border border-border-subtle">
              Intermediate
      </span>
    </div>
  )
}