const cmsPath = __dirname + '/zigzag-cms'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/markdownit', '@nuxtjs/axios'],
  markdownit: {
    injected: true,
    html: true,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['@cms'] = cmsPath
      config.resolve.alias['@api'] = cmsPath + '/api'
    }
  },

  generate: {
    async routes() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync(cmsPath + '/api/articles/').map(file =>
        ({
          route: `/blog/${path.parse(file).name}`,
          payload: require(cmsPath + '/api/articles/' + file),
        })
      ).filter(post => post.payload.published)
    },
  },
}
