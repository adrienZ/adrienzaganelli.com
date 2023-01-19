import axios from 'axios'

export default defineNuxtConfig({
	/*
	 ** Global CSS
	 */
	css: ['~/assets/css/tailwind.css', '~/assets/scss/main.scss'],

	app: {
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
	},

	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-full-static'],
	tailwindcss: {
		configPath: '~/config/tailwind.config.js',
		cssPath: '~/assets/css/tailwind.css',
		exposeConfig: false,
	},

	experimental: {
		payloadExtraction: false,
	},
})
