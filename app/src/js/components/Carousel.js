import { Component, h } from 'preact' // eslint-disable-line
import Timer from "@js/models/timer"
import { Motion, spring } from 'react-motion' // eslint-disable-line
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
      stopTimer: false,
      direction: 0
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

    this.setPosition(newIndex)
    this.state.direction = e.direction
  }

  setPosition(index) {
    if (this.props.projects.indexOf(this.props.projects[index]) === -1) {
      throw new Error(`Wrong index value sent, this.projects contains ${this.__projectsLength__} items. value sent: ${index}`)
    }

    this.setMenuItem(index)

    this.setState({
      index, activeItem: this.props.projects[index]
    })

    this.resetTimeout()
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
        <div class="carousel__content">
          <aside class="carousel__aside">
            <div class="pagination">
              <Motion key={this.state.index} style={{}}>
                {c =>
                  <p data-id={this.state.index} key={c.key} class="number big">
                    <span class="animated fadeInDown">0</span>
                    <span class="animated fadeInUp">{this.state.index + 1}</span>
                  </p>}
              </Motion>
              <p class="number divider">/0{this._projectsLength}</p>
            </div>

            <div class="carousel__menu--container">
              <div class="carousel__menu" tabindex="1" onClick={this.props.toggleMenu}>
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
                direction={this.state.direction}
                interval={this.props.interval}
                previous={this.previous.bind(this)} />
              : <HeroProject
                stopTimer={this.state.stopTimer}
                project={this.state.activeItem}
                index={this.state.index}
                onClosePost={this.props.onClosePost}
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
