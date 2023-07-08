<script>
import cMedia from '@/components/showcase/media.vue'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import gsap from 'gsap'

export default {
	components: {
		cMedia,
	},
	data() {
		return {
			mediaSrc: String,
			mediaType: String,
			isOpen: false,
		}
	},
	mounted() {
		this.$bus.on('preview-open', this.open)
	},
	destroy() {
		this.close()
	},
	methods: {
		open({ src, type }) {
			this.isOpen = true
			disableBodyScroll(document.body)

			this.mediaSrc = src
			this.mediaType = type

			this.$nextTick(() => {
				gsap.fromTo(
					this.$refs.media.$el,
					{
						scale: 0.5,
						y: 20,
						opacity: 0,
					},
					{
						scale: 1,
						y: 0,
						opacity: 1,
						duration: 0.3,
						delay: 0.05,
					}
				)
			})
		},
		close(e) {
			gsap.fromTo(
				this.$refs.media.$el,
				{
					scale: 1,
					y: 0,
					opacity: 1,
				},
				{
					scale: 0.5,
					y: 20,
					opacity: 0,
					duration: 0.2,
					delay: 0.05,
					onComplete: () => {
						this.mediaSrc = ''
						this.mediaType = ''
						enableBodyScroll(document.body)
						this.isOpen = false
					},
				}
			)
		},
	},
}
</script>

<template>
	<div
		@click="close"
		class="image-modale h-full w-full top-0 left-0 z-30"
		:class="{ fixed: isOpen }"
	>
		<div
			class="h-full w-full bg-black bg-opacity-75 flex align-items-center justify-center"
		>
			<cMedia
				ref="media"
				:type="mediaType"
				:src="mediaSrc"
				class="preview m-auto max-w-full object-contain"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.image-modale {
	cursor: zoom-out;
}

.preview {
	max-height: 90%;
}
</style>

<style lang="scss">
.wp-block-image,
.wp-block-video {
	&:hover {
		cursor: zoom-in;
	}
}
</style>
