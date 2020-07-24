import gsap from 'gsap'

export default {
  mounted() {
    [...this.$refs.cms_block.querySelectorAll('.wp-block-image, .wp-block-video')].forEach(el => {
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
            onStart: () => el.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
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
