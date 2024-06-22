export default defineAppConfig({
	RAF_DELTA_TIME: 15,
	NEED_JOB: false,
	PROD_URL: "https://adrienzaganelli.com",

	umami: {
		debug: import.meta.dev,
		ignoreLocalhost: false,
		host: "http://localhost:3000/",
		id: "replaceme",
		// sorry
		ignoreDnt: true,
		version: 2,
	},

	rssFeedPath: "/feed.xml",
});
