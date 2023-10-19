export default defineAppConfig({
	RAF_DELTA_TIME: 15,
	NEED_JOB: false,
	PROD_URL: "https://adrienzaganelli.com",

	umami: {
		debug: process.env.NODE_ENV === "development",
		ignoreLocalhost: true,
		// sorry
		ignoreDnt: true,
		version: 2,
	},
});
