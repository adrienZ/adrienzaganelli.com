<template>
  <div
    class="Container"
    :class="{
      ['Container--' + containerSize]: true,
    }"
  >
    <!--
			@slot Menu Item footer
			@binding {object} icon icon of the menu item
			@binding {string} text text of the menu item
		-->
    <slot />
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    /**
     * @values yo, yo, yo
     */
    containerSize: "largest" | "grid" | "compact" | "small";
    htmlTag?: string;
  }>(),
  {
    htmlTag: "section",
  }
);
</script>

<style lang="scss" scoped>
.Container {
  margin-left: auto;
  margin-right: auto;

  &--largest {
    max-width: 1980px;
  }

  &--compact {
    max-width: 1200px;
    padding: 0 16px;
  }

  &--grid {
    max-width: 1440px;
  }

  &--small {
    max-width: 808px;
    padding: 0 16px;
  }
}
</style>
