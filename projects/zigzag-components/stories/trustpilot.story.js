import { BADGE } from "@geometricpanda/storybook-addon-badges";
import TrustPilot from "../components/TrustPilot.vue";
import { TrustpilotTemplate } from "../javascript/models/trustpilot.ts";

export default {
  title: "TrustPilot",
  component: TrustPilot,
  argTypes: {
    templateId: {
      options: Object.values(TrustpilotTemplate),
      control: { type: "radio" },
    },
  },
  parameters: {
    badges: [BADGE.EXPERIMENTAL],
  },
};

export const Story = (args) => {
  return {
    components: {
      TrustPilot,
    },
    setup: () => ({ args }),
    template: `<TrustPilot v-bind="args" />`,
  };
};

Story.args = {
  theme: "white",
  templateId: TrustPilot.props.templateId.default,
  width: TrustPilot.props.width.default,
  height: TrustPilot.props.height.default,
};
