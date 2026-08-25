"use client";

import { Sparkles } from "lucide-react";
import DashboardPlaceholder from "@/components/DashboardPlaceholder";

export default function AIChatPage() {
  return (
    <DashboardPlaceholder
      titleEn="AI Companion"
      titleAr="المساعد الذكي"
      icon={Sparkles}
      descriptionEn="Your personal AI speaking coach is getting tuned up."
      descriptionAr="مدربك الذكي المخصص للحادثة يتجهز حالياً."
    />
  );
}
