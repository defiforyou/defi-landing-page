<template lang="pug">
#app.app
  common-header
  nuxt
  common-footer
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.app {
  background-image: radial-gradient(
    240px 240px at 80% 80px,
    rgba(94, 77, 94, 0.4) 0%,
    $--color-background-page 100%);
  @include media(md) {
    background-image: radial-gradient(
      520px 520px at 80% 120px,
      rgba(94, 77, 94, 0.4) 0%,
      $--color-background-page 100%);
  }
}
</style>
