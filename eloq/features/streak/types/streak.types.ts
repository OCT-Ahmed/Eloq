export type FlameTheme = "spark" | "plasma" | "cosmic";

export interface FlameThemeColors {
  outer: [string, string, string];
  inner: string;
  glow: [string, string];
  spark: string;
}

export interface FlameIconProps {
  streak?: number;
  size?: number;
  animate?: boolean;
  className?: string;
}