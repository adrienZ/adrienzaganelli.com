export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},

	compatibilityDate: "2024-07-09",

	site: {
		url: "https://adrienzaganelli.com",
	},

	sitemap: {
		// sitemap is prerendered at build time, no runtime handler needed
		zeroRuntime: true,
	},

	future: {
		compatibilityVersion: 5,
	},

	components: {
		dirs: [
			{
				// nuxt needs to scan server components to do the magic
				path: "~/components",
				pattern: "**/*.server.vue",
			},
		],
	},

	postcss: {
		plugins: {
			// added by @nuxtjs/tailwindcss but cannot be loaded (NUXT_B7027); no plain CSS nesting is used
			"tailwindcss/nesting": false,
		},
	},

	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		// must come before @nuxt/content to read its collections
		"@nuxtjs/sitemap",
		"@nuxt/content",
		"@nuxt/fonts",
		"@nuxt/icon", // weird but needed for devtools to work
		"@nuxt/devtools",
		"@nuxt/scripts",
		"nuxt-umami",
		"@nuxt/eslint",
	],

	nitro: {
		prerender: {
			crawlLinks: true,
			// weird bugi need to include root path for the crawler
			routes: ["/", "/feed.xml"],
		},
		// just for netlify
		future: {
			nativeSWR: true,
		},
	},

	css: ["~/assets/css/tailwind.css", "~/assets/scss/main.scss"],

	tailwindcss: {
		configPath: "./app/config/tailwind.config.ts",
		cssPath: "./app/assets/css/tailwind.css",
		exposeConfig: false,
		viewer: false,
	},

	image: {
		// https://image.nuxtjs.org/configuration#screens
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
		},
	},

	content: {
		experimental: {
			sqliteConnector: "native",
		},
		build: {
			markdown: {
				highlight: {
					theme: "monokai",
					langs: [
						// default values https://github.com/nuxt/content/blob/main/src/module.ts#L180
						"js",
						"jsx",
						"json",
						"ts",
						"tsx",
						"vue",
						"css",
						"html",
						"bash",
						"md",
						"mdc",
						"yaml",
						// user values
						"toml",
						// 11 posts fence code as ```javascript, which "js" does not cover
						"javascript",
					],
				},
			},
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
					name: "description",
					content: "Adrien Zaganelli. Front-end developer made in France 🇫🇷",
				},
				{ "http-equiv": "x-ua-compatible ", content: "ie=edge" },
				{ name: "twitter:dnt", content: "on" },
				{
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

	fonts: {
		families: [
			{ name: "Lora", provider: "google", weights: [700], styles: ["normal"] },
			{ name: "Lora", provider: "google", weights: [600], styles: ["italic"] },
			{
				name: "IBM Plex Sans",
				provider: "google",
				weights: [400, 600, 700],
				styles: ["normal"],
			},
		],
	},

	experimental: {
		componentIslands: true,
		prerenderErrorPages: true,
		viewTransition: true,
	},
});
