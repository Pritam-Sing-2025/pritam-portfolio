"use client";

import { motion } from "framer-motion";
import { navigationItems } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-[90] px-3 pt-3"
    >
      <div className="section-shell">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 md:px-5">
          <a
            href="#home"
            className="font-[family:var(--font-display)] text-base font-semibold tracking-[-0.05em] text-[var(--foreground)] md:text-lg"
          >
            PRITAM
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 md:inline-flex"
            >
              Let&apos;s Connect
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
