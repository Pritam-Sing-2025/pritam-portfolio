"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitCommitHorizontal, LoaderCircle, RefreshCcw, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { githubProfileUrl, githubUsername } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

type GitHubPayload = {
  profile: {
    name: string;
    url: string;
    avatarUrl: string;
    publicRepos: number;
    followers: number;
    following: number;
  };
  metrics: {
    recentStreak: number;
    activeDays: number;
    pushesCaptured: number;
  };
  activityGrid: Array<{
    date: string;
    count: number;
    level: number;
  }>;
  recentCommits: Array<{
    repo: string;
    message: string;
    date: string;
  }>;
  recentPushes: Array<{
    repo: string;
    date: string;
    commitCount: number;
  }>;
  repositories: Array<{
    name: string;
    url: string;
    description: string;
    language: string;
    stars: number;
    updatedAt: string;
  }>;
};

const heatmapLevels = [
  "bg-[var(--surface-soft)]",
  "bg-neutral-500/30",
  "bg-neutral-400/45",
  "bg-neutral-300/60",
  "bg-[var(--foreground)]",
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

export function GitHubPulseSection() {
  const [data, setData] = useState<GitHubPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/github", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Unable to load GitHub activity.");
        }

        const payload = (await response.json()) as GitHubPayload;
        if (active) {
          setData(payload);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : "Unable to load activity.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  const metricCards = useMemo(() => {
    if (!data) return [];

    return [
      { label: "Public Repos", value: String(data.profile.publicRepos) },
      { label: "Recent Streak", value: `${data.metrics.recentStreak} days` },
      { label: "Active Days", value: `${data.metrics.activeDays} / 28` },
      { label: "Followers", value: String(data.profile.followers) },
    ];
  }, [data]);

  return (
    <section className="px-3 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="GitHub Pulse"
          title="A custom development feed built from live GitHub activity instead of a generic widget."
          description="This section uses GitHub data to show repository updates, recent commit activity, a custom recent-activity grid, and a cleaner picture of how the development journey is moving."
        />

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-5">
            <div className="glass-panel-strong rounded-[32px] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-secondary)]">
                    Development Feed
                  </p>
                  <h3 className="mt-4 font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                    {data?.profile.name ?? githubUsername}
                  </h3>
                </div>
                <a
                  href={githubProfileUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  Open GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {loading && (
                <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Loading recent development activity...
                </div>
              )}

              {error && (
                <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--muted-foreground)]">
                  {error}
                </div>
              )}

              {data && (
                <>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {metricCards.map((metric) => (
                      <div key={metric.label} className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-4">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                          {metric.label}
                        </p>
                        <p className="mt-3 text-xl font-medium text-[var(--foreground)]">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--accent-secondary)]">
                          Recent Activity Grid
                        </p>
                        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                          A custom 28-day activity view built from public GitHub events.
                        </p>
                      </div>
                      <RefreshCcw className="h-4 w-4 text-[var(--muted-foreground)]" />
                    </div>

                    <div className="mt-5 grid grid-cols-7 gap-2">
                      {data.activityGrid.map((cell) => (
                        <div key={cell.date} className="space-y-2">
                          <div
                            className={`aspect-square rounded-[10px] border border-[var(--border)] ${heatmapLevels[cell.level]}`}
                            title={`${cell.date}: ${cell.count} events`}
                          />
                          <p className="text-[10px] text-[var(--muted-foreground)]">
                            {formatDate(cell.date)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="space-y-5">
            {data && (
              <>
                <div className="glass-panel rounded-[32px] p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
                    Recent Repositories
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {data.repositories.map((repo, index) => (
                      <motion.a
                        key={repo.name}
                        href={repo.url}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                        whileHover={{ y: -3 }}
                        className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="text-base font-medium text-[var(--foreground)]">{repo.name}</h4>
                          <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                            <Star className="h-3.5 w-3.5" />
                            {repo.stars}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                          {repo.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                          <span>{repo.language}</span>
                          <span>Updated {formatDate(repo.updatedAt)}</span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
                  <div className="glass-panel rounded-[28px] p-6">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
                      Recent Commits
                    </p>
                    <div className="mt-5 space-y-4">
                      {data.recentCommits.slice(0, 5).map((commit) => (
                        <div
                          key={`${commit.repo}-${commit.message}-${commit.date}`}
                          className="rounded-[22px] border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="inline-flex items-center gap-2 text-sm text-[var(--foreground)]">
                              <GitCommitHorizontal className="h-4 w-4" />
                              {commit.repo}
                            </span>
                            <span className="text-xs text-[var(--muted-foreground)]">
                              {formatDate(commit.date)}
                            </span>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                            {commit.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel rounded-[28px] p-6">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
                      Recent Pushes
                    </p>
                    <div className="mt-5 space-y-4">
                      {data.recentPushes.map((push) => (
                        <div
                          key={`${push.repo}-${push.date}`}
                          className="rounded-[22px] border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-sm font-medium text-[var(--foreground)]">
                              {push.repo}
                            </span>
                            <span className="text-xs text-[var(--muted-foreground)]">
                              {formatDate(push.date)}
                            </span>
                          </div>
                          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
                            {push.commitCount} commits captured in this push event.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
