const backendBase = 'https://adrienzaganelli.com/cms'
import axios from 'axios'

export const state = () => ({
	RAF_DELTA_TIME: 15,
	NEED_JOB: false,
	backendBase,
	projects: [],
})

export const mutations = {
	setProjects(state, list) {
		state.projects = list
	},
	setAuthor(state, user) {
		state.author = user
	},
}

export const actions = {
	async nuxtServerInit({ commit }) {
		const apiBase = backendBase + '/wp-json'

		// parse PROJECTS
		const projects = await axios.get(apiBase + '/wp/v2/project')
		await commit('setProjects', await projects.data)

		// parse author
		const author = await axios.get(apiBase + '/wp/v2/users/1')
		await commit('setAuthor', await author.data)
	},
}

export const getters = {
	getProject: (state) => (slug) => {
		return state.projects.filter((project) => project.slug === slug)[0]
	},
	getNextProject: (state) => (project) => {
		const { projects } = state

		const current = projects.map((p) => p.slug).indexOf(project.slug)
		let nextIndex = current + 1

		if (current === projects.length - 1) {
			nextIndex = 0
		}

		return projects[nextIndex]
	},
}
