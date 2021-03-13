import splitbee from '@splitbee/web';

import Vue from 'vue'

const analytics = {}

analytics.install = function (Vue) {
  splitbee.init({
    scriptUrl: "/bee.js",
    apiUrl: "https://hive.adrienzaganelli.com",
    token: 'FONCSL17THB4',
  })
  Vue.prototype.$analytics = splitbee
}

Vue.use(analytics)
