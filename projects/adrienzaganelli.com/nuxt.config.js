import axios from 'axios'

export default {
	srr: true,
	target: 'static',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Adrien Zaganelli Portfolio 💻',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Adrien Zaganelli. Front-end developer made in France 🇫🇷',
			},
			{ httpEquiv: 'x-ua-compatible ', content: 'ie=edge' },
			{ name: 'twitter:dnt', content: 'on' },
			{
				hid: 'og:type',
				name: 'og:type',
				content: 'website',
			},
			{
				hid: 'og:image',
				name: 'og:image',
				content: '/og-image.jpg',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,600&family=IBM+Plex+Sans:wght@400;600;700&display=swap',
				media: 'print',
				onload: 'this.media="all"',
			},
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: ['~/assets/css/tailwind.css', '~/assets/scss/main.scss'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'~/plugins/bus',
		'~/plugins/analytics.client',
		'~/plugins/waypoints.client',
		'~/plugins/accessibility.client',
		'~/plugins/linkzai.client',
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
	tailwindcss: {
		configPath: '~/config/tailwind.config.js',
		cssPath: '~/assets/css/tailwind.css',
		exposeConfig: false,
	},
	/*
	 ** Nuxt.js modules
	 */
	modules: ['@nuxt/content'],
	/*
	 ** Build configuration
	 */
	build: {
		extractCSS: false,
	},

	generate: {
		async routes() {
			const projects = await axios.get(
				'https://adrienzaganelli.com/cms/wp-json/wp/v2/project'
			)

			const projectsRoutes = projects.data.map((project) => ({
				route: `/case-study/` + project.slug,
				payload: project,
			}))

			return [...projectsRoutes]
		},
	},

	image: {
		dir: '.',
		staticFilename: '[publicPath]/images/[name]-[hash][ext]',
		presets: {
			thumbnail: {
				modifiers: {
					format: 'webp',
					width: 720,
					height: 540,
					quality: 75,
				},
			},
		},
	},

	content: {
		liveEdit: false,
		markdown: {
			prism: {
				theme: 'prismjs/themes/prism-okaidia.css',
			},
		},
		rehypePlugins: [],
	},
}
