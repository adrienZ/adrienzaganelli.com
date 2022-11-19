const backendBase = 'https://adrienzaganelli.com/cms'

export const state = () => ({
	RAF_DELTA_TIME: 15,
	NEED_JOB: false,
	backendBase,
	posts: [],
	projects: [],
})

export const mutations = {
	setPosts(state, list) {
		state.posts = list
	},
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
		const projects = await fetch(apiBase + '/wp/v2/project')
		await commit('setProjects', await projects.json())

		// parse POSTS
		const postsRaw = await (await fetch(apiBase + '/wp/v2/posts?_embed')).json()

		// fix html entities in title
		const posts = postsRaw.map((post) => {
			post.title.rendered = post.title.rendered.replace(
				/&#(\d+);/g,
				function (match, dec) {
					return String.fromCharCode(dec)
				}
			)

			return post
		})
		await commit('setPosts', posts)

		// parse author
		const author = await fetch(apiBase + '/wp/v2/users/1')
		await commit('setAuthor', await author.json())
	},
}

export const getters = {
	getPost: (state) => (slug) => {
		return state.posts.filter((post) => post.slug === slug)[0]
	},
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
