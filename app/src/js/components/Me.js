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
    {props.stopTimer &&
      <button class="btn" onClick={this.props.onClosePost}>EXIIIIIIIIIIT</button>
    }
    <p>I’m a french Web developer and a 4th year student at HETIC. I'm currently looking for a 6 months internship. Also available for any freelance projects, I'm open for job opportunities.</p>
  </div>
