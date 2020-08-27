/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Gilroy', 'sans-serif'],
        sans: ['Oxygen', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif']
      },
      colors: {
        white: "#fafafa",
        pimper: "#D81B60",
        light: "#EFEBE9",
        black: "#3E2723",
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
