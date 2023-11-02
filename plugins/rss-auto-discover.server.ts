export default defineNuxtPlugin((nuxtApp) => {
	useHead({
		link: [
			{
				rel: "alternate",
				href: useAppConfig().rssFeedPath,
				title: "Adrien Zaganelli",
				type: "application/rss+xml",
			},
		],
	});
});
