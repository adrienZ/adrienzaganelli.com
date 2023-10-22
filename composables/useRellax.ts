import Rellax from "rellax";
import type { RellaxInstance } from "rellax";

export const useRellax = (elementRef: Ref<HTMLElement | undefined>) => {
	let rellax: null | RellaxInstance = null;

	onMounted(() => {
		rellax = new Rellax(elementRef.value, {
			// default tailwind breakpoints
			breakpoints: [768, 1024, 1280],
			round: true,
			// wrapper: elementRef.value,
		});
	});

	onBeforeUnmount(() => {
		rellax?.destroy();
	});
};
