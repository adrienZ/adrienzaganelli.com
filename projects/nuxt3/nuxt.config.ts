// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image'],

	css: ['~/assets/css/tailwind.css', '~/assets/scss/main.scss'],

	tailwindcss: {
		configPath: '~/config/tailwind.config.js',
		cssPath: '~/assets/css/tailwind.css',
		exposeConfig: false,
	},

	image: {
		domains: ['adrienzaganelli.com'],
		dir: '.',
		staticFilename: '[publicPath]/images/[name]-[hash][ext]',
	},

	experimental: {
		// payloadExtraction: false,
	},
})
