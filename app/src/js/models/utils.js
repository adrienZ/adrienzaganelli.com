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
      : <video key={motionComponent ? motionComponent.key : 0} class="carousel__main--video animated" autoplay loop muted>
        <source src={fileName} type="video/mp4" />
      </video>
  } else {
    return toString
      ? `<img class="carousel__main--img" src=${fileName} />`
      : <img key={motionComponent ? motionComponent.key : 0} class="carousel__main--img animated" key=""src={fileName} />
  }
}

export const footerSvg = () =>
  <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.17 464.41">
    <polygon class="cls-1" points="22.7 395.8 197.6 2 390 395.8 22.7 395.8"></polygon><polyline class="cls-2" points="197.6 2 277 164.6 302.5 216.8"></polyline><polyline class="cls-2" points="197.6 2 125.6 164.2 102.2 216.8"></polyline><line class="cls-3" x1="125.6" y1="164.2" x2="277" y2="164.2"></line><line class="cls-2" x1="125.6" y1="395.8" x2="277" y2="395.8"></line><line class="cls-2" x1="277" y1="164.6" x2="125.6" y2="395.8"></line><text class="cls-4" transform="translate(0 452.03)">ADRIEN Z</text><text class="cls-5" transform="translate(201.26 452.03)">A</text><text class="cls-4" transform="translate(229.87 452.03)">GANELLI</text></svg>

