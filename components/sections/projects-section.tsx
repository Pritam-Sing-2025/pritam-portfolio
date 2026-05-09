"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProjectTitle, setActiveProjectTitle] = useState(projects[0].title);

  const filters = useMemo(
    () => ["All", "Featured", ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Featured") return projects.filter((project) => project.featured);
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="px-3 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Case-study style projects presented with a calmer, more premium product feel."
          description="The project section is designed like a modern product showcase: clean tech badges, understated visuals, and smooth expansion for more detail across AI and product-focused builds."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                activeFilter === filter
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted-foreground)]",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {visibleProjects.map((project) => {
              const isActive = activeProjectTitle === project.title;

              return (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className={cn(
                    "glass-panel overflow-hidden rounded-[34px]",
                    isActive ? "lg:col-span-2" : "",
                  )}
                >
                  <div>
                    <div className={`p-6 bg-gradient-to-br ${project.accent}`}>
                      <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] p-5 backdrop-blur-xl">
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                          <span>{project.category}</span>
                          <span>{project.featured ? "Featured" : "Case Study"}</span>
                        </div>
                        <div className="mt-6 overflow-hidden rounded-[24px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]">
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.45 }}
                            className="h-56 origin-center bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <button
                        type="button"
                        onClick={() => setActiveProjectTitle(project.title)}
                        className="block w-full text-left"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-medium text-[var(--foreground)]">{project.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                              {project.summary}
                            </p>
                          </div>
                          <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                            {isActive ? "Expanded" : "Open"}
                          </span>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden border-t border-[var(--border)] pt-6"
                          >
                            <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                              {project.description}
                            </p>

                            <div className="mt-5 grid gap-3">
                              {project.features.map((feature) => (
                                <div
                                  key={feature}
                                  className="flex items-start gap-3 text-sm text-[var(--muted-foreground)]"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-soft)]" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                              <a
                                href={project.github}
                                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]"
                              >
                                <Github className="h-4 w-4" />
                                {project.comingSoon ? "Preview Slot" : "GitHub"}
                              </a>
                              <a
                                href={project.demo}
                                className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-3 text-sm font-medium text-[var(--background)]"
                              >
                                {project.comingSoon ? "In Development" : "Live Demo"}
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
