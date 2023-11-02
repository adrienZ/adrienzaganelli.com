export default defineNuxtPlugin(() => {
	useHead({
		link: [
			{
				rel: "alternate",
				type: "application/rss+xml",
				href: useAppConfig().rssFeedPath,
				title: "Adrien Zaganelli",
			},
		],
	});
});
