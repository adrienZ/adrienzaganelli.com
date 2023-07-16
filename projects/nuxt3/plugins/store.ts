import { useStore } from '@/store/globalStore'

export default defineNuxtPlugin(async (app) => {
	const store = useStore()

	const apiBase = store.backendBase

	// parse PROJECTS
	const { data: projects } = await useAsyncData('cache_projects', () =>
		$fetch(apiBase + '/wp/v2/project')
	)

	store.projects = await projects.value

	// parse author
	const { data: author } = await useAsyncData('cache_author', () =>
		$fetch(apiBase + '/wp/v2/users/1')
	)
	store.author = await author.value

	return {
		provide: {
			store,
		},
	}
})
