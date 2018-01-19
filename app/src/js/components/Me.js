import { Component, h } from 'preact' // eslint-disable-line
import CarouselArrows from '@js/components/CarouselArrows' // eslint-disable-line
import ExternalLink from '@js/components/ExternalLink' // eslint-disable-line

export default (props) =>
  <div class="me">
    <div class="me__text">
      {!props.stopTimer &&
        <CarouselArrows
          gradient={[null, null]}
          next={props.next}
          previous={props.previous}
        />
      }
      <p>
        I’m a french Web developer and a 4th year student at <ExternalLink href="http://hetic.net/" title="HETIC, école web">HETIC</ExternalLink>.
        I'm currently looking for a 6 months <ExternalLink href="mailto:adrienzaganelli@gmail.com" target="_blank" class="underline" title="adrienzaganelli@gmail.com">internship</ExternalLink>.
        Also available for any freelance projects, I'm open for job opportunities.
      </p>
    </div>

    <div class="carousel__progress" style={{
      'animation-duration': props.interval + 'ms',
      'animation-play-state': props.stopTimer ? 'paused' : 'running'
    }}></div>
  </div>
