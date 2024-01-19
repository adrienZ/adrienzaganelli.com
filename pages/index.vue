<template>
	<section class="relative overflow-x-hidden">
		<FancyCursor />
		<Container variant="home">
			<c-hero class="sm:pt-20 pt-10" />
			<c-showcase class="sm:mt-20 mt-10" />
			<c-about class="sm:mt-20 mt-10" />
			<c-footer class="sm:mt-20 mt-10" />
		</Container>
	</section>
</template>

<script setup lang="ts">
import cShowcase from "@/components/home/showcase.vue";
import cHero from "@/components/home/hero.vue";
import cAbout from "@/components/home/about.vue";
import cFooter from "@/components/common/footer.vue";

const { $bus } = useNuxtApp();

onBeforeUnmount(() => {
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
});
</script>
