<template>
	<Container variant="home" class="sticky top-0 z-20 shadow-sm">
		<div
			ref="domRef"
			class="bg-light w-full flex justify-between items-center text-xl"
		>
			<nav class="mx-auto font-bold">
				<ul class="flex gap-2">
					<li>
						<NuxtLink to="/" activeClass="text-pimper underline">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/blog" activeClass="text-pimper underline"
							>Blog</NuxtLink
						>
					</li>
				</ul>
			</nav>
			<button @click="toggleDark()" class="border p-2 border-black">
				dark mode
			</button>
		</div>
	</Container>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import gsap from "gsap";

const isDark = useDark({});

const lightThemeValues = new Map();
const darkThemeValues = new Map();
const domRef = ref<HTMLElement>();
const toggleDarkValue = useToggle(isDark);

const toggleDark = () => {
	console.log(isDark.value);

	gsap.to(":root", {
		"--primary-color": isDark.value
			? lightThemeValues.get("primary-color")
			: darkThemeValues.get("primary-color"),
		"--text-and-border-color": isDark.value
			? lightThemeValues.get("text-and-border-color")
			: darkThemeValues.get("text-and-border-color"),
		"--background-color": isDark.value
			? lightThemeValues.get("--background-color")
			: darkThemeValues.get("background-color"),
		duration: 0.5,
		onComplete() {
			isDark.value = !isDark.value;
		},
	});
};

function fetchThemesVars(vars: string[]) {
	if (!domRef.value) return;

	const clonedDOM = domRef.value.cloneNode() as HTMLElement;
	clonedDOM.classList.add("visually-hidden", "dark");

	domRef.value?.appendChild(clonedDOM);
	const cloneRootStyles = getComputedStyle(clonedDOM);
	const rootStyles = getComputedStyle(domRef.value);

	for (const property of vars) {
		darkThemeValues.set(
			property,
			cloneRootStyles.getPropertyValue(`--${property}`),
		);
		lightThemeValues.set(
			property,
			rootStyles.getPropertyValue(`--${property}`),
		);
	}

	domRef.value.removeChild(clonedDOM);
}

onMounted(() => {
	fetchThemesVars([
		"background-color",
		"text-and-border-color",
		"primary-color",
	]);
});
</script>
