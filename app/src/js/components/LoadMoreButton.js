import { Component, h } from 'preact' // eslint-disable-line
import { glowButtonStyle } from '@js/models/utils'

export default props =>
  <a href="#" class="btn cta animated zoomIn" onClick={props.onClickHandler} style={glowButtonStyle(props.gradient, true)}>
    {props.children || "load more"}
  </a>
