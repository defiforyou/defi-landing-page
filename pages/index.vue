<template lang="pug">
.page.home
  home-hero-section#hero
  home-price-tickers-section#price-tickers
  home-defi-for-you-section#defi-for-you
  home-solution-section#solution
  home-services-section#services
  home-network-section#network
  home-team-section#team
  home-contact-section#contact
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.page.home /deep/ {
  section {
    h2.title {
      font-size: 2.25rem;
      line-height: 1.35em;
      > em {
        color: $--color-primary;
        font-style: normal;
      }
    }
  }
}
</style>
