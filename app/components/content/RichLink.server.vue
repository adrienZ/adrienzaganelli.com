<template>
  <div class="mt-4">
    <a class="font-bold" :href="href" data-linkz-ai-ignore @click="track(false)">{{ title }}</a>

    <a v-if="data && data.title" :href="href" @click="track(true)" class="block max-w-[30rem]" data-linkz-ai-ignore>
      <VisuallyHidden>{{ title }}</VisuallyHidden>
      <AspectRatio class="bg-surface border border-light rounded-lg overflow-hidden mt-1" :ratio="32 / 9">
        <div class="flex h-full">
          <div class="w-1/2">
            <NuxtImg v-if="preview" :src="preview" loading="lazy" class="w-full !h-full object-cover" />
            <div class="flex px-10 items-center justify-center h-full" v-else>
              <svg class="w-12 h-12 inline-block fill-current">
                <use xlink:href="#icon-article" x="0" y="0" />
              </svg>
            </div>
          </div>
          <div class="w-1/2 border-l border-light p-4">
            <!-- <div class="flex items-center">
              <img v-if="data.favicon" class="w-4 h-4 object-cover block !mx-0 !mr-1" :src="data.favicon" />
              <div class="text-xs">{{ data.siteName }}</div>
            </div> -->
            <div class="line-clamp-2 text-sm font-bold">{{ data.title }}</div>
            <div class="text-xs line-clamp-3 mt-2">{{ data.description }}</div>
          </div>
        </div>
      </AspectRatio>
    </a>
  </div>
</template>

<script setup lang="ts">
import { AspectRatio, VisuallyHidden } from "radix-vue"

const props = withDefaults(defineProps<{
  href: string,
  title: string
}>(), { title: "See more" })

const href = computed(() => props.href + "?utm_source=adrienzaganelli.com")
const preview = computed(() => {
  if (data.value?.image?.startsWith("http:")) {
    // avoid mix content
    data.value.image = data.value.image.replace("http:", "https:");
  }

  return data.value?.image
})

const { data } = await useAsyncData(`embed-${props.href}`, () =>
  $fetch("/api/prerender/rich-url", {
    query: {
      url: props.href,
    }
  })
)

function track(fromCard: boolean) {
  umTrackEvent("Rich link clicked", {
    href: props.href,
    fromCard
  })
}
</script>

