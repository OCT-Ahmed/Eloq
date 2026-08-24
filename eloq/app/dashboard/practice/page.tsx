"use client";

import { Dumbbell } from "lucide-react";
import DashboardPlaceholder from "@/components/DashboardPlaceholder";

export default function PracticePage() {
  return (
    <DashboardPlaceholder
      titleEn="Practice Arena"
      titleAr="ساحة التمارين"
      icon={Dumbbell}
      descriptionEn="Warm up those English muscles! Daily exercises and speed drills coming soon."
      descriptionAr="جهّز عضلات اللغة الإنجليزية! التمارين اليومية وتحديات السرعة قادمة قريباً."
    />
  );
}
