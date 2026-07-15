export default function OrSeparator() {
  return (
    <div className="flex items-center justify-between w-full gap-2 text-muted mt-2 mb-2">
      <div className="flex-1 h-[0.3px] bg-muted rounded-full"></div>
      <span>or</span>
      <div className="flex-1 h-[0.3px] bg-muted rounded-full" />
    </div>
  )
}