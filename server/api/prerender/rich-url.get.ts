import getLinkPreview from "@nzambello/link-previewer";
import { createError, defineEventHandler, getQuery } from "nuxt/server";

// cached through `routeRules` in nuxt.config.ts
export default defineEventHandler(async (event) => {
	const query = getQuery(event);

	if (!query.url) {
		throw createError({
			status: 403,
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
});
