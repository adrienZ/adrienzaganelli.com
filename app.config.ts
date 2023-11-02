export default defineAppConfig({
	RAF_DELTA_TIME: 15,
	NEED_JOB: false,
	PROD_URL: "https://adrienzaganelli.com",

	umami: {
		debug: process.env.NODE_ENV === "development",
		// we do have a separate umami instance for dev purpose
		ignoreLocalhost: false,
		// sorry
		ignoreDnt: true,
		version: 2,
	},

	rssFeedPath: "/rss.xml",
});
