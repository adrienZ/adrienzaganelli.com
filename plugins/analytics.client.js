import splitbee from '@splitbee/web';

import Vue from 'vue'

const analytics = {}

analytics.install = function (Vue) {
  const prefixUrl = process.env.NODE_ENV ==='production' ? 'https://zigzag-preprod.netlify.app' : ''
  splitbee.init({
    scriptUrl: prefixUrl + "/bee.js",
    apiUrl: prefixUrl + "/_hive",
    token: 'FONCSL17THB4',
  })
  Vue.prototype.$analytics = splitbee
}

Vue.use(analytics)
