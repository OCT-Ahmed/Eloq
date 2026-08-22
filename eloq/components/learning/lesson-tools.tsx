"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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
import { LessonAudioPlayer } from "./LessonAudioPlayer";
import LessonAssistantModal from "./LessonAssistantModal";
import LessonVideoModal from "./LessonVideoModal";

interface LessonToolbarProps {
  audioUrl?: string; // Prop اختياري من سوبابيس/R2
}

export default function LessonToolbar({ audioUrl }: LessonToolbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const [showAssistant, setShowAssistant] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const itemClass =
    "grid size-10 shrink-0 place-items-center rounded-full text-foreground/80 transition active:scale-90 hover:bg-muted/60 disabled:opacity-40 disabled:pointer-events-none";

  return (
    <>
      <div className="fixed right-4 bottom-16 z-40 flex items-center justify-end">
        {isOpen ? (
          <div className="flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-border bg-background/95 p-1.5 shadow-2xl backdrop-blur transition-all duration-300">
            
            {/* زر المساعد الذكي */}
            <button
              type="button"
              title="المساعد الذكي"
              onClick={() => setShowAssistant(true)}
              className={cn(itemClass, "text-purple-600 dark:text-purple-400")}
            >
              <Sparkles size={18} />
            </button>

            {/* حاوية زر الصوت مع المكون المنبثق */}
            <div className="relative">
              <button
                type="button"
                title="الصوت"
                disabled={!audioUrl} // تعطيل سلس إذا لم يُمرر صوت
                onClick={() => setShowAudioPlayer((prev) => !prev)}
                className={cn(itemClass, showAudioPlayer && "bg-muted")}
              >
                {audioUrl ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>

              {/* انبعاث مكون التشغيل بـ framer-motion فوق الزر */}
              <AnimatePresence>
                {showAudioPlayer && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 6 }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    className="absolute bottom-full mb-3 right-0 z-50"
                  >
                    <LessonAudioPlayer src={audioUrl} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* زر فيديو الدرس */}
            <button
              type="button"
              title="فيديو الدرس"
              onClick={() => setShowVideo(true)}
              className={itemClass}
            >
              <Play size={18} />
            </button>

            {/* زر الوضع المظلم */}
            <button
              type="button"
              title="الوضع المظلم"
              onClick={toggleDarkMode}
              className={itemClass}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* زر لغة الشرح */}
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

            {/* زر الإغلاق */}
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

      {/* النوافذ المنبثقة */}
      {showAssistant && <LessonAssistantModal onClose={() => setShowAssistant(false)} />}
      {showVideo && <LessonVideoModal onClose={() => setShowVideo(false)} />}
    </>
  );
}
