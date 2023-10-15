import mitt from "mitt";

type Events = {
	"preview-open": { src: string; type: string };
	"cursor-hover": undefined;
	"cursor-default": undefined;
	"cursor-difference": undefined;
	"cursor-show": undefined;
	"cursor-hide": undefined;
};

const instance = mitt<Events>();

export default defineNuxtPlugin(() => {
	return {
		provide: {
			bus: instance,
		},
	};
});

export const $bus = instance;
