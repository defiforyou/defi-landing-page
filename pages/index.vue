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
  mounted () {
    this.$nextTick(() => {
      this.setup()
    })
  },

  methods: {
    setup () {
      this.pin(960, 400, '.chip-bnb', { x: 380 })
      this.pin(1360, 300, '.chip-bnb', { x: 400, opacity: 1 })

      this.pin(1000, 400, '.chip-btc', { x: 80 })
      this.pin(1400, 300, '.chip-btc', { x: 100, opacity: 1 })

      this.pin(980, 400, '.chip-nfts', { x: 250 })
      this.pin(1380, 300, '.chip-nfts', { x: 270, opacity: 1 })

      this.pin(900, 400, '.chip-dfy', { x: 100 })
      this.pin(1300, 300, '.chip-dfy', { x: 120, opacity: 1 })
    },

    pin (offset, duration, chip, tween) {
      this.$scrollmagic
        .scene({
          triggerElement: '#app',
          triggerHook: '0',
          offset,
          duration
        })
        .setPin(chip)
        .setTween(chip, 1, tween)
        .addTo(this.$scrollmagic.controller_)
    }
  }
}
</script>

<style lang="scss" scoped>
.page.home {
  *[class^='chip-'] {
    position: absolute;
  }
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
