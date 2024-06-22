<template>
	<div
		class="w-full bg-grey-0 c-thumbnail"
		@mouseenter="$bus.emit('cursor-difference')"
		@mouseout="$bus.emit('cursor-default')"
	>
		<cMedia crossorigin="anonymous" :src="media.src" :type="media.type" />
	</div>
</template>

<script setup lang="ts">
import cMedia from "@/components/showcase/media.vue";

defineProps({
	media: {
		type: Object,
		default: () => ({}),
	},
	index: Number,
});
</script>
