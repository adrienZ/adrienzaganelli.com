import { test, expect } from "@playwright/test";

test("Blog content is rendering", async ({ page }) => {
	await page.goto(
		"/blog/free-google-analytics-alternative-quickstart-with-umami-analytics",
	);
	const article = await page.getByRole("article");
	await expect(article).toContainText(
		"As a European, I have witnessed Google Analytics become illegal",
	);
});

test("Case study content is rendering", async ({ page }) => {
	await page.goto("/case-study/sketchfab");
	const article = await page.getByRole("article");
	await expect(article).toContainText(
		"My mission was to support the web team during the launch of several major features",
	);
});
