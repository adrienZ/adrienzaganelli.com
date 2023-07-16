import { defineStore } from 'pinia'
const backendBase = 'https://adrienzaganelli.com/cms'

export const useStore = defineStore('global', {
	state: () => ({
		RAF_DELTA_TIME: 15,
		NEED_JOB: false,
		backendBase: backendBase + '/wp-json',
		author: null,
		projects: [],
	}),

	actions: {
		getProject(slug: string) {
			return this.$state.projects.find((project) => project.slug === slug)
		},
		getNextProject(project) {
			const { projects } = this.$state

			const current = projects.map((p) => p.slug).indexOf(project.slug)
			let nextIndex = current + 1

			if (current === projects.length - 1) {
				nextIndex = 0
			}

			return projects[nextIndex]
		},
	},
})
