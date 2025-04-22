<template>
	<NuxtPicture
		v-bind="{ ...$attrs, imgAttrs: { class: 'block bg-surface', ...sizes } }"
	/>
</template>

<script lang="ts" setup>
const attrs = useAttrs();
import { imageSizeFromFile } from "image-size/fromFile";
const sizes = await imageSizeFromFile("public/" + attrs.src);
</script>
