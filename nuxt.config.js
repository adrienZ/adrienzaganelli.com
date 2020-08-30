import axios from 'axios'

export default {
  mode: 'universal',
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
      { hid: 'description', name: 'description', content: 'Adrien Zaganelli. Front-end developer made in 🇫🇷' },
      { httpEquiv: 'x-ua-compatible ', content: 'ie=edge' },
      { name: 'twitter:dnt', content: 'on' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,600&family=IBM+Plex+Sans:wght@400;600;700&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss',
  ],

  server: {
    port: 8000, // par défaut : 3000
    host: '0.0.0.0' // par défaut : localhost
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/bus'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: false,
    analyze: process.env.NODE_ENV === 'production' ? {
      analyzerMode: 'static'
    } : false,

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // shader loader
      config.module.rules.push(
        {
          test: /\.(glsl|frag|vert)$/,
          exclude: /(node_modules|bower_components)/,
          use: ['raw-loader', 'glslify-loader'],
        }
      )
    }
  },

  generate: {
    async routes() {
      const projects = await axios.get('https://adrienzaganelli.com/cms/wp-json/wp/v2/project');
      const posts = await axios.get('https://adrienzaganelli.com/cms/wp-json/wp/v2/posts?_embed');

      const projectsRoutes = projects.data.map( project => ({
        route: `/case-study/` + project.slug,
        payload: project,
      }))

      const postsRoutes = posts.data.map( post => ({
        route: `/blog/` + post.slug,
        payload: post,
      }))

      return [...postsRoutes, ...projectsRoutes]
    },
  },
}
