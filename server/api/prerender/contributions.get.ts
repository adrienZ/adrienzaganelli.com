import { defineEventHandler, useRuntimeConfig } from "nuxt/server";
import { MIN_STARS, type Contribution } from "#shared/contributions";

const GITHUB_USER = "adrienZ";

interface SearchItem {
	title: string;
	html_url: string;
	number: number;
	repository_url: string;
	pull_request: { merged_at: string };
}

interface Repo {
	full_name: string;
	stargazers_count: number;
	owner: { login: string; type: "User" | "Organization" };
}

// the page is prerendered: GitHub is hit once per build (and once per dev server)
let cache: Promise<Contribution[]> | undefined;

export default defineEventHandler(() => {
	cache ??= fetchContributions().catch((error) => {
		cache = undefined;
		throw error;
	});
	return cache;
});

async function fetchContributions(): Promise<Contribution[]> {
	const { githubToken } = useRuntimeConfig();
	const github = $fetch.create({
		baseURL: "https://api.github.com",
		headers: {
			Accept: "application/vnd.github+json",
			...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}),
		},
	});

	const { items } = await github<{ items: SearchItem[] }>("/search/issues", {
		query: {
			q: `type:pr is:merged author:${GITHUB_USER} -user:${GITHUB_USER}`,
			sort: "created",
			order: "desc",
			per_page: 100,
		},
	});

	const repoNames = [
		...new Set(items.map((pr) => pr.repository_url.split("/repos/")[1]!)),
	];
	const repos = new Map(
		await Promise.all(
			repoNames.map(
				async (name) => [name, await github<Repo>(`/repos/${name}`)] as const,
			),
		),
	);

	return items.flatMap((pr): Contribution[] => {
		const repo = repos.get(pr.repository_url.split("/repos/")[1]!);
		if (!repo || repo.stargazers_count < MIN_STARS) return [];
		return [
			{
				repo: repo.full_name,
				owner: repo.owner.login,
				ownerType: repo.owner.type,
				stars: repo.stargazers_count,
				title: pr.title,
				url: pr.html_url,
				number: pr.number,
				mergedAt: pr.pull_request.merged_at,
			},
		];
	});
}
