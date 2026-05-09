"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { certificates } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CertificatesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeCertificate = activeIndex !== null ? certificates[activeIndex] : null;

  return (
    <section id="certificates" className="px-3 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certificates"
          title="A cleaner verification section designed for real credentials and future additions."
          description="These cards are ready for your final issuers, certificate images, and public verification links while already fitting the portfolio’s premium visual language."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.button
              key={certificate.title}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveIndex(index)}
              className="glass-panel text-left rounded-[30px] p-6"
            >
              <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-3 text-[var(--accent-secondary)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
                {certificate.issuer}
              </p>
              <h3 className="mt-3 text-xl font-medium text-[var(--foreground)]">{certificate.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                {certificate.summary}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--foreground)]">
                Preview
                <ExternalLink className="h-4 w-4" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 px-3 backdrop-blur-md"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              className="glass-panel-strong relative w-full max-w-2xl rounded-[34px] p-6 md:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-5 top-5 rounded-full border border-[var(--border)] bg-[var(--surface)] p-2"
                aria-label="Close certificate preview"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-secondary)]">
                {activeCertificate.issuer}
              </p>
              <h3 className="mt-4 font-[family:var(--font-display)] text-3xl tracking-[-0.05em] text-[var(--foreground)]">
                {activeCertificate.title}
              </h3>
              <p className="mt-5 text-sm leading-8 text-[var(--muted-foreground)]">
                {activeCertificate.summary}
              </p>

              <div className="mt-8 rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--muted-foreground)]">
                  Preview Surface
                </p>
                <div className="mt-5 rounded-[24px] border border-dashed border-[var(--border-strong)] p-8 text-center">
                  <p className="font-[family:var(--font-display)] text-2xl tracking-[-0.05em] text-[var(--foreground)]">
                    PRITAM
                  </p>
                  <p className="mt-3 text-sm text-[var(--muted-foreground)]">
                    Replace this placeholder with your final certificate image or exported preview.
                  </p>
                </div>
              </div>

              <a
                href={activeCertificate.verify}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)]"
              >
                Verification Link
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
