import "bootstrap/dist/css/bootstrap.css";
import Underline from "../components/text/Underline.vue";

export default { title: "Text" };

export const underline = () => ({
  components: {
    Underline,
  },
  template: `
    <div class="container">
      <div class="form-group"></div>
      <h1>Underline effects</h1>
      <div class="jumbotron w-100">
        <Underline />
      </div>
    </div>`,
});
