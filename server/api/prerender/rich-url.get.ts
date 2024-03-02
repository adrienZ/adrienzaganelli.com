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

		console.log("parse", query.url);

		return await parse(query.url.toString());
	},
	{
		maxAge: 60 * 60 * 24 * 7 * 8 /* 8 weeks */,
		name: "rich-links",
		shouldBypassCache: () => false,
	},
);
