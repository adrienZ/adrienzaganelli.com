import { Component, h } from 'preact' // eslint-disable-line
import Carousel from '@js/components/Carousel'
import Scroll from '@js/models/scroll'
import axios from 'axios'
import showdown from 'showdown'
import Hammer from 'hammerjs'

export default class CarouselInterface extends Carousel {
  constructor(props) {
    super(props)

    this._xhr = {
      markdown: 'src/media/markdown/'
    }
  }

  componentDidUpdate() {
    this.state.stopTimer
      ? document.body.classList.remove('no-scroll')
      : document.body.classList.add('no-scroll')
  }

  componentDidMount() {

    this.scrollManager = new Scroll(document.body, this.onChange.bind(this))
    this.scrollManager.start()

    const hammer = new Hammer(this.base, {
      velocity: 0.8
    })

    hammer.on('swipe', e => {
      e.deltaX < 0
        ? this.next()
        : this.previous()
    })

    window.onkeyup = this.onKeyUp.bind(this)
  }

  onKeyUp(e) {
    if (this.state.stopTimer) return false

    const key = e.keyCode ? e.keyCode : e.which
    switch (key) {
    case 37:
    case 40:
      this.previous()
      break
    case 38:
    case 39:
      this.next()
      break
    }
  }

  componentWillUnmount() {
    window.onkeyup = null
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
      const converter = new showdown.Converter()
      const blogPost = converter.makeHtml(response.data)
      this.props.expandViewHandler(blogPost, this.state.index, this.onClosePost.bind(this))
      this._timer.stop()
      this.scrollManager.destroy()
      this.state.stopTimer = true
    })
  }

  onClosePost() {
    this.props.disableExpandedView()
    this.scrollManager.start()
    this.state.stopTimer = false
    this.resetTimeout()
  }
}

