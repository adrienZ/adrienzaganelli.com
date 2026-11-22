// https://mokkapps.de/blog/create-an-rss-feed-with-nuxt-3-and-nuxt-content-v2

import { queryCollection } from "@nuxt/content/nitro";
import RSS from "rss";
import { defineEventHandler } from "nuxt/server";

export default defineEventHandler(async (event) => {
	const feed = new RSS({
		title: "Adrien Zaganelli Blog",
		site_url: "https://adrienzaganelli.com",
		feed_url: `https://adrienzaganelli.com/feed.xml`,
		image_url: "https://adrienzaganelli.com/favicon.ico",
	});

	const blogPosts = await queryCollection(event, "blog")
		.where("draft", "=", false)
		.select("title", "path", "date", "description")
		.order("date", "DESC")
		.all();

	for (const doc of blogPosts) {
		feed.item({
			title: doc.title ?? "-",
			url: `https://adrienzaganelli.com${doc.path}`,
			date: doc.date,
			description: doc.description,
			author: "Adrien Zaganelli",
		});
	}

	const feedString = feed.xml({ indent: true });
	event.res.headers.set("content-type", "text/xml");
	return feedString;
});
