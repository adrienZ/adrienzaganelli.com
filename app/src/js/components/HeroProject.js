import { Component, h } from 'preact' // eslint-disable-line
import LoadMoreButton from '@js/components/LoadMoreButton' // eslint-disable-line
import CarouselArrows from '@js/components/CarouselArrows' // eslint-disable-line

export default class HeroProject extends Component {
  // verry dirty
  resetPogressBar() {
    const oldProgressBar = Array.from(this.base.querySelectorAll('.carousel__progress'))
    if (!oldProgressBar.length) return

    const newProgressBar = oldProgressBar[0].cloneNode(true)
    const parent = oldProgressBar[0].parentNode
    oldProgressBar.map(p => p.remove())
    parent.appendChild(newProgressBar)
  }

  componentDidUpdate() {
    this.resetPogressBar()
  }

  render() {
    return (
      <div class="carousel__main--container">
        <div class="carousel__main--text">
          {!this.props.stopTimer &&
            <CarouselArrows
              next={this.props.next}
              previous={this.props.previous}
            />
          }
          {this.props.stopTimer &&
            <button class="btn" onClick={this.props.onClosePost}>EXIIIIIIIIIIT</button>
          }

          <h1>{this.props.project.name}</h1>
          <p>{this.props.project.description}</p>

          <div style="display: inline-block">
            {!this.props.stopTimer && <LoadMoreButton onClickHandler={this.props.onClickHandler} />}
            <div class="carousel__progress" style={{
              'animation-duration': this.props.interval + "ms",
              'animation-play-state': this.props.stopTimer ? 'paused' : 'running'
            }}></div>
          </div>
          <a href={this.props.project.link}> or go to site</a>

        </div>

        <a href="#" class="carousel__main--img" style={{ 'background-image': `url(${this.props.project.cover})` }}></a>
      </div>
    )
  }
}
