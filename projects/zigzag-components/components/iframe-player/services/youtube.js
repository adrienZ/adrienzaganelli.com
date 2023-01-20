import VideoService from "./video-service";
import { objectToQueryParams, getQueryStringParams } from "../utils.js";

export default class YoutubeHelper extends VideoService {
  // https://developers.google.com/youtube/iframe_api_reference
  actionUrl = "https://www.youtube.com";

  onInit() {
    if (this.urlParams.pathname === "/watch") {
      this.pageToEmbed(this.url);
    }
  }

  setQueryParams() {
    const { urlParams, queryParams } = this;

    // remove youtube video id
    delete queryParams.v;
    queryParams["enablejsapi"] = 1;

    if (urlParams.search) {
      this.url = this.url.replace(
        urlParams.search,
        objectToQueryParams(queryParams)
      );
    } else {
      this.url += objectToQueryParams(queryParams);
    }
  }

  pageToEmbed() {
    const { host, protocol, search } = this.urlParams;

    const videoId = getQueryStringParams(search).v;
    this.url = protocol + "//" + host + "/embed/" + videoId + search;
  }

  listenEvents() {
    const events = ["onReady", "onStateChange"];

    this.postMessage(
      {
        event: "listening",
        id: this.id,
        channel: "widget",
      },
      true
    );

    events.forEach((eventName) => {
      this.postMessage(
        {
          event: "command",
          func: "addEventListener",
          args: [eventName],
          id: this.id,
          channel: "widget",
        },
        true
      );
    });
  }

  getInitialState() {
    console.log("getInitialState");
    this.postMessage(
      {
        event: "command",
        func: "getVolume",
      },
      true
    );
  }

  play() {
    this.postMessage(
      {
        event: "command",
        func: "playVideo",
      },
      true
    );
  }

  pause() {
    this.postMessage(
      {
        event: "command",
        func: "pauseVideo",
      },
      true
    );
  }

  stop() {
    this.postMessage(
      {
        event: "command",
        func: "stopVideo",
      },
      true
    );
  }

  mute() {
    this.postMessage(
      {
        event: "command",
        func: "mute",
      },
      true
    );
  }

  unmute() {
    this.postMessage(
      {
        event: "command",
        func: "unMute",
      },
      true
    );
  }

  onMessage(e) {
    let response = [];

    if (e.origin === this.actionUrl) {
      const data = JSON.parse(e.data);
      const { event, id } = data;

      console.log(data);

      if (data && event === "onReady" && id === this.id) {
        response.push({
          func: "onReady",
          data,
        });
      }

      if (data && event === "onStateChange" && id === this.id) {
        switch (data.info) {
          case 0:
          case 5:
            response.push({
              func: "onStop",
              data,
            });
            break;
          case 1:
            response.push({
              func: "onPlay",
              data,
            });
            break;
          case 2:
            response.push({
              func: "onPause",
              data,
            });
            break;
        }
      }
    }

    return response;
  }
}
