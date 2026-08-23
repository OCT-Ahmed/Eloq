"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Construction, LucideIcon } from "lucide-react";
import { playUISound } from "@/lib/uiSounds";

interface PlaceholderProps {
  titleEn: string;
  titleAr: string;
  icon: LucideIcon;
  descriptionEn?: string;
  descriptionAr?: string;
}

export default function DashboardPlaceholder({
  titleEn,
  titleAr,
  icon: Icon,
  descriptionEn = "We're currently building something amazing here! Check back soon.",
  descriptionAr = "نحن نعمل حالياً على بناء شيء رائع هنا! عُد مجدداً في القريب العاجل.",
}: PlaceholderProps) {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-eloq-purple/20 bg-eloq-purple/10 text-eloq-purple shadow-float"
      >
        <Icon size={44} strokeWidth={1.5} />
        <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white shadow-md">
          <Construction size={18} />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mt-6 max-w-md space-y-2"
      >
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          {titleEn} · {titleAr}
        </h1>

        <div className="space-y-1 pt-2 text-sm text-muted">
          <p>{descriptionEn}</p>
          <p dir="rtl" className="font-medium text-foreground/80">
            {descriptionAr}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8"
      >
        <Link
          href="/dashboard"
          onClick={() => playUISound("eloqClick")}
          className="group flex items-center gap-2 rounded-2xl bg-eloq-purple px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-eloq-purple/90"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Dashboard / العودة للرئيسية</span>
        </Link>
      </motion.div>
    </div>
  );
}
