<template>
	<div class="tweet">
		<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
			<slot />
		</blockquote>
	</div>
</template>

<script setup lang="ts">
onMounted(() => {
	window.twttr?.widgets.load()
})
</script>
