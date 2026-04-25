import { Octokit } from "@octokit/rest";
import { graphql } from "@octokit/graphql";
import { cacheLife } from "next/cache";
import type { GitHubProfile, PinnedRepo, AggregatedSkills } from "@/types/github";

const USERNAME = "Ahmed-Sarboudine";

function getOctokit() {
  return new Octokit({ auth: process.env.GITHUB_TOKEN });
}

function getGraphql() {
  return graphql.defaults({
    headers: { authorization: `token ${process.env.GITHUB_TOKEN}` },
  });
}

function inferCategory(topics: string[], lang: string | null): string {
  if (topics.some((t) => ["data", "dataviz", "pandas", "dash", "machine-learning", "data-engineering", "data-science"].includes(t))) return "data";
  if (topics.some((t) => ["algorithm", "algorithms", "competitive-programming", "leetcode"].includes(t))) return "algo";
  if (topics.some((t) => ["web", "frontend", "backend", "fullstack", "nextjs", "react", "nodejs"].includes(t))) return "web";
  if (lang === "Python") return "data";
  if (lang === "C" || lang === "C++") return "algo";
  return "web";
}

export async function getProfile(): Promise<GitHubProfile | null> {
  "use cache";
  cacheLife("hours");
  if (!process.env.GITHUB_TOKEN) return null;
  const { data } = await getOctokit().rest.users.getByUsername({ username: USERNAME });
  return {
    login: data.login,
    name: data.name ?? null,
    bio: data.bio ?? null,
    avatar_url: data.avatar_url,
    public_repos: data.public_repos,
    followers: data.followers,
  };
}

export async function getPinnedRepos(): Promise<PinnedRepo[]> {
  "use cache";
  cacheLife("hours");
  if (!process.env.GITHUB_TOKEN) return [];
  const gql = getGraphql();

  const { user } = await gql<{
    user: {
      pinnedItems: {
        nodes: {
          name: string;
          description: string | null;
          url: string;
          homepageUrl: string | null;
          stargazerCount: number;
          forkCount: number;
          primaryLanguage: { name: string; color: string } | null;
          languages: { nodes: { name: string; color: string }[] };
          repositoryTopics: { nodes: { topic: { name: string } }[] };
          defaultBranchRef: { target: { history: { totalCount: number } } } | null;
        }[];
      };
    };
  }>(`
    query {
      user(login: "${USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              stargazerCount
              forkCount
              primaryLanguage { name color }
              languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
                nodes { name color }
              }
              repositoryTopics(first: 10) {
                nodes { topic { name } }
              }
              defaultBranchRef {
                target {
                  ... on Commit {
                    history { totalCount }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return user.pinnedItems.nodes.map((r) => {
    const topics = r.repositoryTopics.nodes.map((t) => t.topic.name);
    return {
      name: r.name,
      description: r.description,
      url: r.url,
      homepageUrl: r.homepageUrl,
      stargazerCount: r.stargazerCount,
      forkCount: r.forkCount,
      primaryLanguage: r.primaryLanguage,
      languages: r.languages.nodes,
      repositoryTopics: topics,
      commitCount: r.defaultBranchRef?.target?.history?.totalCount ?? 0,
      category: inferCategory(topics, r.primaryLanguage?.name ?? null),
    };
  });
}

export async function getAggregatedSkills(): Promise<AggregatedSkills> {
  "use cache";
  cacheLife("hours");
  if (!process.env.GITHUB_TOKEN) return {};
  const octokit = getOctokit();

  const { data: repos } = await octokit.rest.repos.listForUser({
    username: USERNAME,
    type: "owner",
    per_page: 100,
  });

  const totals: AggregatedSkills = {};

  await Promise.allSettled(
    repos.map(async (repo) => {
      try {
        const { data: langs } = await octokit.rest.repos.listLanguages({
          owner: USERNAME,
          repo: repo.name,
        });
        for (const [lang, bytes] of Object.entries(langs)) {
          totals[lang] = (totals[lang] ?? 0) + (bytes as number);
        }
      } catch {
        // repo without language data — skip
      }
    })
  );

  return totals;
}
