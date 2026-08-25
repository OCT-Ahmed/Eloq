"use client";

import { Play, Pause, RotateCcw, Gauge, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAudioStore } from "@/store/useAudioStore";

const SPEEDS = [0.75, 1, 1.25, 1.5];

export function LessonAudioPlayer({ className }: { className?: string }) {
  const {
    audioUrl,
    isPlaying,
    isMuted,
    speed,
    togglePlay,
    stopAndReset,
    setSpeed,
    toggleMute,
  } = useAudioStore();

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-2xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur whitespace-nowrap",
        className
      )}
    >
      {/* زر التشغيل والإيقاف */}
      <button
        type="button"
        onClick={togglePlay}
        disabled={!audioUrl}
        className="flex items-center gap-1.5 rounded-xl bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white transition active:scale-95 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        <span>{isPlaying ? "إيقاف" : "تشغيل"}</span>
      </button>

      {/* زر إعادة التشغيل من البداية */}
      <button
        type="button"
        title="إعادة الصوت"
        onClick={stopAndReset}
        disabled={!audioUrl}
        className="grid size-7 place-items-center rounded-lg bg-muted/80 text-foreground transition hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RotateCcw size={13} />
      </button>

      {/* زر الكتم */}
      <button
        type="button"
        title={isMuted ? "إلغاء الكتم" : "كتم"}
        onClick={toggleMute}
        disabled={!audioUrl}
        className="grid size-7 place-items-center rounded-lg bg-muted/80 text-foreground transition hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
      </button>

      {/* زر سرعة الصوت */}
      <button
        type="button"
        title="سرعة الصوت"
        onClick={() => {
          const currentIndex = SPEEDS.indexOf(speed);
          const nextSpeed = SPEEDS[(currentIndex + 1) % SPEEDS.length];
          setSpeed(nextSpeed);
        }}
        disabled={!audioUrl}
        className="flex items-center gap-0.5 rounded-lg bg-muted/80 px-2 py-1 text-xs font-bold transition hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Gauge size={12} className="mr-0.5" />
        {speed}x
      </button>
    </div>
  );
}
