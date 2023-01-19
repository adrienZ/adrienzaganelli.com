import { useStore } from '@/store/globalStore'

export default defineNuxtPlugin(async (app) => {
	const store = useStore()

	const apiBase = store.backendBase

	// parse PROJECTS
	const { data: projects } = await useAsyncData(
		'cache_projects',
		() => process.server && $fetch(apiBase + '/wp/v2/project')
	)
	store.projects = await projects.value

	return {
		provide: {
			store,
		},
	}
})
