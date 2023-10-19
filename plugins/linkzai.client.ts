export default defineNuxtPlugin(() => {
	const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints;
	if (!supportsTouch && window.matchMedia("(max-width: 1024px)")) {
		// Create a new script element
		const scriptElement = document.createElement("script");
		scriptElement.defer = true;
		scriptElement.async = true;

		// Set the src attribute of the script element
		scriptElement.src = "https://js.linkz.ai/?key=63fa2b7b834cc6503e17f475";
		// only insert on desktop
		document.body.appendChild(scriptElement);
	}
});
