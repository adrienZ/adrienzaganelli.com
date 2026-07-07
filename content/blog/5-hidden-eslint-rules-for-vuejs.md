---
draft: false
title: 5 hidden ESLint Vue.js rules for happier teams
date: 2026-07-08
image:
  src: /content/images/5-hidden-eslint-rules-for-vuejs.webp
---

Vue projects often stop at the recommended ESLint preset, It's fine until your coworkers (and their agents) have different conventions. Auto-import errors, casing and dead code are not caught by the compiler. I keep a small `stricter-vue-config` block with five extra rules that does not belong to any eslint preset.

<!--more-->


```ts
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
}
```

Let's go through each rule.

## 1. [`vue/attribute-hyphenation`](https://eslint.vuejs.org/rules/attribute-hyphenation.html)

This one is opinionated because I explicitly set it to `"never"`.

That means I want this:

```vue
<MyButton :isActive="true" />
```

and not this:

```vue
<MyButton :is-active="true" />
```

Many Vue teams default to kebab-case for attributes in templates because it looks closer to plain HTML. I prefer the opposite in component land: differ from HTML attributes, if the prop is called `isActive` in JavaScript, I want to read `isActive` in the template too (easier for search and replace).


## 2. [`vue/component-name-in-template-casing`](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)

Same idea as the previous rule, but for component names.

```vue
<UserProfileCard />
```

instead of:

```vue
<user-profile-card />
```

It pairs well with TypeScript and IDE tooling:
- Some themes highlight PascalCase in a different color from regular HTML tags.
- Code review gets easier because custom components stand out.

## 3. [`vue/no-undef-components`](https://eslint.vuejs.org/rules/no-undef-components.html)

If you're not a fan of Nuxt auto-imports like I am, this rule catches component usage that Vue cannot resolve. This matters a lot to me because Vue's compiler does not catch these issues.

Typical examples:
- typo in the component name
- renamed file but stale template tag
- missing import in a non auto-import context
- wrong assumption about what Nuxt auto-registers

Without this rule, you often discover the mistake too late:

- at runtime
- during visual QA
- after SSR output looks wrong
- after removing or refactoring global components

## 4. [`vue/no-undef-directives`](https://eslint.vuejs.org/rules/no-undef-directives.html)

Same as before, but for directives: they're easy to miss or misspell, and the compiler does not catch it.

This rule flags cases like:

```vue
<div v-interset-observer />
```

instead of:

```vue
<div v-intersection-observer />
```

It also catches situations where:
- a custom directive was removed but templates still use it
- a plugin registration changed
- a directive name was copied from another app and never actually existed here

## 5. `vue/no-unused-emit-declarations`

Typescript can spot unused const or function, but not unused event in a component, this can lead to a lot of deadcode if the handlers are kept (and it happens a lot with agentic coding).

```ts
const emit = defineEmits<{
	save: [id: string]
	cancel: []
}>();
```

If one of those events is never emitted, one of two things is usually true:
- the component API drifted and the declaration is stale
- a feature is half-implemented and the template or script forgot to emit the event

## Final thought

If you only steal one idea from this config, make it `vue/no-undef-components`.

If you want the full package, keep all five together. They work well as a small “anti-drift” preset for teams that already know Vue and want templates to stay boring, predictable, and searchable over time.
