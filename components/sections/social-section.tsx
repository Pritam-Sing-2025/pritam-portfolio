"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function SocialSection() {
  return (
    <section className="px-3 py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Socials"
          title="A refined set of links for collaboration, presence, writing, and direct contact."
          description="The interaction design stays simple here: quiet movement, clean icon treatment, and enough visual polish to feel intentional without becoming decorative."
        />

        <div className="grid gap-3">
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              className="glass-panel group flex items-center justify-between gap-4 rounded-[26px] px-5 py-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-3">
                  <item.icon className="h-[18px] w-[18px] text-[var(--foreground)]" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[var(--foreground)]">{item.label}</h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">{item.note}</p>
                </div>
              </div>

              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Open
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
