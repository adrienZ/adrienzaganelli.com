import { h } from 'preact' // eslint-disable-line


export const doFill = (value) => value ? 'fill' : null

export const arrowSvg = (id = '') =>
  <svg class="previous" version="1.1" id={id} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 22" style="enable-background:new 0 0 40 22;">
    <g id="Symbols">
      <g id="arrow-nav" transform="translate(20.000000, -1.000000)">
        <g id="Group-6-Copy" transform="translate(-20.000000, 0.000000)">
          <g transform="translate(20.000000, 11.582563) scale(1, -1) translate(-20.000000, -11.582563) translate(0.000000, 0.582563)">

            <g id="Group" transform="translate(19.978560, 10.563606) scale(-1, 1) rotate(90.000000) translate(-19.978560, -10.563606) translate(9.478560, -8.936394)">
              <path id="Shape" class="st0" d="M20.1,20.2c-0.2,0-0.4-0.1-0.6-0.2L0.3,1.4C0,1.1,0,0.6,0.3,0.3s0.8-0.3,1.1,0l19.2,18.5
                c0.3,0.3,0.3,0.8,0,1.1C20.5,20.1,20.3,20.2,20.1,20.2z"></path>
              <path id="Shape_1_" class="st0" d="M0.9,38.8c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.3-0.3-0.8,0-1.1l19.2-18.7c0.3-0.3,0.8-0.3,1.1,0
              c0.3,0.3,0.3,0.8,0,1.1L1.4,38.6C1.3,38.8,1.1,38.8,0.9,38.8z"></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>



export const carouselMask = () => {
  return (

    <svg>
      <defs>
        <clipPath id="carousel__mask">
          <polygon id="Mask" points="259.694836 0 851 0 851 648 1.13686838e-13 648"></polygon>
        </clipPath>
      </defs>

    </svg>
  )
}
/*
  <defs>
    <polygon id="path-1" points="259.694836 0 851 0 851 648 1.13686838e-13 648"></polygon>
  </defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="---Home-Page" transform="translate(-710.000000, -131.000000)">
      <g id="Image-container" transform="translate(710.000000, 131.000000)">
        <mask id="mask-2" fill="white">
          <use xlink=":" href="#path-1"></use>
        </mask>
        <use id="Mask" fill="#D8D8D8" xlink=":" href="#path-1"></use>
      </g>
    </g>
  </g>
  */
