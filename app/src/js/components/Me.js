import { Component, h } from 'preact' // eslint-disable-line
import CarouselArrows from '@js/components/CarouselArrows' // eslint-disable-line
import ExternalLink from '@js/components/ExternalLink' // eslint-disable-line

export default (props) =>
  <div class="me">
    {!props.stopTimer &&
      <CarouselArrows
        next={props.next}
        previous={props.previous}
      />
    }
    <p>
      I’m a french Web developer and a 4th year student at <ExternalLink href="http://hetic.net/" title="HETIC, école web" class="hint--top" aria-label="http://www.hetic.net/">HETIC</ExternalLink>.
        I'm currently looking for a 6 months <ExternalLink href="mailto:adrienzaganelli@gmail.com" target="_blank" class="underline" title="adrienzaganelli@gmail.com">internship</ExternalLink>.
        Also available for any freelance projects, I'm open for job opportunities.
    </p>

    <div class="carousel__progress" style={{
      'animation-duration': props.interval + 'ms',
      'animation-play-state': props.stopTimer ? 'paused' : 'running'
    }}></div>
  </div>
