<template lang="pug">
.page.home
  .bulb
  .sections
    home-hero-section#hero.sticky
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
.page.home {
  /deep/ {
    section {
      font-size: 14px;
      line-height: 1.5em;
      @include media(md) {
        font-size: 1rem;
        line-height: 1.5em;
      }
      h2.title {
        font-size: 1.8rem;
        line-height: 1.35em;
        @include media(md) {
          font-size: 2.25rem;
          line-height: 1.35em;
        }
        > em {
          color: $--color-primary;
          font-style: normal;
        }
      }
    }
  }
}
</style>
