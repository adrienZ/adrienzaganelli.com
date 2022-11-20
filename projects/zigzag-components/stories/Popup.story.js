import Popup from "../components/Popup.vue";

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default { title: "Layout" };

export const popup = () => ({
  title: "Popup",
  components: {
    Popup,
  },
  template: `
    <div class="container min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center">
      <div>
        <button data-popup="demo-big" class="btn btn-secondary js-popup-opener mr-2">Open big popup</button>
        <button data-popup="demo-small" class="btn btn-secondary js-popup-opener">Open small popup</button>
      </div>


      <pre class="bg-dark text-light mt-4">
        <code>${escapeHtml(`
  <Popup id="demo">
    <div class="row">
      <div class="col-md-8 mx-auto my-5">
        <div class="js-popup-events p-3 bg-dark text-white">
            YOUR CONTENT
        </div>
      </div>
    </div>
  </Popup>
`)}</code>
</pre>

      <Popup id="demo-big">
        <div class="row">
          <div class="col-md-8 mx-auto my-5">

            <div class="js-popup-events p-3 bg-dark text-white">

            ${new Array(10)
              .fill(undefined)
              .map(
                () =>
                  "<p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
              )
              .join("")}

            <div class="mt-4">
              <a href="#logmein" class="btn btn-success mr-2">Log in</a>
              <button class="btn btn-light js-popup-close">Close</button>
            </div>

            </div>

          </div>
        </div>

      </Popup>
      <Popup id="demo-small">
        <div class="row">
          <div class="col-md-8 mx-auto my-5">

            <div class="js-popup-events p-3 bg-dark text-white">

            ${new Array(1)
              .fill(undefined)
              .map(
                () =>
                  "<p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
              )
              .join("")}

            <div class="mt-4">
              <button class="btn btn-light js-popup-close">Close</button>
            </div>

            </div>

          </div>
        </div>

      </Popup>
    </div>`,
});
