import Vue from 'vue'

const waypointsBinding = {}

waypointsBinding.install = (Vue) => {
	require('waypoints/lib/noframework.waypoints.js')
	require('waypoints/lib/shortcuts/inview.js')
	Vue.prototype.$waypoint = Waypoint
}

Vue.use(waypointsBinding)
