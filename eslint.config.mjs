// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import pluginVue from "eslint-plugin-vue";

export default withNuxt(
	// Your custom configs here
	...pluginVue.configs["flat/recommended-error"],
	{
		name: "vue-migration-easier-temp",
		rules: {
			"vue/attributes-order": "off",
			"vue/html-indent": "off",
			"vue/multi-word-component-names": "warn",
		},
	},
	{
		name: "oxfmt-vue-compat",
		rules: {
			"vue/html-closing-bracket-newline": "off",
			"vue/html-self-closing": "off",
			"vue/max-attributes-per-line": "off",
			"vue/singleline-html-element-content-newline": "off",
		},
	},
	{
		name: "stricter-vue-config",
		rules: {
			"vue/attribute-hyphenation": ["error", "never"],
			"vue/component-name-in-template-casing": [
				"error",
				"PascalCase",
				{
					registeredComponentsOnly: true,
					ignores: [""],
				},
			],
			"vue/no-undef-components": [
				"error",
				{
					ignorePatterns: [],
				},
			],
			"vue/no-undef-directives": [
				"error",
				{
					ignore: [],
				},
			],
			"vue/no-unused-emit-declarations": "error",
		},
	},
);
