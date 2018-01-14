import { Component, h } from 'preact' // eslint-disable-line
import Timer from "@js/models/timer"
// ui components
import HeroProject from '@js/components/HeroProject' // eslint-disable-line
import Me from '@js/components/Me' // eslint-disable-line

export default class CarouselInterface extends Component {
  constructor(props) {
    super()

    this._timer = new Timer(this.onTimeoutHandler.bind(this), props.interval)
    this._projectsLength = props.projects.length

    this.state = {
      activeItem: props.projects[0],
      index: 0,
      stopTimer: false
    }
  }

  onChange(e) {
    const targetIndex = this.state.index + e.direction
    let newIndex = targetIndex

    if (targetIndex < 0) {
      newIndex = this._projectsLength - 1
    } else if (targetIndex >= this._projectsLength) {
      newIndex = 0
    }


    if (e.hasOwnProperty('speed')) {
      this.resetTimeout()
    } else {
      // a bit tricky, use the delay of scroll manager in order
      // to prevent spamming, this delay allow animations to run
      // return this.scrollManager.getScroll(null, { speed: 1 })
    }
    this.setPosition(newIndex)
  }

  setPosition(index) {
    if (this.props.projects.indexOf(this.props.projects[index]) === -1) {
      throw new Error(`Wrong index value sent, this.projects contains ${this.__projectsLength__} items. value sent: ${index}`)
    }

    this.setState({
      index, activeItem: this.props.projects[index]
    })
  }

  previous() {
    this.onChange({ direction: -1 })
  }

  next() {
    this.onChange({ direction: 1 })
  }

  resetTimeout() {
    this._timer.reset(this.props.interval)
  }

  onTimeoutHandler() {
    this.onChange({ direction: 1 })
  }

  render() {
    return (
      <section class="carousel">
        <header class="carousel__header">
          <nav>
            <ul class="carousel__header--menu">
              { /* this.props.projects.map(p => <li>{p.label || p.name}</li>) */ }
            </ul>
          </nav>
        </header>

        <div class="carousel__content">
          <aside class="carousel__aside">
            <div class="pagination">
              <p class="number big">0{this.state.index + 1}</p>
              <p class="number divider">/0{this._projectsLength}</p>
            </div>

            <div class="carousel__menu--container">
              <div class="carousel__menu">
                <div class="carousel__menu--line"></div>
                <div class="carousel__menu--line"></div>
                <div class="carousel__menu--line"></div>
              </div>
            </div>
          </aside>

          <main class="carousel__main">
            { this.state.index === 0
              ? <Me
                stopTimer={this.state.stopTimer}
                next={this.next.bind(this)}
                interval={this.props.interval}
                previous={this.previous.bind(this)} />
              : <HeroProject
                stopTimer={this.state.stopTimer}
                project={this.state.activeItem}
                index={this.state.index}
                interval={this.props.interval}
                next={this.next.bind(this)}
                previous={this.previous.bind(this)}
                onClickHandler={this.onLoadMoreHandler.bind(this)} />
            }
          </main>
        </div>

        <footer class="carousel__footer">
        </footer>
      </section>
    )
  }
}
