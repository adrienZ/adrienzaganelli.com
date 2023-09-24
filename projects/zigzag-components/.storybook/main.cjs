const { dirname, join } = require("path");

module.exports = {
  stories: ["../**/*.story.js"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@geometricpanda/storybook-addon-badges"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
