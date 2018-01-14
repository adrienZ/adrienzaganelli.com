import { Component, h } from 'preact' // eslint-disable-line
import Carousel from '@js/components/Carousel'
import Scroll from '@js/models/scroll'
import axios from 'axios'
import Hammer from 'hammerjs'
import Router from '@js/models/router'

const router = new Router({})

export default class CarouselInterface extends Carousel {
  constructor(props) {
    super(props)

    this._xhr = {
      markdown: 'src/media/markdown/'
    }
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

  onLoadMoreHandler(e) {
    e.preventDefault()

    axios.get(this._xhr.markdown + this.state.activeItem.file, {
      onDownloadProgress: function (progressEvent) {
        if (progressEvent.lengthComputable) {
          return (progressEvent.loaded / progressEvent.total) * 100
        }
      },
    }).then(response => {
      this.props.expandViewHandler(response.data, this.state.index, this.onClosePost.bind(this))
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

    router.setRoute('')
  }

  componentDidUpdate() {
    this.state.stopTimer
      ? document.body.classList.remove('no-scroll')
      : document.body.classList.add('no-scroll')
  }

  componentWillUnmount() {
    window.onkeyup = null
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

    if (this.props.forcedFocus) {
      this.setPosition(this.props.forcedFocus)
      this.onLoadMoreHandler(document.createEvent('Event'))
    }
  }
}

