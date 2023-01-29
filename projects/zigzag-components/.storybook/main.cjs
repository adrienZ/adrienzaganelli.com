module.exports = {
  stories: ["../**/*.story.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@geometricpanda/storybook-addon-badges",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {
    autodocs: true,
  },
};
