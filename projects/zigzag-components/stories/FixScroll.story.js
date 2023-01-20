import "bootstrap/dist/css/bootstrap.css";
import FixScroll from "../javascript/FixScroll";

export default { title: "Javascript/Scroll" };

export const story = () => ({
  created() {
    this.scroll = new FixScroll();
  },
  mouted() {
    this.scrollState = this.scroll.state;
  },
  data() {
    return {
      scrollState: false,
      scrollbarVisibility: true,
    };
  },
  methods: {
    toggleScroll() {
      this.scroll.state ? this.scroll.unFix() : this.scroll.fix();
      this.scrollState = this.scroll.state;
    },
    toggleScrollbarVisibility() {
      document.head.insertAdjacentHTML(
        "beforeend",
        `<style>
			.hide-scrollbar::-webkit-scrollbar {
				display: none;
			}

			.hide-scrollbar {
				-ms-overflow-style: none;
				scrollbar-width: none;
			}

      </style>`
      );
      document
        .querySelector("html")
        .classList.toggle("hide-scrollbar", this.scrollbarVisibility);
      this.scrollbarVisibility = !this.scrollbarVisibility;
    },
  },
  template: `
  <section>
    <div class="row">
      <div class="col-lg-3 p-3 text-center sticky-top bg-light">
        <button @click="toggleScroll()" class="btn btn-primary">{{scrollState ? 'Enable' : 'Prevent' }} scroll</button>
        <button @click="toggleScrollbarVisibility()" class="btn btn-primary">{{scrollbarVisibility ? 'Hide' : 'Show' }} scrollbar</button>
      </div>
      <div class="col-lg-6 mt-5 mb-5">
      ${new Array(10)
        .fill(undefined)
        .map(
          () =>
            "<p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
        )
        .join("")}
      </div>
    </div>
  </section>
  `,
});
