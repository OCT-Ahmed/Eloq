import { FlameTheme, FlameThemeColors } from "./types/streak.types";

export const FLAME_THEMES: Record<FlameTheme, FlameThemeColors> = {
  // المستوى 1 (0 - 6 أيام): جمرة دافئة وخافتة بتوهج بسيط
  ember: {
    outer: ["#8B1E00", "#B84A00", "#D97700"],
    inner: "#FFC857",
    glow: ["#501000", "#8B1E00"],
    spark: "#D97700",
  },

  // المستوى 2 (7 - 30 يوماً): الشعلة البرتقالية/الذهبية الكلاسيكية
  spark: {
    outer: ["#FF2A00", "#FF7A00", "#FFAE00"],
    inner: "#FFF500",
    glow: ["#FF4D00", "#FF9E00"],
    spark: "#FFE600",
  },

  // المستوى 3 (31 - 90 يوماً): شعلة البلازما البنفسجية الكهربائية
  plasma: {
    outer: ["#4A00E0", "#8E2DE2", "#F000FF"],
    inner: "#F5E6FF",
    glow: ["#8E2DE2", "#F000FF"],
    spark: "#E040FB",
  },

  // المستوى 4 (91 - 364 يوماً): الشعلة الأزرق السماوي النيون (هيبة الفئة المتقدمة)
  hyper: {
    outer: ["#0052D4", "#00C6FF", "#0072FF"],
    inner: "#E0F7FA",
    glow: ["#00C6FF", "#0072FF"],
    spark: "#00F2FE",
  },

  // المستوى 5 (365+ يوم): الشرارة الكونية المتقاطعة (أعلى مستوى ملكي)
  cosmic: {
    outer: ["#FF5500", "#FFD700", "#00FFCC"],
    inner: "#FFFFFF",
    glow: ["#00FFCC", "#FFD700", "#FF5500"],
    spark: "#FFFFFF",
  },
};

export const FLAME_LEVELS = [
  {
    id: 5,
    min: 365,
    theme: "cosmic" as const,
    label: "الشرارة الكونية",
  },
  {
    id: 4,
    min: 91,
    theme: "hyper" as const,
    label: "الشعلة الفائقة",
  },
  {
    id: 3,
    min: 31,
    theme: "plasma" as const,
    label: "شعلة البلازما",
  },
  {
    id: 2,
    min: 7,
    theme: "spark" as const,
    label: "الشعلة الذهبية",
  },
  {
    id: 1,
    min: 0,
    theme: "ember" as const,
    label: "جمرة البداية",
  },
] as const;


export function getFlameTheme(streak?: number): FlameTheme {
  if (
    streak === undefined ||
    Number.isNaN(streak) ||
    streak < 0
  ) {
    return "spark";
  }

  return (
    FLAME_LEVELS.find(level => streak >= level.min)?.theme ?? "spark"
  )
  
}