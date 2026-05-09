"use client";

import { motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      onClick={toggleTheme}
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow-soft)] backdrop-blur-xl transition"
      aria-label="Toggle color theme"
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--theme-toggle-glow),transparent_72%)] opacity-80" />
      <span className="relative">
        {mounted && theme === "light" ? (
          <MoonStar className="h-5 w-5 transition duration-300 group-hover:rotate-12" />
        ) : (
          <SunMedium className="h-5 w-5 transition duration-300 group-hover:-rotate-12" />
        )}
      </span>
    </motion.button>
  );
}
