import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export async function fetchContent(
	key: string,
	callback: () => Promise<ParsedContent>
) {
	if (process.dev) {
		return useAsyncData(key, callback)
	}

	try {
		return { data: ref(await callback()) }
	} catch (error) {
		return { data: ref(null) }
	}
}
