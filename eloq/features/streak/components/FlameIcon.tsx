"use client";

import { useId } from "react";
import clsx from "clsx";

import styles from "../flameIcon.module.css";

import { getFlameTheme, FLAME_THEMES } from "../themes";
import type { FlameIconProps } from "../types/streak.types";

export default function FlameIcon({
  streak = 1,
  size = 32,
  animate = true,
  className,
}: FlameIconProps) {
  const gradientId = useId();

  const themeName = getFlameTheme(streak);
  const theme = FLAME_THEMES[themeName];

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center shrink-0",
        className
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Glow */}
      <div
        className={styles.glow}
        style={{
          background: `radial-gradient(circle, ${theme.glow[0]}, ${theme.glow[1]})`,
        }}
      />

      {/* Sparks */}

      <span
        className={clsx(styles.spark, styles.spark1)}
        style={{
          background: theme.spark,
        }}
      />

      <span
        className={clsx(styles.spark, styles.spark2)}
        style={{
          background: theme.spark,
        }}
      />

      <span
        className={clsx(styles.spark, styles.spark3)}
        style={{
          background: theme.spark,
        }}
      />

      <svg
        className={animate ? styles.flame : ""}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor={theme.outer[0]} />

            <stop offset="60%" stopColor={theme.outer[1]} />

            <stop offset="100%" stopColor={theme.outer[2]} />
          </linearGradient>
        </defs>

        {/* Outer flame */}

        <path
          fill={`url(#${gradientId})`}
          d="
          M12 22
          C16.5 22 20 17.5 19.5 13
          C19 10.2 16.8 10 17.5 7.5
          C15.2 9.5 13.5 4 12 1.5
          C10.5 4 8.8 9.5 6.5 7.5
          C7.2 10 5 10.2 4.5 13
          C4 17.5 7.5 22 12 22Z
          "
        />

        {/* Inner flame */}

        <path
          className={animate ? styles.core : ""}
          fill={theme.inner}
          d="
          M12 20
          C14.2 20 16 18.2 15.8 14.5
          C15.2 12.8 13.8 12.5 14.2 10.5
          C12.8 11.8 12.5 8.5 12 7.5
          C11.5 8.5 11.2 11.8 9.8 10.5
          C10.2 12.5 8.8 12.8 8.2 14.5
          C8 18.2 9.8 20 12 20Z
          "
        />
      </svg>
    </div>
  );
}