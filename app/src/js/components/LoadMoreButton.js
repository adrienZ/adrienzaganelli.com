import { Component, h } from 'preact' // eslint-disable-line
import { hex2rgb } from '@js/models/utils'

export default props =>
  <a href="#" class="btn cta animated zoomIn" onClick={props.onClickHandler} style={
    `
      background: linear-gradient(to right, ${props.gradient[0]}, ${props.gradient[1]});
      box-shadow:
        -.5rem 0 2rem .1rem rgba(${hex2rgb(props.gradient[0])}, .35),
        -.5rem 0 4rem .1rem rgba(${hex2rgb(props.gradient[0])}, .15),
        .5rem 0 2rem .1rem rgba(${hex2rgb(props.gradient[1])}, .35),
        .5rem 0 4rem .1rem rgba(${hex2rgb(props.gradient[1])}, .15);
      `
  }>
    {props.children || "load more"}
  </a>
