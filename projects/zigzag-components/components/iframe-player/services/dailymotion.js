import VideoService from "./video-service";
import { getQueryStringParams, objectToQueryParams } from "../utils.js";

// TODO:
// - HANDLE FAKE STOP
export default class DailymotionHelper extends VideoService {
  // https://developer.dailymotion.com/player/
  // https://github.com/dailymotion/dailymotion-sdk-js/blob/master/src/core/player.js#L106
  actionUrl = "https://www.dailymotion.com";

  onInit() {
    if (!this.urlParams.pathname.includes("/embed")) {
      this.convertPageLinkToEmbed();
    }
  }

  convertPageLinkToEmbed() {
    const { href, pathname } = this.urlParams;

    this.url = href.replace(pathname, "/embed" + pathname);
  }

  setQueryParams() {
    const { urlParams, queryParams } = this;

    this.id = urlParams.pathname.split("/").pop();

    queryParams["api"] = "postMessage";
    queryParams["id"] = this.id;
    // no next video autoplay
    queryParams["queue-enable"] = false;
    queryParams["queue-autoplay-next"] = false;

    if (urlParams.search) {
      this.url = this.url.replace(
        urlParams.search,
        objectToQueryParams(queryParams)
      );
    } else {
      this.url += objectToQueryParams(queryParams);
    }
  }

  onMessage(e) {
    const data = getQueryStringParams(e.data);
    let response = [];

    if (data.id === this.id) {
      switch (data.event) {
        case "playback_ready":
          response.push({
            func: "onReady",
            data,
          });
          break;
        case "playing":
          response.push({
            func: "onPlay",
            data,
          });
          break;
        case "pause":
          response.push({
            func: "onPause",
            data,
          });
          break;
        case "end":
          response.push({
            func: "onStop",
            data,
          });
        case "volumechange":
          if (data.muted === "true") {
            response.push({
              func: "onMute",
              data,
            });
          } else {
            response.push({
              func: "onUnmute",
              data,
            });
          }
          break;
      }
    }

    return response;
  }

  play() {
    this.postMessage("play");
  }

  pause() {
    this.postMessage("pause");
  }

  stop() {
    this.postMessage("pause");
    this.postMessage({ command: "seek", parameters: [0] }, true);
  }

  mute() {
    this.postMessage({ command: "muted", parameters: [1] }, true);
  }

  unmute() {
    this.postMessage({ command: "muted", parameters: [0] }, true);
  }
}
