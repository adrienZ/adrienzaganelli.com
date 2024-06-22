export async function fetchContent<Query extends () => Promise<any>>(
	key: string,
	callback: Query,
) {
	if (process.dev) {
		return useAsyncData(key, callback);
	}

	try {
		return { data: ref(await callback()) };
	} catch (error) {
		return { data: ref(null) };
	}
}
