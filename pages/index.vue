<template>
	<section ref="root" class="page-home">
		<FancyCursor />
		<div class="container sm:w-3/4 w-5/6 mx-auto">
			<c-hero class="sm:pt-20 pt-10" />
			<c-showcase class="sm:mt-20 mt-10" />
			<c-about class="sm:mt-20 mt-10" />
			<c-footer class="sm:mt-20 mt-10" />
		</div>
	</section>
</template>

<script setup lang="ts">
import cShowcase from "@/components/home/showcase.vue";
import cHero from "@/components/home/hero.vue";
import cAbout from "@/components/home/about.vue";
import cFooter from "@/components/common/footer.vue";

import Rellax, { RellaxInstance } from "rellax";

const { $bus } = useNuxtApp();

let rellax: null | RellaxInstance = null;
const root = ref<HTMLElement>();

function waitForElementWithTimeout(
	selector: string,
	callback: (element: HTMLElement | null) => void,
	timeout = 5000,
	interval = 100,
) {
	const endTime = Date.now() + timeout;

	function checkElement() {
		const targetNode = document.querySelector(selector);

		if (targetNode instanceof HTMLElement) {
			callback(targetNode);
		} else if (Date.now() < endTime) {
			setTimeout(checkElement, interval);
		} else {
			callback(null);
		}
	}

	checkElement();
}

const buildRellax = () => {
	if (!rellax && document.querySelector(".relax")) {
	}
};

onMounted(() => {
	waitForElementWithTimeout(
		".rellax",
		(element) => {
			if (element) {
				rellax = new Rellax(".rellax", {
					// default tailwind breakpoints
					breakpoints: [768, 1024, 1280],
					round: true,
					wrapper: root.value,
				});
			}
		},
		10000,
	); // Wait for up to 10 seconds
});

onBeforeUnmount(() => {
	rellax?.destroy();
	$bus.emit("cursor-default");
});

useHead({
	script: [
		{
			innerHTML: `
          document.body.style.opacity = 0
          var readyStateCheckInterval = setInterval(function() {
              if (document.readyState === "complete") {
                  clearInterval(readyStateCheckInterval);
                  document.body.style.opacity = 1
              }
          }, 10);
        `,
			body: true,
			type: "text/javascript",
		},
	],
});
definePageMeta({
	layout: "folio",
	pageTransition: {
		appear: true,
		mode: "out-in",
		css: false,
		onEnter: PageTransition.defaultTransitionIn,
		onLeave: PageTransition.defaultTransitionOut,
	},
});
</script>

<style lang="scss">
// scroll container
// overflow-x hidden
// BUT
// keep position sticky
.page-home {
	position: absolute;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
}
</style>
