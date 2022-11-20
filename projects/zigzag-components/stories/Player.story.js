import "bootstrap/dist/css/bootstrap.css";

import IframePlayer from "../components/iframe-player/iframe-player.vue";

export default {
  title: "Media/IframePlayer",
  component: IframePlayer,
};

const cases = {
  Youtube: [
    "https://www.youtube.com/watch?v=low6Coqrw9Y",
    "https://www.youtube.com/watch?v=XE_6E5BPHOg",
    "https://www.youtube.com/embed/pCnsWTEaYLU",
    "https://www.youtube.com/embed/F8vuyd9M2LU",
  ],
  Vimeo: [
    "https://vimeo.com/259411563",
    "https://vimeo.com/243244233",
    "https://player.vimeo.com/video/255269888",
    "https://player.vimeo.com/video/193641463",
  ],
  Dailymotion: [
    "https://www.dailymotion.com/video/x7tbx37?playlist=x5nmbq",
    "https://www.dailymotion.com/video/x7td835?playlist=x5nmbq",
    "https://www.dailymotion.com/embed/video/x7s2hhv",
    "https://www.dailymotion.com/embed/video/x7t4fkw",
  ],
};

const demoComponent = (args) => {
  return {
    components: {
      IframePlayer,
    },
    setup: () => ({ ...args }),

    mounted() {
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },
    template: `
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="(src, index) in urls">
        <code class="w-100" >{{src}}</code>
        <IframePlayer :ref="'el-' + index" :overlay_on_stop="overlay_on_stop" :overlay_on_pause ="overlay_on_pause " :overlay="overlayExample" :src="src" class="w-100"/>
        <pre class="w-100" v-if="Object.keys($refs).length">{{$refs['el-' + index][0].state}}</pre>
        <div class="w-100">
          <button class="btn btn-info" @click="$refs['el-' + index][0].play()">play</button>
          <button class="btn btn-info" @click="$refs['el-' + index][0].pause()">pause</button>
          <button class="btn btn-info" @click="$refs['el-' + index][0].stop()">stop</button>
          <button class="btn btn-info" @click="$refs['el-' + index][0].mute()">mute</button>
          <button class="btn btn-info" @click="$refs['el-' + index][0].unmute()">unmute</button>
        </div>
      </div>

    </div>`,
  };
};

export const Youtube = demoComponent.bind({});
Youtube.args = {
  urls: cases["Youtube"],
  overlayExample: false,
  overlay_on_stop: true,
  overlay_on_pause: false,
};
export const Vimeo = demoComponent.bind({});
Vimeo.args = {
  urls: cases["Vimeo"],
  overlayExample: false,
  overlay_on_stop: true,
  overlay_on_pause: false,
};
export const Dailymotion = demoComponent.bind({});
Dailymotion.args = {
  urls: cases["Dailymotion"],
  overlayExample: false,
  overlay_on_stop: true,
  overlay_on_pause: false,
};
