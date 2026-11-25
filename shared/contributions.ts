/** A merged pull request on someone else's repository */
export interface Contribution {
	/** "owner/name" */
	repo: string;
	owner: string;
	ownerType: "User" | "Organization";
	stars: number;
	title: string;
	url: string;
	number: number;
	mergedAt: string;
}

export interface RepoContributions {
	repo: string;
	owner: string;
	ownerType: Contribution["ownerType"];
	stars: number;
	prs: Contribution[];
}

/** Repos below this star count are left out */
export const MIN_STARS = 100;

export function formatStars(stars: number) {
	return new Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1,
	}).format(stars);
}

export function groupByRepo(prs: Contribution[]): RepoContributions[] {
	const map = new Map<string, RepoContributions>();
	for (const pr of prs) {
		const group = map.get(pr.repo) ?? {
			repo: pr.repo,
			owner: pr.owner,
			ownerType: pr.ownerType,
			stars: pr.stars,
			prs: [],
		};
		group.prs.push(pr);
		map.set(pr.repo, group);
	}
	return [...map.values()].sort((a, b) => b.stars - a.stars);
}

export function ownerAvatar(owner: string, size = 64) {
	return `https://github.com/${owner}.png?size=${size}`;
}

export function githubUrl(path: string) {
	return `https://github.com/${path}`;
}
