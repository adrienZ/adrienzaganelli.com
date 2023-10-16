<template>
	<Container variant="home" class="sticky top-0 z-20 shadow-sm">
		<div class="bg-light w-full flex justify-between">
			<div>
				<svg class="w-12 h-12 inline-block">
					<use xlink:href="#icon-logo" x="0" y="0" />
				</svg>
			</div>
			<button @click="toggleDark()" class="border p-2 border-black">
				dark mode
			</button>
		</div>
	</Container>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({});

const toggleDark = useToggle(isDark);
</script>
