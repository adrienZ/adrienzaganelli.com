const $mouse = reactive({
	center: {
		x: 0,
		y: 0,
	},
	movement: {
		x: 0,
		y: 0,
	},
	position: {
		x: 0,
		y: 0,
	},
});

function onMouseMove({ clientX, clientY }: MouseEvent) {
	$mouse.position = {
		x: clientX,
		y: clientY,
	};

	$mouse.movement = {
		x: $mouse.position.x - $mouse.center.x,
		y: $mouse.position.y - $mouse.center.y,
	};
}

function onResize() {
	$mouse.center.x = window.innerWidth / 2;
	$mouse.center.y = window.innerHeight / 2;
}

export function useMouse() {
	onMounted(() => {
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("resize", onResize);
		onResize();
	});

	onBeforeUnmount(() => {
		window.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("resize", onResize);
	});

	return {
		$mouse,
	};
}
