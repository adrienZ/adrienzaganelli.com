import gsap from 'gsap'
import FixScroll from '@/lib/FixScroll'


export default {
  mounted() {
    this._modal = {}
    const scrollUtil = new FixScroll()

    this._modal.scrollUtil = scrollUtil

    this._modal.onMouseEnter = () => {
      this.$bus.$emit('cursor-difference')
    }

    this._modal.onMouseOut = () => {
      this.$bus.$emit('cursor-default')
    }

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

          const boundings = el.getBoundingClientRect()

          // scale
          gsap.to(el, {
            scale: scaled ? 1 : scale,
            duration: 0.3,
            x: !scaled ? 0 : -boundings.left + (window.innerWidth - (el.offsetWidth * scale)) / 2,
            y: !scaled ? 0 : -boundings.top + (window.innerHeight - (el.offsetHeight * scale)) / 2,
            onStart: () => {
              gsap.set(el, {
                transformOrigin: 'left top'
              })

              if (scaled) {
                scrollUtil.unFix()
              } else {
                scrollUtil.fix()
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
  },
  destroyed() {
    this._modal.scrollUtil.unFix()
  }
}
