import { h } from 'preact' // eslint-disable-line

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



export const carouselMask = () =>
  <svg>
    <defs>
      <clipPath id="carousel__mask">
        <polygon id="Mask" points="259.694836 0 851 0 851 648 1.13686838e-13 648"></polygon>
      </clipPath>
    </defs>
  </svg>


export const detectMedia = (fileName, toString = false, motionComponent) => {
  const re = /(?:\.([^.]+))?$/
  const extension = re.exec(fileName)[1]

  if (extension === 'mp4') {
    return toString
      ? `<video class="carousel__main--video" src=${fileName} autoplay muted></video>`
      : <video key={motionComponent ? motionComponent.key : 0} class="carousel__main--video animated" src={fileName} autoplay loop muted></video>
  } else {
    return toString
      ? `<img class="carousel__main--img" src=${fileName} />`
      : <img key={motionComponent ? motionComponent.key : 0} class="carousel__main--img animated" key=""src={fileName} />
  }
}

export const footerSvg = () =>
  <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.17 464.41">
    <polygon class="cls-1" points="22.7 395.8 197.6 2 390 395.8 22.7 395.8"></polygon><polyline class="cls-2" points="197.6 2 277 164.6 302.5 216.8"></polyline><polyline class="cls-2" points="197.6 2 125.6 164.2 102.2 216.8"></polyline><line class="cls-3" x1="125.6" y1="164.2" x2="277" y2="164.2"></line><line class="cls-2" x1="125.6" y1="395.8" x2="277" y2="395.8"></line><line class="cls-2" x1="277" y1="164.6" x2="125.6" y2="395.8"></line><text class="cls-4" transform="translate(0 452.03)">ADRIEN Z</text><text class="cls-5" transform="translate(201.26 452.03)">A</text><text class="cls-4" transform="translate(229.87 452.03)">GANELLI</text></svg>
