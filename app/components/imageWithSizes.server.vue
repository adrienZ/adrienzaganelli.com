<template>
	<NuxtPicture
		v-bind="{ ...$attrs, imgAttrs: { class: 'block bg-surface', ...sizes } }"
	/>
</template>

<script lang="ts" setup>
import { NuxtPicture } from "#components";
import { imageSizeFromFile } from "image-size/fromFile";
const attrs = useAttrs();
const sizes = await imageSizeFromFile("public/" + attrs.src);
</script>
