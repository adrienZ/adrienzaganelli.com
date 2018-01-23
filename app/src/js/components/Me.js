import { Component, h } from 'preact' // eslint-disable-line
import CarouselArrows from '@js/components/CarouselArrows' // eslint-disable-line
import ExternalLink from '@js/components/ExternalLink' // eslint-disable-line
import { socialIcons } from '@js/models/utils'

const social = socialIcons.filter( (s, index) => {
  return [0, 1, 5].indexOf(index) > -1
})


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
        I’m a Paris-based Web developer and a 4th year student at <ExternalLink href="http://hetic.net/" title="HETIC, école web">HETIC</ExternalLink>.
        I'm currently looking for a 6 months <ExternalLink href="mailto:adrienzaganelli@gmail.com" target="_blank" class="underline" title="adrienzaganelli@gmail.com">internship</ExternalLink>.
        Also available for any freelance projects, I'm open for job opportunities.
      </p>
    </div>

    <div class="me__networks">
      <div class="me__networks--container">
        {social.map(
          icon =>
            <ExternalLink href={icon.href} class="me__networks--icon animated fadeIn">{icon.svg}</ExternalLink>
        )}
      </div>
    </div>


    <div class="carousel__progress" style={{
      'animation-duration': props.interval + 'ms',
      'animation-play-state': props.stopTimer ? 'paused' : 'running'
    }}></div>
  </div>
