"use client";

import { motion } from "framer-motion";
import { aboutHighlights, featuredSignals } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="px-3 py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="About"
          title="A developer who values clarity, usefulness, and a strong visual standard."
          description="My path into tech started with curiosity and became a real interest in building products that solve practical problems. I enjoy the full process: thinking through the logic, designing the structure, and making the final experience feel deliberate and well-made."
        />

        <div className="grid gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel-strong rounded-[32px] p-7"
          >
            <p className="text-base leading-8 text-[var(--muted-foreground)]">
              I&apos;m a <span className="text-[var(--foreground)]">Computer Science graduate</span> and{" "}
              <span className="text-[var(--foreground)]">MERN stack developer</span> who enjoys turning
              rough ideas into structured, polished digital experiences. I&apos;m especially interested in
              interfaces that feel modern and calm, products that solve something real, and workflows
              that make building software more thoughtful instead of more noisy.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-panel rounded-[28px] p-5"
              >
                <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-3 text-[var(--accent-secondary)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredSignals.map((signal, index) => (
              <motion.div
                key={signal}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-7 text-[var(--muted-foreground)]"
              >
                {signal}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
