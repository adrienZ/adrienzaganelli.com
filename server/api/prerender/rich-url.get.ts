import getLinkPreview from "@nzambello/link-previewer";

// cache url to speed up build and avoid spam of sources
export default defineCachedEventHandler(
	async (event) => {
		const query = getQuery(event);

		if (!query.url) {
			throw createError({
				statusCode: 403,
			});
		}

		// @ts-expect-error no idea why import is global
		const parse: typeof getLinkPreview = getLinkPreview.default;
		const url = query.url.toString();

		try {
			return await parse(url, {
				followRedirects: true,
			});
		} catch (error) {
			console.warn(`[rich-url] failed to preview ${url}`, error);
			return null;
		}
	},
	{
		maxAge: 60 * 60 * 24 * 7 * 8 /* 8 weeks */,
		name: "rich-links",
		shouldBypassCache: () => false,
	},
);
