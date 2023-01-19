import 'waypoints/lib/noframework.waypoints'
import 'waypoints/lib/shortcuts/inview'

export default defineNuxtPlugin(() => {
	return {
		provide: {
			waypoint: Waypoint,
		},
	}
})
