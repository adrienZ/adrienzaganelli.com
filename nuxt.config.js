import axios from 'axios'

export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    'prismjs/themes/prism-okaidia.css',
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
  modules: ['@nuxtjs/axios'],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    analyze: {
      analyzerMode: 'static'
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },

  styleResources: {
    // scss: ['./assets/scss/main.scss']
  },

  generate: {
    async routes() {
      const projects = await axios.get('http://localhost:8888/zogzog/wp-json/wp/v2/project');
      const posts = await axios.get('http://localhost:8888/zogzog/wp-json/wp/v2/posts');

      const projectsRoutes = projects.data.map( project => ({
        route: `/project/` + project.slug,
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
