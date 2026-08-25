"use client";

import { useState } from "react";
import {
  Gauge,
  Grid2X2,
  Languages,
  Moon,
  Play,
  Sparkles,
  Sun,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useAudioStore } from "@/store/useAudioStore";
import { LessonAudioPlayer } from "./LessonAudioPlayer";
import LessonAssistantModal from "./LessonAssistantModal";
import LessonVideoModal from "./LessonVideoModal";

const SPEEDS = [0.75, 1, 1.25];

export default function LessonToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(1);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const { isPlaying, audioUrl } = useAudioStore();
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const [showAssistant, setShowAssistant] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const itemClass =
    "grid size-10 shrink-0 place-items-center rounded-full text-foreground/80 transition active:scale-90 hover:bg-muted/60";

  return (
    <>
      <div className="fixed right-4 bottom-16 z-40 flex items-center justify-end">
        {isOpen ? (
          <div className="relative flex items-center gap-1 overflow-visible rounded-full border border-border bg-background/95 p-1.5 shadow-2xl backdrop-blur transition-all duration-300">
            <button
              type="button"
              title="المساعد الذكي"
              onClick={() => setShowAssistant(true)}
              className={cn(itemClass, "text-purple-600 dark:text-purple-400")}
            >
              <Sparkles size={18} />
            </button>

            <div className="relative">
              <button
                type="button"
                title="مشغل الصوت"
                onClick={() => setShowAudioPlayer((prev) => !prev)}
                className={cn(
                  itemClass,
                  (showAudioPlayer || isPlaying) &&
                    "bg-purple-600 text-white hover:bg-purple-700"
                )}
              >
                <Volume2 size={18} />
              </button>

              {/* النافذة المنبثقة */}
              <AnimatePresence>
                {showAudioPlayer && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 6 }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    className="absolute bottom-full mb-3 right-1/2 translate-x-1/2 z-50 min-w-[220px]"
                  >
                    {audioUrl ? (
                      <LessonAudioPlayer />
                    ) : (
                      <div className="rounded-2xl border border-border bg-background/95 p-3 text-center text-xs font-medium text-muted-foreground shadow-xl backdrop-blur">
                        لا يوجد صوت يعزف حالياً
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* فيديو الدرس */}
            <button
              type="button"
              title="كتم الصوت"
              onClick={() => setIsMuted((p) => !p)}
              className={itemClass}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <button
              type="button"
              title="سرعة الصوت"
              onClick={() => setSpeedIndex((prev) => (prev + 1) % SPEEDS.length)}
              className={cn(itemClass, "relative")}
            >
              <Gauge size={18} />
              <span className="absolute -bottom-0.5 text-[8px] font-bold">
                {SPEEDS[speedIndex]}x
              </span>
            </button>
            <button
              type="button"
              title="فيديو الدرس"
              onClick={() => setShowVideo(true)}
              className={itemClass}
            >
              <Play size={18} />
            </button>

            <button
              type="button"
              title="الوضع المظلم"
              onClick={toggleDarkMode}
              className={itemClass}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              title="لغة الشرح"
              onClick={() => setLang((prev) => (prev === "ar" ? "en" : "ar"))}
              className={cn(itemClass, "relative text-purple-600 dark:text-purple-400")}
            >
              <Languages size={18} />
              <span className="absolute -bottom-0.5 text-[8px] font-bold uppercase">
                {lang}
              </span>
            </button>

            <button
              type="button"
              title="إغلاق الأدوات"
              onClick={() => {
                setIsOpen(false);
                setShowAudioPlayer(false);
              }}
              className={cn(itemClass, "text-muted-foreground")}
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            title="فتح شريط الأدوات"
            onClick={() => setIsOpen(true)}
            className="grid size-12 place-items-center rounded-full bg-purple-600 text-white shadow-xl transition active:scale-95 hover:bg-purple-700"
          >
            <Grid2X2 size={20} />
          </button>
        )}
      </div>

      {showAssistant && <LessonAssistantModal onClose={() => setShowAssistant(false)} />}
      {showVideo && <LessonVideoModal onClose={() => setShowVideo(false)} />}
    </>
  );
}
