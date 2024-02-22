<template>
	<div class="sticky top-0 z-20 shadow-sm bg-light">
		<Container variant="home">
			<div
				ref="domRef"
				class="w-full flex justify-between items-center text-2xl"
			>
				<nav class="mx-auto font-bold">
					<ul class="flex gap-2">
						<li>
							<NuxtLink to="/" activeClass="text-pimper">Home</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/blog" activeClass="text-pimper">Blog</NuxtLink>
						</li>
					</ul>
				</nav>
				<button @click="toggleDarkValue()" class="border p-2 border-black">
					dark mode
				</button>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

const domRef = ref<HTMLElement>();
const toggleDarkValue = useToggle(isDark);
</script>
