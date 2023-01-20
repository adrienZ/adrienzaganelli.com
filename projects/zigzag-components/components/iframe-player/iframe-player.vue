<template>
  <div class="player">
    <div class="player-wrapper">
      <div
        v-if="overlay"
        @click="play()"
        :style="'background-image: url(' + overlay + ');'"
        class="player-overlay"
        :class="{ 'player-overlay--hide': overlay_hide }"
      >
        <div class="player-play">▶</div>
      </div>
      <iframe
        class="player-iframe"
        ref="$player"
        :data-src="src"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import { isUrl, parseUrl } from "./utils.js";
import YoutubeHelper from "./services/youtube.js";
import VimeoHelper from "./services/vimeo.js";
import DailymotionHelper from "./services/dailymotion.js";

export default {
  props: ["src", "overlay", "overlay_on_pause", "overlay_on_stop"],
  created() {
    this.services = {
      YOUTUBE: "www.youtube.com",
      VIMEO: "player.vimeo.com",
      VIMEO_PAGE: "vimeo.com",
      DAILYMOTION: "www.dailymotion.com",
    };
  },
  data() {
    return {
      overlay_hide: true,
      state: {
        ready: false,
        playing: false,
        paused: true,
        stoped: true,
        muted: false,
      },
    };
  },
  mounted() {
    // cache inital state
    this.classNames = {
      playerInit: this.$refs.$player.className,
    };
    this.update();
  },
  destroyed() {
    window.removeEventListener("message", this.handleMessage);
  },
  methods: {
    update() {
      const { $player } = this.$refs;

      this.overlay_hide = !this.overlay;
      $player.className = this.classNames.playerInit;

      // check if src is url
      const validity = isUrl(this.src);
      if (!validity) {
        this.setIframeSrc(this.src);
        throw new Error(this.src + "is not a valid url");
      }

      // parse URL
      const { host } = parseUrl(this.src);

      let helper;

      switch (host) {
        case this.services.YOUTUBE:
          $player.classList.add("player--youtube");
          helper = new YoutubeHelper($player, {
            src: this.src,
          });
          break;
        case this.services.VIMEO:
        case this.services.VIMEO_PAGE:
          $player.classList.add("player--vimeo");
          helper = new VimeoHelper($player, {
            src: this.src,
          });
          break;
        case this.services.DAILYMOTION:
          $player.classList.add("player--dailymotion");
          helper = new DailymotionHelper($player, {
            src: this.src,
          });
          break;
        default:
          this.setIframeSrc(this.src);
      }

      if (helper) {
        this.helper = helper;

        // create embed url and params
        helper.setQueryParams();
        this.setIframeSrc(helper.url);

        window.addEventListener("message", this.handleMessage);

        $player.addEventListener("load", () => {
          helper.listenEvents();
        });
      }
    },
    handleMessage(e) {
      const emitted = this.helper.onMessage(e);
      emitted.forEach((event) => {
        // console.log(event);
        this[event.func](event.data);
      });
    },
    play() {
      this.helper.play();
      // prevent lag with overlay
      this.onPlay();
    },
    pause() {
      this.helper.pause();
    },
    stop() {
      this.helper.stop();
    },
    mute() {
      this.helper.mute();
    },
    unmute() {
      this.helper.unmute();
    },
    setIframeSrc(str) {
      this.$refs.$player.src = str;
    },
    onReady(e) {
      this.state.ready = true;
      const infos = helper.getInitialState();
    },
    onPlay(e) {
      this.state.playing = true;
      this.state.paused = false;
      this.state.stoped = false;

      const { overlay_hide, overlay } = this;
      if (overlay && !overlay_hide) {
        this.overlay_hide = true; // hide overlay
      }
    },
    onPause(e) {
      this.state.playing = false;
      this.state.paused = true;

      const { overlay_hide, overlay, overlay_on_pause } = this;
      if (overlay && overlay_hide && overlay_on_pause) {
        this.overlay_hide = false; // show overlay
      }
    },
    onStop(e) {
      this.state.playing = false;
      this.state.paused = true;
      this.state.stoped = true;

      const { overlay_hide, overlay, overlay_on_stop } = this;
      if (overlay && overlay_hide && overlay_on_stop) {
        this.overlay_hide = false; // show overlay
      }
    },
    onMute(e) {
      this.state.muted = true;
    },
    onUnmute(e) {
      this.state.muted = false;
    },
    onVolume(e) {},
  },
};
</script>

<style lang="scss" scoped>
.player {
}

.player-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.player-wrapper {
  position: relative;
  width: 100%;
  padding-top: (9 / 16 * 100%);
}

.player-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  // animations
  opacity: 1;
  transition: opacity 0.15s ease-in-out;

  &--hide {
    opacity: 0;
    pointer-events: none;
  }
}

.player-play {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3D(-50%, -50%, 0);
  border: 1px solid currentColor;
}
</style>
