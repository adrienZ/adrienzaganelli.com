import splitbee from '@splitbee/web';

import Vue from 'vue'

const analytics = {}

analytics.install = function (Vue) {
  splitbee.init({
    scriptUrl: 'https://zigzag-proxy.netlify.app/bee.js',
    apiUrl: "https://zigzag-proxy.netlify.app/_hive",
  })
  Vue.prototype.$analytics = splitbee
}

Vue.use(analytics)
