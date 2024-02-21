export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},

	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"@nuxt/content",
		"@nuxtjs/google-fonts",
		"nuxt-clarity-analytics",
		// weird but needed for devtools to work
		"@nuxt/devtools",
	],

	nitro: {
		prerender: {
			routes: ["/feed.xml"],
		},
		// just for netlify
		future: {
			nativeSWR: true,
		},
	},

	css: ["~/assets/css/tailwind.css", "~/assets/scss/main.scss"],

	tailwindcss: {
		configPath: "~/config/tailwind.config.js",
		cssPath: "~/assets/css/tailwind.css",
		exposeConfig: false,
	},

	image: {
		staticFilename: "[publicPath]/images/[name]-[hash][ext]",
		// https://image.nuxtjs.org/configuration#screens
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
		},
	},

	content: {
		highlight: {
			theme: "monokai",
		},
		markdown: {
			anchorLinks: true,
		},
	},

	app: {
		viewTransition: false,

		head: {
			title: "Adrien Zaganelli Portfolio 💻",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description",
					name: "description",
					content: "Adrien Zaganelli. Front-end developer made in France 🇫🇷",
				},
				{ "http-equiv": "x-ua-compatible ", content: "ie=edge" },
				{ name: "twitter:dnt", content: "on" },
				{
					hid: "og:type",
					name: "og:type",
					content: "website",
				},
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				// {
				// 	rel: 'stylesheet',
				// 	href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,600&family=IBM+Plex+Sans:wght@400;600;700&display=swap',
				// 	media: 'print',
				// 	onload: 'this.media="all"',
				// },
			],
		},
	},

	googleFonts: {
		families: {
			Lora: {
				wght: [700],
				ital: [600],
			},
			"IBM+Plex+Sans": {
				wght: [400, 600, 700],
			},
		},
	},

	experimental: {
		payloadExtraction: false,
		componentIslands: true,
		typedPages: true,
		viewTransition: true,
	},

	extends: ["nuxt-umami"],
});
