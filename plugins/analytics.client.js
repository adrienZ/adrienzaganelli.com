import splitbee from '@splitbee/web';

import Vue from 'vue'

const analytics = {}

analytics.install = function (Vue) {
  splitbee.init({
    scriptUrl: '/bee.php'
  })
  Vue.prototype.$analytics = splitbee
}

Vue.use(analytics)
