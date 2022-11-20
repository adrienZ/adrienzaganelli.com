import { getQueryStringParams, parseUrl } from "../utils.js";

export default class VideoService {
  actionUrl = "*";

  constructor($player, options = {}) {
    this.$player = $player;
    this.options = Object.assign({}, options); // clone

    if (options.src) {
      this.url = options.src;
      this.urlParams = parseUrl(this.url);
      this.queryParams = getQueryStringParams(this.urlParams.search);
      // you may to change this one later
      this.id = this.url;

      this.onInit();
    } else {
      throw new Error("You must set options.src");
    }
  }

  onInit() {
    // called after class creation and parsing
    // set your custom
  }

  getInitialState() {}

  pageToEmbed(pageUrl = "") {}

  setQueryParams(optionalParams = {}) {}

  listenEvents() {
    // some services needs you to specifify wich elements you want to listen
  }

  postMessage(messageData = {}, stringify = false) {
    this.$player.contentWindow.postMessage(
      stringify ? JSON.stringify(messageData) : messageData,
      this.actionUrl
    );
  }

  play() {}

  pause() {}

  stop() {}

  mute() {}

  unmute() {}

  /**
   * @return {Array}
   */
  onMessage(e) {
    // listen events here
  }
}
