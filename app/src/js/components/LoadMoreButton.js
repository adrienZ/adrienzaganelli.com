import { Component, h } from 'preact' // eslint-disable-line
import { glowButtonStyle } from '@js/models/utils'

export default props =>
  <a href="#" id={props.id} class="btn cta carousel__load-more animated zoomIn" onClick={props.onClickHandler} style={glowButtonStyle(props.gradient, true)}>
    <style>
      .carousel__load-more#{props.id}:before {`{${
        glowButtonStyle(props.gradient.slice(0).reverse(), true, true)
      }`}
    </style>
    {props.children || "load more"}
  </a>
