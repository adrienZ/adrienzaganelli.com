import { Component, h } from 'preact'; // eslint-disable-line
import Timer from "@js/models/timer"
import LoadMoreButton from '@js/components/LoadMoreButton' // eslint-disable-line

export default class CarouselInterface extends Component {
  constructor(props) {
    super()

    this._timer = new Timer(this.onTimeoutHandler.bind(this), props.interval)
    this._projectsLength = props.projects.length

    this.state = {
      activeItem: props.projects[0],
      index: 0
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

    this.setPosition(newIndex);

    if (e.hasOwnProperty('speed')) {
      this.resetTimeout()
    }
  }

  setPosition(index) {
    if (this.props.projects.indexOf(this.props.projects[index]) === -1) {
      throw new Error(`Wrong index value sent, this.projects contains ${this.__projectsLength__} items. value sent: ${index}`)
    }

    this.setState({
      index, activeItem: this.props.projects[index]
    })
  }

  // verry dirty
  resetPogressBar() {
    const oldProgressBar = Array.from(this.base.querySelectorAll('.carousel__progress'))
    const newProgressBar = oldProgressBar[0].cloneNode(true)
    const parent = oldProgressBar[0].parentNode
    oldProgressBar.map(p => p.remove())
    parent.appendChild(newProgressBar)
  }

  componentDidUpdate() {
    this.resetPogressBar()
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
    console.log("render carousel");
    return (
      <section class="carousel">
        <header class="carousel__header">
          <nav>
            <ul class="carousel__header--menu">
              {this.props.projects.map(p => <li>{p.label || p.name}</li>)}
            </ul>
          </nav>
        </header>

        <div class="carousel__content">
          <aside class="carousel__aside">
            <div class="pagination">
              <p class="number">{this.state.index + 1}</p>
              <p class="number divider">{this._projectsLength}</p>
            </div>
          </aside>

          <main class="carousel__main">
            <div class="carousel__arrow">
              <button onClick={this.previous.bind(this)} class="carousel__arrow--prev">prev</button>
              <button onClick={this.next.bind(this)} class="carousel__arrow--next">next</button>
            </div>
            <h1>{this.state.activeItem.name}</h1>
            <LoadMoreButton onClickHandler={this.onLoadMoreHandler.bind(this)} />

            <div class="carousel__progress" style={{
              'animation-duration': this.props.interval + "ms"
            }}></div>
          </main>
        </div>

        <footer class="carousel__footer">
          <a href="#" class="about">about & contact</a>
        </footer>
      </section>
    )
  }
}
