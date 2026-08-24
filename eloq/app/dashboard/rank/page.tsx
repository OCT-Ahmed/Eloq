"use client";

import { Trophy } from "lucide-react";
import DashboardPlaceholder from "@/components/DashboardPlaceholder";

export default function RankPage() {
  return (
    <DashboardPlaceholder
      titleEn="Leaderboard & Rank"
      titleAr="لوحة الصدارة والمراتب"
      icon={Trophy}
    />
  );
}
