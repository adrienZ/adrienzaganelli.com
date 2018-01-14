import { Component, h } from 'preact' // eslint-disable-line
import LoadMoreButton from '@js/components/LoadMoreButton' // eslint-disable-line
import CarouselArrows from '@js/components/CarouselArrows' // eslint-disable-line
import { carouselMask } from '@js/models/utils' // eslint-disable-line

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

          <div style="display: flex;">
            {!this.props.stopTimer && false &&
              <CarouselArrows
                next={this.props.next}
                previous={this.props.previous}
              />
            }
            <div>
              <h1 class="carousel__title">{this.props.project.name.toLowerCase()}</h1>
              <p class="carousel__description">{this.props.project.description}</p>
            </div>

          </div>

          <div style="display: inline-block; margin: 0 auto;">
            {!this.props.stopTimer && <LoadMoreButton onClickHandler={this.props.onClickHandler} >case study</LoadMoreButton>}
          </div>

        </div>

        <div class="carousel__main--img-container">
          <div class="carousel__main--img" style={{ 'background-image': `url(${this.props.project.cover})` }} ></div>
          <div class="carousel__progress" style={{
            'animation-duration': this.props.interval + "ms",
            'animation-play-state': this.props.stopTimer ? 'paused' : 'running'
          }}></div>
        </div>
      </div>
    )
  }
}
