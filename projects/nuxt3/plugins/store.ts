import { useStore } from '@/store/globalStore'

export default defineNuxtPlugin(async () => {
	const store = useStore()

	const apiBase = 'https://adrienzaganelli.com/cms/wp-json'

	// parse PROJECTS
	const { data: projects } = await useAsyncData('cache_projects', () =>
		$fetch(apiBase + '/wp/v2/project')
	)

	store.projects = await projects.value

	return {
		provide: {
			store,
		},
	}
})