export const hex2rgb = hex => {
  return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

export const glowButtonStyle = (gradient, shadow) =>
  `
  background: linear-gradient(to right, ${gradient[0]}, ${gradient[1]});
  outline-color: ${gradient[0]};
  ${ shadow
    ? `box-shadow:
      -.5rem 0 2rem .1rem rgba(${hex2rgb(gradient[0])}, .35),
      -.5rem 0 4rem .1rem rgba(${hex2rgb(gradient[0])}, .15),
      .5rem 0 2rem .1rem rgba(${hex2rgb(gradient[1])}, .35),
      .5rem 0 4rem .1rem rgba(${hex2rgb(gradient[1])}, .15);`
    : ''
}
`

export const closeIcon = () =>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;">
    <path class="st0" d="M137.1,128l75.5-75.5c2.5-2.5,2.5-6.6,0-9.1s-6.6-2.5-9.1,0L128,118.9L52.5,43.5C50,41,46,41,43.5,43.5 s-2.5,6.6,0,9.1l75.5,75.5l-75.5,75.5c-2.5,2.5-2.5,6.6,0,9.1c1.2,1.2,2.9,1.9,4.5,1.9s3.3-0.6,4.5-1.9l75.5-75.5l75.5,75.5 c1.2,1.2,2.9,1.9,4.5,1.9s3.3-0.6,4.5-1.9c2.5-2.5,2.5-6.6,0-9.1L137.1,128z"/>
  </svg>

export const socialIcons = [
  {
    svg: <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;">
      <path class="st0" d="M16,0C7.2,0,0,7.2,0,16c0,7.1,4.6,13.1,10.9,15.2c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.8 c-4.4,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3 c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6 c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3 c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,2.9c0,2,0,3.9,0,4.4c0,0.4,0.3,0.9,1.1,0.7C27.4,29.1,32,23.1,32,16C32,7.2,24.8,0,16,0 z"/>
    </svg>,
    href: 'https://github.com/adrienZ'
  },
  {
    svg: <svg version="1.1" x="0px" y="0px"
      viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;">
      <path class="st0" d="M15.5,3h-7C5.5,3,3,5.5,3,8.5v7c0,3,2.5,5.5,5.5,5.5h7c3,0,5.5-2.5,5.5-5.5v-7C21,5.5,18.5,3,15.5,3z M19.5,15.5c0,2.2-1.8,4-4,4h-7c-2.2,0-4-1.8-4-4v-7c0-2.2,1.8-4,4-4h7c2.2,0,4,1.8,4,4V15.5z"/>
      <path class="st0" d="M12,7.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5s4.5-2,4.5-4.5S14.5,7.5,12,7.5z M12,15c-1.7,0-3-1.3-3-3s1.3-3,3-3 s3,1.3,3,3S13.7,15,12,15z"/>
      <circle class="st0" cx="16.7" cy="7.3" r="1" />
    </svg>,
    href: 'https://www.instagram.com/adrienzag/'
  },
  {
    svg: <svg version="1.1" x="0px" y="0px" viewBox="0 0 56.7 56.7" style="enable-background:new 0 0 56.7 56.7;">
      <path class="st0" d="M52.8,15.1c-1.8,0.8-3.8,1.3-5.8,1.6c2.1-1.2,3.7-3.2,4.4-5.6c-2,1.2-4.1,2-6.4,2.5c-1.8-2-4.5-3.2-7.4-3.2 c-5.6,0-10.1,4.5-10.1,10.1c0,0.8,0.1,1.6,0.3,2.3C19.4,22.3,12,18.3,7,12.2c-0.9,1.5-1.4,3.2-1.4,5.1c0,3.5,1.8,6.6,4.5,8.4 c-1.7-0.1-3.2-0.5-4.6-1.3c0,0,0,0.1,0,0.1c0,4.9,3.5,9,8.1,9.9c-0.8,0.2-1.7,0.4-2.7,0.4c-0.7,0-1.3-0.1-1.9-0.2c1.3,4,5,6.9,9.4,7 C15.1,44.3,10.7,46,6,46c-0.8,0-1.6,0-2.4-0.1c4.5,2.9,9.8,4.5,15.5,4.5c18.6,0,28.8-15.4,28.8-28.8c0-0.4,0-0.9,0-1.3 C49.8,18.9,51.5,17.1,52.8,15.1z"/>
    </svg>,
    href: 'https://twitter.com/adri_zag'
  },
  {
    svg: <svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;">
      <rect x="3" y="9" class="st0" width="4" height="11"/>
      <circle class="st0" cx="5" cy="5" r="2"/>
      <path class="st0" d="M16.5,8.2c-1.4,0-2.7,0.6-3.5,1.7V9H9v11h4v-7c0-1.1,0.9-2,2-2s2,0.9,2,2v7h4v-7.2C21,10.3,19,8.2,16.5,8.2z"/>
    </svg>,
    href: 'https://www.linkedin.com/in/adrienzaganelli'
  },
  {
    svg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;">
      <g id="_x36__stroke">
        <g id="Codepen">
          <rect class="st0" width="128" height="128" style="fill: transparent;" />
          <path id="Codepen_1_" class="st1" d="M117,73.2L103.2,64l13.8-9.2V73.2z M69.5,112.2V86.6l23.8-15.9l19.2,12.9L69.5,112.2z M64,77 L44.5,64L64,51l19.5,13L64,77z M58.5,112.2L15.4,83.5l19.3-12.9l23.8,15.9V112.2z M11,54.8L24.8,64L11,73.2V54.8z M58.5,15.8v25.7 l-23.8,16L15.4,44.5L58.5,15.8z M69.5,15.8l43.1,28.7L93.3,57.4l-23.8-16V15.8z M128,43.8c0-0.1,0-0.2,0-0.2 c0-0.2-0.1-0.3-0.1-0.5c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.1-0.2-0.2-0.4 c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.1-0.1-0.2-0.2 c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.2-0.1-0.2-0.2c0,0-0.1,0-0.1-0.1l-58.5-39c-1.8-1.2-4.3-1.2-6.1,0l-58.5,39 c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.2,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3 c-0.1,0.1-0.1,0.2-0.2,0.2C1,41.3,1,41.4,0.9,41.5c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.1,0.2-0.2,0.4c0,0.1-0.1,0.2-0.1,0.3 c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0.1-0.1,0.3-0.1,0.5c0,0.1,0,0.2,0,0.2C0,44,0,44.3,0,44.5v39 c0,0.2,0,0.5,0.1,0.7c0,0.1,0,0.2,0,0.2c0,0.2,0.1,0.3,0.1,0.5c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.3,0.1,0.4 c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.4c0.1,0.1,0.1,0.2,0.2,0.3C1,86.6,1,86.7,1.1,86.8C1.2,86.9,1.2,87,1.3,87 c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0.1,0,0.1,0.1l58.5,39 c0.9,0.6,2,0.9,3.1,0.9c1.1,0,2.1-0.3,3.1-0.9l58.5-39c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3 c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3 c0.1-0.1,0.1-0.2,0.2-0.4c0-0.1,0.1-0.2,0.1-0.3c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.1-0.3c0-0.2,0.1-0.3,0.1-0.5 c0-0.1,0-0.2,0-0.2c0-0.2,0-0.5,0-0.7v-39C128,44.3,128,44,128,43.8z"/>
        </g>
      </g>
    </svg>,
    href: 'https://codepen.io/adri_zag/'
  }
]
