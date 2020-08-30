import gsap from 'gsap'
import FixScroll from '@/lib/FixScroll'

const preventScroll = (e, x, y) => {
  e.preventDefault()
  window.scrollTo(x, y)
}


export default {
  mounted() {
    this._modal = {}

    this._modal.onMouseEnter = () => {
      console.log(this);
      this.$bus.$emit('cursor-difference')
    }

    this._modal.onMouseOut = () => {
      this.$bus.$emit('cursor-default')
    }

    const scrollUtil = new FixScroll()

    let scrollBlockerCallback = preventScroll

    ;
    [...this.$refs.cms_block.querySelectorAll('.wp-block-image, .wp-block-video')].forEach(el => {


      el.addEventListener('mouseenter', this._modal.onMouseEnter)
      el.addEventListener('mouseout', this._modal.onMouseOut)


      el.addEventListener('click', e => {
        e.preventDefault()

        const scaled = el.classList.contains('scaled')


        const update = () => {

          // full screen
          const scale = Math.min(
            window.innerWidth / el.offsetWidth,
            window.innerHeight / el.offsetHeight
          );

          // scale
          gsap.to(el, {
            scale: scaled ? 1 : scale,
            duration: 0.3,
            onStart: () => {
              // center media in view
              el.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })

              console.log(scaled);
              if (scaled) {
                console.log('remove listener');
                window.removeEventListener('scroll', scrollBlockerCallback)
              } else {
                // wait for media to be centered
                let scrollTimeout;
                addEventListener('scroll', () => {
                  clearTimeout(scrollTimeout);
                  scrollTimeout = setTimeout(() => {
                    // prevent scroll
                    const x = window.scrollX;
                    const y = window.scrollY;
                    scrollBlockerCallback = preventScroll.bind(this, e, x, y)
                    window.addEventListener('scroll', scrollBlockerCallback)
                  }, 100);
                });
              }
            }
          })
        }


        // update DOM
        el.classList.toggle('scaled')
        if (this.$refs.scale_overlay) {
          this.$refs.scale_overlay.classList.toggle('show')
        }


        update()
        window.addEventListener('resize', update)
      })
    })
  }
}
