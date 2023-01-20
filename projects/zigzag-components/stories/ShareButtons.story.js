import Share from "../components/Share.vue";

export default { title: "Ui" };

export const share = () => ({
  components: {
    Share,
  },
  template: `
    <div class="container min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center">
      <pre class="jumbotron">{
  url: "https://vuejs.org/",
  postTitle: "My post title",
}</pre>


      <Share url="https://vuejs.org/"  postTitle="My post title" />
    </div>`,
});
