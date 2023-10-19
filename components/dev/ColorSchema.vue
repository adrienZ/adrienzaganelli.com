<template>
	<table
		ref="domRef"
		class="fixed top-0 right-0 bg-slate-900 text-slate-100 z-50"
	>
		<tr v-for="(target, name) in targets">
			<td>{{ name }} :</td>
			<td>
				<input
					class="ml-2"
					type="color"
					:value="target"
					@input="($event) => handleChangeColor($event, name)"
				/>
			</td>
		</tr>
	</table>
</template>

<script setup lang="ts">
import { useCssVar } from "@vueuse/core";

const domRef = ref<HTMLElement>();

const targets = reactive({
	"background-color": useCssVar("--background-color", domRef),
	"text-and-border-color": useCssVar("--text-and-border-color", domRef),
	"primary-color": useCssVar("--primary-color", domRef),
});

interface ColorEvent extends Event {
	target: Event["target"] & { value: string };
}

const handleChangeColor = (event: ColorEvent, target: keyof typeof targets) => {
	document.documentElement.style.setProperty(`--${target}`, event.target.value);
	targets[target] = event.target.value;
};

onMounted(() => {
	targets["background-color"] = "";
	targets["background-color"] = targets["background-color"];
});
</script>
