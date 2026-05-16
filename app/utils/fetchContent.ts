export async function fetchContent<Query extends () => Promise<unknown>>(
	key: string,
	callback: Query,
) {
	if (import.meta.dev) {
		return useAsyncData(key, callback);
	}

	try {
		return { data: ref(await callback()) };
	} catch (error) {
		return { data: ref(error) };
	}
}
