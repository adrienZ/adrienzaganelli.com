import { Component, h } from 'preact' // eslint-disable-line
import { arrowSvg } from '@js/models/utils'

export default props =>
  <div class="carousel__arrow">
    <button onClick={props.previous} class="carousel__arrow--prev">{h(arrowSvg)}</button>
    <button onClick={props.next} class="carousel__arrow--next">{h(arrowSvg)}</button>
  </div>
