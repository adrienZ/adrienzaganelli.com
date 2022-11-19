import Vue from 'vue'
import mitt from "mitt";

Vue.use({
  install: function (Vue) {
    Vue.prototype.$bus = mitt();
  },
});
