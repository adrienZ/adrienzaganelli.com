<template>
  <div class="demo-underline">
    <div class="border border-secondary p-3 rounded">
      <h2>Multine underline</h2>
      <a class="underline--hover lead" style="cursor: pointer">
        test linqqkyyyyjj <br />
        multine link</a
      >
    </div>

    <div class="mt-4 p-3 border border-secondary rounded">
      <h2>Underline reset</h2>
      <a class="underline--link lead" style="cursor: pointer"
        >test linqqkyyyyjj <br />
        multine link</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}

@function strip-units($number) {
  @return $number / ($number * 0 + 1);
}

.underline {
  @mixin text-line-gradient(
    $size: 8%,
    $color: red,
    $transition-duration: 0.3s
  ) {
    $transparent-offset: strip-units($size) + 0.01 + unquote("%");

    background-image: linear-gradient(
      to top,
      $color 0%,
      $color $size,
      transparent $transparent-offset
    );
    // allow animation by no repeating
    background-repeat: no-repeat;
    transition: background-size $transition-duration;
  }

  &--hover {
    @include text-line-gradient(8%, green);
    background-size: 0 100%;
    // box-decoration-break: clone;

    &:hover {
      background-size: 100% 100%;
    }
  }

  &--link {
    @include text-line-gradient(10%, red);
    transition: none;

    &:hover {
      animation: underline-reset 1s both;
    }
  }
}

@keyframes underline-reset {
  0% {
    background-size: 100% 100%;
    background-position: bottom right;
  }
  50% {
    background-size: 0 100%;
    background-position: bottom right;
  }
  50.01% {
    background-position: bottom left;
  }
  100% {
    background-size: 100% 100%;
    background-position: bottom left;
  }
}
</style>

<script>
export default {};
</script>
