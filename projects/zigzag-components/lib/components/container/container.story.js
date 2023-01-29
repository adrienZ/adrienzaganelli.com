import { BADGE } from "@geometricpanda/storybook-addon-badges";
import Container from "./Container.vue";

export default {
  title: "Components/Container",
  component: Container,
  parameters: {
    badges: [BADGE.STABLE],
    componentSubtitle: "A subheader of the docs page here",
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
  argTypes: {
    containerSize: {
      control: { type: "radio" },

      options: ["largest", "grid", "compact", "small"],
    },
  },
};

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a nesciunt asperiores necessitatibus aperiam, mollitia veniam natus. Illum quia qui sed dolorem ipsa excepturi consequuntur. Cum porro inventore excepturi perferendis?`;

const Template = (args) => ({
  components: {
    Container,
  },
  setup: () => ({ args }),
  template: `
      <Container v-bind="args">${lorem.repeat(10)}</Container>
  `,
});

export const Default = Template.bind({});
Default.args = {
  containerSize: "grid",
};
