---
draft: false
title: Everything you need to create your first skill as a developer
date: 2026-05-15
image:
  src: /content/images/everything-you-need-to-create-your-first-skill-image.jpg
---

> It's 2026, your work probably asked you to use AI, but your security department won't help you... Skills are the easiest way to get started, yet they are still mostly text-based and can behave unreliably... Here is the workflow I use as a developer.

<!--more-->

## Quick definition

(Agent) Skill are a standardized way to give AI agents new capabilities and expertise. They follow the  [open agent skills standard](https://agentskills.io/home). **I strongly advise you to start here**.

<RichLink aria-hidden="true" href="https://agentskills.io/home" title=""></RichLink>

Here are the main things to remember:

- skills are files / folders of markdown text.
- SKILL.md is the entry point, other folders are: scripts, references, assets
- skills lifecycle is:
    1. discovery (skill content and metadata)
    2. activation (from your agent)
    3. execution
- skills metadata most important part is the `description`, as it should also include the skill trigger (activation).
- do not create a single of file of thousands lines (it will blow up your context window). use [progressive disclosure](https://agentskills.io/specification#progressive-disclosure).
- for complex or long tasks use [workflows](https://agentskills.io/skill-creation/best-practices#checklists-for-multi-step-workflows)


## Writing your own skill

Let's create our first skill ! I want to create a skill to enforce the usage of the recent [useTemplateRef](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) in Vue.js instead of the generic `ref` primitive.

The good thing about creating a skill is that you can get help from... well, MORE skills ! [Anthropic](https://github.com/anthropics/skills/tree/main/skills/skill-creator) and [OpenAI](https://github.com/openai/skills/tree/main/skills/.system/skill-creator) even provides their own !

Let's generate it (codex-cli 0.130.0, gpt-5.4 medium):

> $skill-creator create a SIMPLE skill to enforce the usage of useTemplateRef instead
of ref when coding with vue.js, make sure to check vue version before
enforcing the rule.
>
> Keep it short and not codex specific.
>
> https://vuejs.org/api/composition-api-helpers.html#usetemplateref
> https://vuejs.org/guide/typescript/composition-api.html#typing-template-refs
> https://vuejs.org/guide/typescript/composition-api.html#typing-component-template-refs

Here is our very own first skill ! it's not perfect, since type can be auto-infered, but it was to show how to use it with the skill-creator.


~~~markdown[.agents/skills/use-use-template-ref/SKILL.md]
---
name: vue-use-template-ref
description: Prefer `useTemplateRef()` over `ref()` for Vue template refs when editing Vue code, Vue SFCs, or Composition API examples. Use when the task involves DOM refs or component template refs, but check the Vue version first and enforce this only when the project is on Vue 3.5+ or otherwise supports `useTemplateRef()`.
---

# Vue Use Template Ref

Check the Vue version before changing anything.

- If Vue is 3.5+ or the project already uses `useTemplateRef()`, prefer `useTemplateRef()` for template refs.
- If Vue is older, keep `ref()` and do not enforce a migration.
- Apply this only to template refs. Do not replace ordinary reactive state refs.

Use patterns like:

```ts
const el = useTemplateRef<HTMLInputElement>('el')
const child = useTemplateRef<InstanceType<typeof ChildComponent>>('child')
```

Avoid patterns like:

```ts
const el = ref<HTMLInputElement | null>(null)
const child = ref<InstanceType<typeof ChildComponent> | null>(null)
```
~~~

### Validating the skill

Let's not forget to make sure it respects the specification, you can use
- [skill-ref](https://github.com/agentskills/agentskills/tree/main/skills-ref)
- [agent-ecosystem/skill-validator](https://github.com/agent-ecosystem/skill-validator) (**My recommandation**) and `skill-validator check --strict .agents/skills/vue-use-template-ref`


## Testing the skill

To make it short, evals are unit test for LLM behavior. My current idea is to use the [evalite.dev](https://v1.evalite.dev/) framework from the famous [@mattpocock](https://github.com/mattpocock).


<RichLink aria-hidden="true" href="https://v1.evalite.dev/" title=""></RichLink>

### Define the behavior you want

For this Vue skill, I only care about a few concrete behaviors:

- On Vue 3.5+, template refs should be migrated to `useTemplateRef()`.
- On Vue 3.4, the skill should not force that migration.
- Ordinary state refs should stay ordinary state refs.

That is already enough to start. You do not need fifty cases on day one. You need a few cases that represent the behavior you actually care about.

### Turn those behaviors into evals

I use Evalite because it makes it easy to define cases, run them repeatedly, and inspect the results.

In practice, each behavior becomes a small eval case:

- a fixture file to edit
- a user-style request
- some context, like the Vue version
- a few rules that tell me whether the result is acceptable

In order to keep this article short, you can find a concrete example on my Github, have a look ! <RichLink href="https://github.com/adrienZ/skill-development-demo" title="adrienZ/skill-development-demo"></RichLink>

## Conclusion

Creating a skill can make a big difference in your everyday life, but they are "just" text and the ouput of you LLM can vary.

As developer we have tools to make this better
- standard: Open agent skill
- "linters": skill-ref, skill-validator
- unit-test: evals

To be honest, my knowledge on evals is quite new, there is things to improve, A/B testing and model temperature could be good way to make a skill more reliable. Current evals systems are also not as structured as traditional unit tests are, this may change in the future !

If you want to learn more about evals, here some references from people who knows what they are doing 😝
- https://platform.claude.com/docs/en/test-and-evaluate/eval-tool
- https://agentskills.io/skill-creation/evaluating-skills
- https://developers.openai.com/blog/eval-skills
