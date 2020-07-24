<template>
  <div class="w-full bg-grey-0 c-thumbnail">
    <div id="canvas" class="c-thumbnail__canvas border" ref="canvas"></div>
    <div ref="box">
      <cMedia crossorigin="anonymous" :src="media.url" :type="media.type"/>
    </div>
    <div class="c-thumbnail__preloader plane" ref="texture">
      <cMedia :key="project.ID" v-for="project in $store.state.projects" :type="project.acf.showcase_image.type" :src="project.acf.showcase_image.url"/>
    </div>
  </div>
</template>


<script>
import fragmentShader from '@/assets/shaders/shader.frag'
import vertexShader from '@/assets/shaders/shader.vert'
import WEBGL from '@/mixins/webgl'
import gsap from 'gsap'
import cMedia from '@/components/showcase/media.vue'

export default {
  components: {
    cMedia,
  },
  props: {
    media: {
      type: Object,
      default: () => ({}),
    },
    index: Number,
  },
  // head: {
  //   script: [
  //     { src: 'https://cdn.jsdelivr.net/npm/curtainsjs@4.3.0/libs/curtains.min.js'}
  //   ]
  // },
  // watch: {
  //   index() {
  //     const {
  //       webgl,
  //       tl
  //     } = this
  //     webgl.webGLCurtain.resize()

  //     // if window has been resized between plane creation and image loading, we need to trigger a resize
  //     webgl.plane.planeResize();

  //     tl.clear()
  //     tl.to(webgl.plane.uniforms.brightness, {
  //       duration: 0.2,
  //       value: 0,
  //       onComplete: () => {
  //         webgl.texture.current.setSource(webgl.planeElement.children[this.index]);

  //       }
  //     }).to(webgl.plane.uniforms.brightness, {
  //       value: 1,
  //       duration: 0.6,

  //     })

  //   }
  // },
  // mounted() {
  //   const webgl = new WEBGL({
  //     canvas: "canvas",
  //     planeElement: document.getElementsByClassName("plane")[0]
  //   });
  //   webgl.initPlane();
  //   this.webgl = webgl
  //   this.tl = new gsap.timeline();
  // }
}
</script>

<style lang="scss" scoped>
.c-thumbnail__canvas,
.c-thumbnail__preloader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}


.c-thumbnail__preloader img,
.c-thumbnail__preloader video
{
  // height: 1px;
  // max-height: 1px;
  // width: 1px;
  // max-width: 1px;
  // position: absolute;
  // left: -9999px;
  pointer-events: none;
  display: none;
  opacity: 0;
}
</style>