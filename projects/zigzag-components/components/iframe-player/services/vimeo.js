import VideoService from "./video-service";
import { objectToQueryParams } from "../utils.js";

// TODO:
// - keep volume state to trigger unmute event

export default class VimeoHelper extends VideoService {
  // https://developer.vimeo.com/player/sdk/reference
  actionUrl = "https://player.vimeo.com";

  onInit() {
    const { urlParams } = this;

    this.id = urlParams.pathname.split("/").pop();

    if (urlParams.host === "vimeo.com") {
      this.pageToEmbed(urlParams);
    }
  }

  pageToEmbed() {
    const { host, protocol, search } = this.urlParams;

    this.url =
      protocol + "//" + "player." + host + "/video/" + this.id + search;
  }

  setQueryParams() {
    const { urlParams, queryParams } = this;

    queryParams["api"] = 1;
    queryParams["id"] = this.id;

    if (urlParams.search) {
      this.url = this.url.replace(
        urlParams.search,
        objectToQueryParams(queryParams)
      );
    } else {
      this.url += objectToQueryParams(queryParams);
    }
  }

  listenEvents() {
    const events = ["pause", "play", "loaded", "ended", "volumechange"];

    events.forEach((eventName) => {
      this.postMessage({
        method: "addEventListener",
        value: eventName,
      });
    });
  }

  play() {
    this.postMessage({
      method: "play",
    });
  }

  pause() {
    this.postMessage({
      method: "pause",
    });
  }

  stop() {
    this.postMessage({
      method: "unload",
    });
  }

  mute() {
    this.postMessage({
      method: "setVolume",
      value: 0,
    });
  }

  unmute() {
    this.postMessage({
      method: "setVolume",
      value: 1,
    });
  }

  onMessage(e) {
    let response = [];
    if (e.origin === this.actionUrl) {
      let { data } = e;

      // weird flex but ok
      if (!this.cacheId && data.event === "loaded") {
        this.cacheId = data.data.id.toString();
        response.push({
          func: "onReady",
          data,
        });
      }

      if (this.cacheId === this.id) {
        switch (data.event) {
          case "play":
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
          case "ended":
            response.push({
              func: "onStop",
              data,
            });
            break;
          case "volumechange":
            if (data.data.volume === 0) {
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
            response.push({
              func: "onVolume",
              data,
            });
            break;
        }
      }
    }

    return response;
  }
}
