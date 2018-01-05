import { Component, h } from 'preact'; // eslint-disable-line
import Carousel from "@js/modules/Carousel"
import Scroll from '@js/models/scroll'
import axios from "axios"

export default class CarouselInterface extends Carousel {
  constructor(props) {
    super(props)

    this._xhr = {
      markdown: 'src/media/markdown/'
    }
  }

  componentDidMount() {
    this.scrollManager = new Scroll(document.body, this.onChange.bind(this))
    this.scrollManager.start()
  }

  onLoadMoreHandler(e) {
    e.preventDefault()

    axios.get(this._xhr.markdown + this.state.activeItem.file, {
      onDownloadProgress: function (progressEvent) {
        if (progressEvent.lengthComputable) {
          return (progressEvent.loaded / progressEvent.total) * 100
        }
      },
    }).then(response => {
      this.props.expandViewHandler(response.data)
      this.scrollManager.destroy()
    })
  }
}
