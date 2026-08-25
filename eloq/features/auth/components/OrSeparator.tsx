export default function OrSeparator() {
  return (
    <div className="my-2 flex w-full items-center gap-3">
      <div className="h-[1px] flex-1 bg-border-subtle/80" />
      <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
        or
      </span>
      <div className="h-[1px] flex-1 bg-border-subtle/80" />
    </div>
  );
}
