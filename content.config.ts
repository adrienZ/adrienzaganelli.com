import { defineCollection, defineContentConfig, z } from "@nuxt/content";

// v3 does not ignore dot files (e.g. hidden drafts like .0.leetchi.md) by default
export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: "page",
			source: { include: "blog/*.md", exclude: ["**/.*"] },
			schema: z.object({
				draft: z.boolean(),
				date: z.date(),
				image: z.object({
					src: z.string(),
				}),
				// `<!--more-->` divider
				excerpt: z
					.object({
						type: z.string(),
						children: z.any(),
					})
					.optional(),
			}),
		}),
		caseStudy: defineCollection({
			type: "page",
			source: { include: "case-study/*.md", exclude: ["**/.*"] },
			schema: z.object({
				draft: z.boolean(),
				summary: z.string(),
				time_period: z.string(),
				role: z.string(),
				url: z.string(),
				cover: z.object({
					type: z.string(),
					src: z.string(),
				}),
			}),
		}),
		teams: defineCollection({
			type: "page",
			source: { include: "teams/*.md", exclude: ["**/.*"] },
		}),
	},
});
