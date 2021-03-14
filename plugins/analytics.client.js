import splitbee from '@splitbee/web';

import Vue from 'vue'

const analytics = {}

analytics.install = function (Vue) {
  splitbee.init({
    scriptUrl: '/bee.php',
    apiUrl: "https://zigzag-preprod.netlify.app/_hive",
  })
  Vue.prototype.$analytics = splitbee
}

Vue.use(analytics)
