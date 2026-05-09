import { githubUsername } from "@/lib/data";

export const dynamic = "force-dynamic";

type GitHubEvent = {
  type: string;
  created_at: string;
  repo: { name: string };
  payload?: {
    commits?: Array<{ message: string }>;
  };
};

function getHeaders() {
  const token = process.env.GITHUB_TOKEN;

  return {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function getLastDays(days: number) {
  const result: string[] = [];
  const base = new Date();

  for (let index = days - 1; index >= 0; index -= 1) {
    const date = new Date(base);
    date.setDate(base.getDate() - index);
    result.push(date.toISOString().slice(0, 10));
  }

  return result;
}

function levelFromCount(count: number) {
  if (count === 0) return 0;
  if (count < 2) return 1;
  if (count < 4) return 2;
  if (count < 7) return 3;
  return 4;
}

function calculateRecentStreak(activeDays: string[]) {
  if (activeDays.length === 0) return 0;

  const sorted = [...activeDays].sort();
  let streak = 1;

  for (let index = sorted.length - 1; index > 0; index -= 1) {
    const current = new Date(sorted[index]);
    const previous = new Date(sorted[index - 1]);
    const diff = Math.round((current.getTime() - previous.getTime()) / 86400000);

    if (diff === 1) {
      streak += 1;
    } else {
      break;
    }
  }

  return streak;
}

export async function GET() {
  const headers = getHeaders();

  const [profileResponse, reposResponse, eventsResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${githubUsername}`, {
      headers,
      next: { revalidate: 1800 },
    }),
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`, {
      headers,
      next: { revalidate: 1800 },
    }),
    fetch(`https://api.github.com/users/${githubUsername}/events/public?per_page=40`, {
      headers,
      next: { revalidate: 900 },
    }),
  ]);

  if (!profileResponse.ok || !reposResponse.ok || !eventsResponse.ok) {
    return Response.json(
      { error: "Unable to load GitHub activity right now." },
      { status: 502 },
    );
  }

  const profile = await profileResponse.json();
  const repos = await reposResponse.json();
  const events = (await eventsResponse.json()) as GitHubEvent[];

  const repoCards = repos
    .filter((repo: { fork: boolean }) => !repo.fork)
    .slice(0, 4)
    .map(
      (repo: {
        name: string;
        html_url: string;
        description: string | null;
        language: string | null;
        stargazers_count: number;
        updated_at: string;
      }) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description ?? "No description added yet.",
        language: repo.language ?? "Code",
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
      }),
    );

  const pushEvents = events.filter((event) => event.type === "PushEvent");

  const recentCommits = pushEvents
    .flatMap((event) =>
      (event.payload?.commits ?? []).map((commit) => ({
        repo: event.repo.name.replace(`${githubUsername}/`, ""),
        message: commit.message,
        date: event.created_at,
      })),
    )
    .slice(0, 6);

  const recentPushes = pushEvents.slice(0, 5).map((event) => ({
    repo: event.repo.name.replace(`${githubUsername}/`, ""),
    date: event.created_at,
    commitCount: event.payload?.commits?.length ?? 0,
  }));

  const activityByDay = new Map<string, number>();
  for (const event of events) {
    const key = event.created_at.slice(0, 10);
    const increment =
      event.type === "PushEvent" ? Math.max(event.payload?.commits?.length ?? 1, 1) : 1;
    activityByDay.set(key, (activityByDay.get(key) ?? 0) + increment);
  }

  const activityGrid = getLastDays(28).map((date) => {
    const count = activityByDay.get(date) ?? 0;
    return {
      date,
      count,
      level: levelFromCount(count),
    };
  });

  const activeDays = activityGrid.filter((day) => day.count > 0).map((day) => day.date);

  return Response.json(
    {
      profile: {
        name: profile.name ?? githubUsername,
        url: profile.html_url,
        avatarUrl: profile.avatar_url,
        publicRepos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
      },
      metrics: {
        recentStreak: calculateRecentStreak(activeDays),
        activeDays: activeDays.length,
        pushesCaptured: pushEvents.length,
      },
      activityGrid,
      recentCommits,
      recentPushes,
      repositories: repoCards,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=900, stale-while-revalidate=3600",
      },
    },
  );
}
