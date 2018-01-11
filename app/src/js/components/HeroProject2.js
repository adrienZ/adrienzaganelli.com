import { Component, h } from 'preact' // eslint-disable-line
import LoadMoreButton from '@js/components/LoadMoreButton' // eslint-disable-line
import CarouselArrows from '@js/components/CarouselArrows' // eslint-disable-line

export default class HeroProject2 extends Component {
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
      <div class="carousel__main--container test">
        <div class="carousel__main--text">

          <h1>{this.props.project.name}</h1>
          <p>{this.props.project.description}</p>
        </div>

        <div class="carousel__main--img-container">
          <div class="carousel__main--square">
            <div style="display: inline-block; width:100%">
              {!this.props.stopTimer && <LoadMoreButton onClickHandler={this.props.onClickHandler} />}
              <div class="carousel__progress" style={{
                'animation-duration': this.props.interval + "ms",
                'animation-play-state': this.props.stopTimer ? 'paused' : 'running'
              }}></div>
            </div>
            {!this.props.stopTimer &&
              <CarouselArrows
                next={this.props.next}
                previous={this.props.previous}
              />
            }
          </div>
          <div class="carousel__main--img" style={{ 'background-image': `url(${this.props.project.cover})` }}></div>
        </div>
      </div>
    )
  }
}
