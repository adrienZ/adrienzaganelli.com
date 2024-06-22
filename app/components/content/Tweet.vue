<template>
	<div class="tweet">
		<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
			<slot />
		</blockquote>
	</div>
</template>

<script setup lang="ts">
useHead({
	script: [
		{
			type: "text/javascript",
			src: "//platform.twitter.com/widgets.js",
			async: true,
			defer: true,
		},
	],
});

onMounted(() => {
	window.twttr?.widgets.load()
})
</script>
