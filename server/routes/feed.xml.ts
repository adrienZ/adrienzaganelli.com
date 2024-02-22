// https://mokkapps.de/blog/create-an-rss-feed-with-nuxt-3-and-nuxt-content-v2

import { serverQueryContent, parseContent } from "#content/server";
import RSS from "rss";

export default defineEventHandler(async (event) => {
	const feed = new RSS({
		title: "Adrien Zaganelli Blog",
		site_url: "https://adrienzaganelli.com",
		feed_url: `https://adrienzaganelli.com/feed.xml`,
		image_url: "https://adrienzaganelli.com/favicon.ico",
	});

	const docs = await serverQueryContent(event)
		.where({ draft: false })
		.only([
			"title",
			"_path",
			"date",
			"media",
			"description",
			"excerpt",
			"thumbnail_height",
		])
		.sort({ date: -1 })
		.find();

	const blogPosts = docs.filter((doc) => doc?._path?.includes("/blog"));

	for (const doc of blogPosts) {
		feed.item({
			title: doc.title ?? "-",
			url: `https://adrienzaganelli.com${doc._path}`,
			date: doc.date,
			description: doc.description,
			author: "Adrien Zaganelli",
		});
	}

	const feedString = feed.xml({ indent: true });
	event.res.setHeader("content-type", "text/xml");
	event.res.end(feedString);
});
