/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans', 'sans-serif'],
				serif: ['Lora', 'serif'],
			},
			colors: {
				white: '#fafafa',
				pimper: '#536DFE',
				light: '#ECEFF1',
				black: '#263238',
			},
		},
	},
	variants: {
		textColor: ['group-hover', 'hover', 'focus', 'group-focus'],
	},
	plugins: [],
	content: [
		'components/**/*.vue',
		'layouts/**/*.vue',
		'pages/**/*.vue',
		'plugins/**/*.js',
		'nuxt.config.js',
	],
}
