import { Component, h } from 'preact'; // eslint-disable-line
import Carousel from "@js/modules/Carousel"
import Scroll from '@js/models/scroll'
import axios from "axios"
import showdown from "showdown"

export default class CarouselInterface extends Carousel {
  constructor(props) {
    super(props)


    this._xhr = {
      markdown: 'src/media/markdown/'
    }
  }

  componentDidMount() {
    new Scroll(document.body, this.onChange.bind(this)).start()
  }

  onLoadMoreHandler(e) {
    e.preventDefault()

    axios.get(this._xhr.markdown + this.state.activeItem.file, {
      onDownloadProgress: function (progressEvent) {
        if (progressEvent.lengthComputable) {
          console.log(`loading: ${(progressEvent.loaded / progressEvent.total) * 100} %`)
        } else {
          console.log('loading');
        }
      },
    }).then(response => {
      const app = document.getElementById('app')
      const converter = new showdown.Converter()
      app.innerHTML = converter.makeHtml(response.data)
    })
  }
}
