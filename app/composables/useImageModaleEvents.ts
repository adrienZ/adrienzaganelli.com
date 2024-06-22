export const useImageModalEvents = () => {
	const { $bus } = useNuxtApp();

	function handleMouseEnter() {
		$bus.emit("cursor-difference");
		$bus.emit("cursor-hover");
	}

	function handleMouseOut() {
		$bus.emit("cursor-default");
	}

	function handleClick(src: string, type: string) {
		$bus.emit("preview-open", { src, type });
	}

	return {
		handleClick,
		handleMouseEnter,
		handleMouseOut,
	};
};
