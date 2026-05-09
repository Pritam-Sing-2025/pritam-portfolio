"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function TimelineSection() {
  return (
    <section id="journey" className="px-3 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Journey"
          title="A concise timeline of how my technical direction has taken shape."
          description="This section keeps the story simple: foundation, focus, application, and the direction I’m sharpening now."
        />

        <div className="relative mt-14 pl-6 md:pl-10">
          <div className="absolute left-2 top-0 h-full w-px bg-[var(--border-strong)] md:left-4" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[1.05rem] top-6 h-3.5 w-3.5 rounded-full border border-[var(--border-strong)] bg-[var(--foreground)] md:-left-[1.4rem]" />
                <div className="glass-panel rounded-[28px] p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
                      {item.year}
                    </p>
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-medium text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
