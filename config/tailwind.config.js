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
				sans: ["IBM Plex Sans", "sans-serif"],
				serif: ["Lora", "serif"],
			},
			colors: {
				white: "#fafafa",
				surface: "var(--surface-color)",
				pimper: "var(--primary-color)",
				light: "var(--background-color)",
				black: "var(--text-and-border-color)",
			},
			// back to tailwind V1
			// https://v1.tailwindcss.com/docs/font-size#app
			fontSize: {
				xs: ".75rem",
				sm: ".875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "1.875rem",
				"4xl": "2.25rem",
				"5xl": "3rem",
				"6xl": "4rem",
			},
		},
	},
	variants: {
		textColor: ["group-hover", "hover", "focus", "group-focus"],
	},
	plugins: [],
	content: [
		"components/**/*.vue",
		"layouts/**/*.vue",
		"pages/**/*.vue",
		"plugins/**/*.js",
		"nuxt.config.js",
	],
};
