<template>
  <div class="c-modal" :data-id="id" :id="'c-modal-' + id">
    <!-- SCROLLABLE VIEWPORT -->
    <div
      class="c-modal__viewport u-transition u-overflow-auto"
      tabindex="-1"
      style="transition: 0.2s"
    >
      <!-- DECORATIVE OVERLAY -->
      <div
        class="c-modal__overlay js-overlay js-modal-close u-wrapper-panel"
      ></div>

      <!-- CONTAINER -->
      <div class="c-modal__container container-fluid u-full-height u-relative">
        <!-- MAIN -->
        <div
          class="c-modal__inner u-full-width u-transition"
          style="transition: 0.5s 0.1s"
        >
          <!-- CHILDREN COMPONENT -->
          <slot />
          <!-- END CHILDREN COMPONENT -->
        </div>
        <!-- END MAIN -->
      </div>
      <!-- END OF CONTAINER -->
    </div>
    <!-- END SCROLLABLE VIEWPORT -->
  </div>
</template>

<script>
export default {
  created() {
    // bind events because we dont use Vue for them
    this.open = this.open.bind(this);
    this.onKeyboard = this.onKeyboard.bind(this);
    this.close = this.close.bind(this);
    this.stay = this.stay.bind(this);
  },
  props: {
    // the id will be useful to bind open trigger
    id: {
      type: String,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    // allow events and prevent close on events zone
    this.$eventsZone = this.$el.querySelector(".js-modal-events");
    // custom events bidings
    this.bindEvents();
  },
  methods: {
    bindEvents() {
      if (this.$eventsZone) {
        // enable close when clicking outside of the modal (on the overlay)
        this.$eventsZone.addEventListener("click", this.stay);
        this.$el.addEventListener("click", this.close);
      } else {
        console.warn(
          "the following modal",
          this.$el,
          'have no interactive children.\nAdd the class: ".js-modal-events"'
        );
      }

      // open triggers
      const $triggers = document.querySelectorAll(
        '.js-modal-opener[data-modal="' + this.id + '"]'
      );
      $triggers.forEach((el) => {
        el.addEventListener("click", this.open);
      });

      // close triggers
      document.querySelectorAll(".js-modal-close").forEach((el) => {
        el.addEventListener("click", this.close);
      });
    },
    onOpen(e) {},
    onClose(e) {},
    open(e) {
      e.preventDefault();
      this.$el.classList.add("c-modal--open");
      this.isOpen = true;

      /*
       * enable focus,
       * tab index + visibility: visible,
       * focus, and reset tabindex to default
       */
      this.$eventsZone.tabIndex = "-1";
      this.$eventsZone.focus();
      this.$eventsZone.tabIndex = "0";

      window.addEventListener("keypress", this.onKeyboard);

      this.onOpen(e);
    },
    close(e) {
      e.preventDefault();
      this.$el.classList.remove("c-modal--open");
      this.isOpen = false;
      this.onClose(e);
    },
    stay(e) {
      // prevent this.close()
      e.stopPropagation();
    },
    onKeyboard(e) {
      switch (e.keyCode) {
        // escape
        case 27:
          this.close(e);
          window.removeEventListener("keypress", this.onKeyboard);
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.c-modal:deep {
  position: relative;

  .js-modal-events {
    // accesibility: visibility to enable :focus
    visibility: visible;
  }
}

.c-modal__viewport {
  // represent viewport scroll area
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  // scrollable
  overflow-y: auto;
  overflow-x: hidden;

  // initial state
  opacity: 0;
  pointer-events: none;
  visibility: hidden;

  .c-modal--open & {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
}

.c-modal__container {
  // width container
  height: 100%;
  position: relative;
  width: 80%;
  margin: auto;

  // center children
  display: flex;
  align-items: center;
}

.c-modal__overlay {
  // full screen
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  // allow scroll
  pointer-events: none;

  background-color: rgba(black, 0.5);
}

.c-modal__inner {
  // ie
  width: 100%;

  // allow margin top of children
  max-height: 100%;

  // initial state
  opacity: 0;

  .c-modal--open & {
    opacity: 1;
  }
}
</style>
