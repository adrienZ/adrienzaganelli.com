import { Component, h } from 'preact' // eslint-disable-line

export default props =>
  <div class="carousel__arrow">
    <button onClick={props.previous} class="carousel__arrow--prev">prev</button>
    <button onClick={props.next} class="carousel__arrow--next">next</button>
  </div>
