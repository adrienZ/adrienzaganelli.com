<template>
	<section>
		<div
			class="border w-full border-black border-opacity-25 mb-5 sm:mb-10"
		></div>

		<div class="sm:flex sm:-mx-3">
			<div class="md:w-1/3 sm:w-1/2 sm:px-3">
				<p class="text-3xl sm:-mt-2 font-semibold mb-4">
					Next project:
					<NuxtLink
						:to="url"
						class="font-bold underline"
						@mouseover="$bus.emit('cursor-hover')"
						@mouseleave="$bus.emit('cursor-default')"
						@click="$emit('apply')"
					>
						{{ title }}
					</NuxtLink>
				</p>
				<p class="italic">{{ summary }}</p>
			</div>

			<div
				class="md:w-2/3 sm:w-1/2 sm:px-3 mt-3 sm:mt-0"
				@mouseover="$bus.emit('cursor-difference')"
				@mouseleave="$bus.emit('cursor-default')"
			>
				<NuxtLink
					:to="url"
					@mouseover="$bus.emit('cursor-hover')"
					@mouseleave="$bus.emit('cursor-default')"
					@click="$emit('apply')"
				>
					<span class="sr-only">Go to next project page</span>
					<cMedia :src="mediaUrl" :type="mediaType" />
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import cMedia from "@/components/showcase/media.vue";

defineProps<{
	url: string;
	title: string;
	mediaUrl: string;
	mediaType: string;
	summary: string;
}>();

defineEmits<{
	(event: "apply"): void;
}>();
</script>
