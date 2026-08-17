/*export default function StreakDisplayer() {
  return (
    <div>
      <FlameIcon streak={identity.streak_count} />
      <span className={`absolute bottom-0 ${identity.streak_count < 10 ? "right-1" : (identity.streak_count >= 10 && identity.streak_count < 100) ? "right-[-4px]" : "right-[-8px]"} font-bold text-[11px] text-amber-500`}>
        {
          identity ?
          identity.streak_count :
          0
        }
      </span>
    </div>
  )
}*/