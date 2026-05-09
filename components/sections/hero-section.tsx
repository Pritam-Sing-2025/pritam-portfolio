"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSignals, socialLinks } from "@/lib/data";

const titles = [
  "MERN Stack Developer",
  "Computer Science Graduate",
  "Modern Product Builder",
  "Focused on Clean, Useful Digital Experiences",
];

function useTypingRotator(items: string[]) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[index];
    const timeout = window.setTimeout(
      () => {
        if (!deleting && display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1));
          return;
        }

        if (!deleting && display.length === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && display.length > 0) {
          setDisplay(current.slice(0, display.length - 1));
          return;
        }

        setDeleting(false);
        setIndex((value) => (value + 1) % items.length);
      },
      deleting ? 32 : display.length === current.length ? 1600 : 80,
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, display, index, items]);

  return display;
}

export function HeroSection() {
  const typed = useTypingRotator(titles);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 160, damping: 18, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 160, damping: 18, mass: 0.4 });
  const rotateX = useTransform(springY, [-40, 40], [4, -4]);
  const rotateY = useTransform(springX, [-40, 40], [-4, 4]);

  return (
    <section id="home" className="px-3 pb-24 pt-10">
      <div className="section-shell">
        <div className="grid min-h-[88vh] items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[11px] uppercase tracking-[0.34em] text-[var(--accent-secondary)]"
            >
              Premium portfolio for a MERN stack developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.08 }}
              className="hero-name mt-5 font-[family:var(--font-display)] text-[4.2rem] font-semibold leading-[0.9] text-[var(--foreground)] sm:text-[5.3rem] lg:text-[7.8rem]"
            >
              <span className="text-gradient">PRITAM</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.16 }}
              className="mt-6 flex min-h-9 items-center text-base text-[var(--muted-foreground)] md:text-2xl"
            >
              <span className="font-medium text-[var(--foreground)]">{typed}</span>
              <span className="ml-2 inline-block h-6 w-px bg-[var(--border-strong)]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.24 }}
              className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] md:text-lg"
            >
              I build modern web experiences that feel polished, thoughtful, and useful. My work
              blends product-minded engineering, clean interfaces, and practical problem solving
              across the MERN stack.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.32 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/api/resume"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-medium text-[var(--background)] transition hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5"
              >
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="glass-panel inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5"
                >
                  <item.icon className="h-[18px] w-[18px] text-[var(--foreground)]" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.14 }}
            className="relative"
            style={{ rotateX, rotateY, transformPerspective: 1400 }}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = event.clientX - rect.left - rect.width / 2;
              const y = event.clientY - rect.top - rect.height / 2;
              pointerX.set(x / 12);
              pointerY.set(y / 12);
            }}
            onMouseLeave={() => {
              pointerX.set(0);
              pointerY.set(0);
            }}
          >
            <div className="glass-panel-strong rounded-[36px] p-5 md:p-7">
              <div className="grid gap-5">
                <div className="rounded-[30px] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-secondary)]">
                    Profile Snapshot
                  </p>
                  <h2 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                    Clean code. Refined interfaces. Useful products.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted-foreground)]">
                    I’m interested in building software that feels calm, capable, and well-made,
                    whether that means a commerce flow, a polished dashboard, or a thoughtfully
                    branded product experience.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="glass-panel rounded-[28px] p-5">
                    <div className="soft-grid rounded-[24px] border border-[var(--border)] p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                          Featured Build
                        </span>
                        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] text-[var(--muted-foreground)]">
                          Sign Language Detection
                        </span>
                      </div>
                      <div className="mt-6 h-48 rounded-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {heroSignals.map((signal) => (
                      <div
                        key={signal.label}
                        className="glass-panel rounded-[24px] p-4"
                      >
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                          {signal.label}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[var(--foreground)]">{signal.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
