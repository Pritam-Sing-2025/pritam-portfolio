"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(skillCategories[0].id);
  const [activeSkillName, setActiveSkillName] = useState(skillCategories[0].skills[0].name);

  const activeCategory = useMemo(
    () => skillCategories.find((category) => category.id === activeCategoryId) ?? skillCategories[0],
    [activeCategoryId],
  );

  useEffect(() => {
    if (!activeCategory.skills.some((skill) => skill.name === activeSkillName)) {
      setActiveSkillName(activeCategory.skills[0].name);
    }
  }, [activeCategory, activeSkillName]);

  return (
    <section id="skills" className="px-3 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tech Stack Experience"
          title="A cleaner, expandable way to explore the tools and systems behind the work."
          description="Instead of percentages or hover popups, this section uses a calmer interaction model. Click a skill to expand it, reveal context, and let the surrounding layout respond naturally."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-5">
            <div className="glass-panel-strong rounded-[32px] p-6">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-secondary)]">
                Categories
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition",
                      activeCategoryId === category.id
                        ? "bg-[var(--foreground)] text-[var(--background)]"
                        : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted-foreground)]",
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-panel rounded-[32px] p-6"
            >
              <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${activeCategory.accent}`} />
              <h3 className="mt-5 font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                {activeCategory.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                {activeCategory.description}
              </p>
            </motion.div>
          </div>

          <LayoutGroup>
            <div className="grid gap-4">
              {activeCategory.skills.map((skill) => {
                const isActive = skill.name === activeSkillName;

                return (
                  <motion.button
                    layout
                    key={skill.name}
                    type="button"
                    onClick={() => setActiveSkillName(skill.name)}
                    className="glass-panel group text-left rounded-[30px] p-5 transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-3 text-[var(--foreground)]">
                          <skill.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-[var(--foreground)]">{skill.name}</h3>
                          <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                        {isActive ? "Expanded" : "Open"}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-4 border-t border-[var(--border)] pt-5 md:grid-cols-2">
                            <div>
                              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--accent-secondary)]">
                                Technologies Used With It
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {skill.tools.map((tool) => (
                                  <span
                                    key={tool}
                                    className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--accent-secondary)]">
                                Projects
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {skill.projects.map((project) => (
                                  <span
                                    key={project}
                                    className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
                                  >
                                    {project}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
}
