import { Component, h } from 'preact' // eslint-disable-line
import CarouselArrows from '@js/components/CarouselArrows' // eslint-disable-line

export default (props) =>
  <div>
    {!props.stopTimer &&
      <CarouselArrows
        next={props.next}
        previous={props.previous}
      />
    }
    <p>
      I’m a french Web developer and a 4th year student at <a href="http://hetic.net/" rel="noopener noreferrer" target="_blank" title="HETIC, école web" class="hint--top" aria-label="http://www.hetic.net/">HETIC</a>.
        I'm currently looking for a 6 months <a href="mailto:adrienzaganelli@gmail.com" rel="noopener noreferrer" target="_blank" class="underline" title="adrienzaganelli@gmail.com">internship</a>.
        Also available for any freelance projects, I'm open for job opportunities.
    </p>

    <div class="carousel__progress" style={{
      'animation-duration': props.interval + "ms",
      'animation-play-state': props.stopTimer ? 'paused' : 'running'
    }}></div>
  </div>
