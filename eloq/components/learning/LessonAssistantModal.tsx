"use client";

import { motion } from "framer-motion";
import { Sparkles, X, Bot, MessageSquarePlus, Zap, CheckCircle2 } from "lucide-react";

interface LessonAssistantModalProps {
  onClose: () => void;
}

export default function LessonAssistantModal({ onClose }: LessonAssistantModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      {/* خلفية للإغلاق عند النقر خارج النافذة */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
      >
        {/* رأس النافذة */}
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl bg-purple-600/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">المساعد الذكي</h3>
              <p className="text-xs text-muted-foreground">رفيقك التفاعلي أثناء الدرس</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid size-8 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        {/* جسم النافذة - المحاكاة */}
        <div className="p-6 space-y-6">
          {/* فقاعة رسالة المساعد */}
          <div className="flex gap-3">
            <div className="grid size-8 shrink-0 place-items-center rounded-full bg-purple-600 text-white shadow-sm">
              <Bot size={16} />
            </div>
            <div className="space-y-2 rounded-2xl rounded-tr-none bg-muted/60 p-4 text-sm leading-relaxed text-foreground/90">
              <p className="font-semibold text-purple-600 dark:text-purple-400">
                أهلاً بك. أنا أتدرب حالياً لسن مفاهيم هذا الدرس لك بالتفصيل.
              </p>
              <p>
                قريباً جداً، يمكنك توجيه أي سؤال لي أثناء القراءة، وسأقوم بشرح العبارات الصعبة، تقديم أمثلة مخصصة لتمارين الدرس، ومساعدتك على الإتقان بأسلوب بصير ودون الخروج عن سياق المحتوى.
              </p>
            </div>
          </div>

          {/* مميزات المساعد المستقبلي */}
          <div className="space-y-3 rounded-2xl border border-purple-500/10 bg-purple-500/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              ماذا سأقدم لك هنا؟
            </span>
            <div className="grid gap-2.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-purple-600 shrink-0" />
                <span>شرح المفاهيم المعقدة باللغة العربية أو الإنجليزية حسب رغبتك.</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-purple-600 shrink-0" />
                <span>توليد تمارين تفاعلية سريعة يمكنك حلها واختبار نفسك داخل المحادثة.</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquarePlus size={15} className="text-purple-600 shrink-0" />
                <span>قراءة النص المكتوب في البلوك الحالي ومساعدتك على نطق الجمل بشكل صحيح.</span>
              </div>
            </div>
          </div>
        </div>

        {/* أسفل النافذة - شريط الإدخال التجريبي المعطل */}
        <div className="border-t border-border bg-muted/20 p-4">
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-2.5 shadow-inner opacity-70 cursor-not-allowed">
            <input
              type="text"
              disabled
              placeholder="المساعد قيد التجهيز وسيصبح متاحاً قريباً..."
              className="w-full bg-transparent text-xs text-muted-foreground placeholder:text-muted-foreground/60 focus:outline-none disabled:cursor-not-allowed"
            />
            <span className="rounded-lg bg-purple-600/20 px-2 py-1 text-[10px] font-bold text-purple-600">
              قريباً
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
