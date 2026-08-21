"use client";

import { useState } from "react";
import { ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExplanationProps {
  explanation: string;
  title?: string;
}

export default function Explanation({ explanation, title = "عرض الشرح والإيضاح" }: ExplanationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full my-3 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-3 backdrop-blur-xs">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-sm font-semibold text-purple-600 dark:text-purple-400"
      >
        <span className="inline-flex items-center gap-2">
          <HelpCircle size={17} />
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronUp size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-foreground/90 dir-rtl text-right border-t border-purple-500/15 mt-2 font-arabic">
              {explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}