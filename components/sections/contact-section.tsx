"use client";

import { motion } from "framer-motion";
import { CheckCheck, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

const contactInfo = [
  { label: "Email", value: "replace-with-your-email@example.com", icon: Mail },
  { label: "Phone", value: "+91 00000 00000", icon: Phone },
  { label: "Location", value: "India · Remote Friendly", icon: MapPin },
];

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied(null);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:replace-with-your-email@example.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
    setStatus("success");
  };

  return (
    <section id="contact" className="px-3 pb-24 pt-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="If the work feels aligned, I’d be glad to talk."
            description="Whether it’s an internship, freelance build, or team opportunity, I’m interested in roles where careful engineering and thoughtful UI both matter."
          />

          <div className="mt-10 space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-panel flex items-center justify-between gap-4 rounded-[26px] p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-3 text-[var(--foreground)]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-[var(--foreground)]">{item.value}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(item.label, item.value)}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--foreground)]"
                >
                  {copied === item.label ? (
                    <>
                      <CheckCheck className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          onSubmit={handleSubmit}
          className="glass-panel-strong rounded-[32px] p-6 md:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
                Message
              </p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Share a role, project, or collaboration idea.
              </p>
            </div>
            <div className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Available
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
              Name
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--border-strong)]"
              />
            </label>
            <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--border-strong)]"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm text-[var(--muted-foreground)]">
            Project Details
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me a little about the role, product, or collaboration."
              className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--border-strong)]"
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 font-medium text-[var(--background)]"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>

            <div className="text-sm">
              {status === "idle" && <span className="text-[var(--muted-foreground)]">Replies typically within 24 hours.</span>}
              {status === "success" && <span className="text-[var(--foreground)]">Your mail client should open next.</span>}
              {status === "error" && <span className="text-[var(--muted-foreground)]">Please fill in your name, email, and project details.</span>}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
