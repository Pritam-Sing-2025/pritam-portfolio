"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[var(--accent-secondary)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--muted-foreground)] md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
