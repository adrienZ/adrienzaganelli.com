<template>
	<NuxtPicture
		v-bind="{ ...$attrs, imgAttrs: { class: 'block bg-surface', ...sizes } }"
	/>
</template>

<script lang="ts" setup>
const attrs = useAttrs();
import sizeOf from "image-size";
const sizes = sizeOf("public/" + attrs.src);
</script>
