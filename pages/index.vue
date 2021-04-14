<template lang="pug">
.page.home
  .bulb
  .flying-chips
    .container
      .chip-bnb
        img(src="/img/token.bnb.png" alt="BNB")
      .chip-btc
        img(src="/img/token.btc.png" alt="BTC")
      .chip-dfy
        img(src="/img/token.dfy.png" alt="DFY")
      .chip-nfts
        img(src="/img/token.nfts.png" alt="NFTs")
  .sections
    home-hero-section#hero.sticky
    home-price-tickers-section#price-tickers
    home-defi-for-you-section#defi-for-you
    home-solution-section#solution
    home-services-section#services
    home-network-section#network
    home-partners-section#partners
    home-team-section#team
    home-contact-section#contact
</template>

<script>
export default {
  mounted () {
    this.setup()
  },

  methods: {
    setup () {
      if (window.innerWidth < 1200) { return }

      const step = 50

      let reduce = step * 4
      this.pin(980, 400, '.chip-nfts', { x: 250 })
      this.pin(1380, 300, '.chip-nfts', { x: 270 })
      this.pin(1680, 1400, '.chip-nfts', { x: 240, y: reduce })
      this.pin(3080, 320 - reduce, '.chip-nfts', { x: 160 })
      this.pin(3400 - reduce, 180, '.chip-nfts', { x: 480, width: 190 })

      reduce = step * 3
      this.pin(1000, 400, '.chip-btc', { x: 80 })
      this.pin(1400, 300, '.chip-btc', { x: 100 })
      this.pin(1700, 1300, '.chip-btc', { x: 100, y: reduce })
      this.pin(3000, 320 - reduce, '.chip-btc', { x: 400 })
      this.pin(3320 - reduce, 160, '.chip-btc', { x: 300, width: 180 })

      reduce = step * 2
      this.pin(960, 400, '.chip-bnb', { x: 320 })
      this.pin(1360, 300, '.chip-bnb', { x: 350 })
      this.pin(1660, 1400, '.chip-bnb', { x: 380, y: reduce })
      this.pin(3060, 320 - reduce, '.chip-bnb', { x: 200 })
      this.pin(3380 - reduce, 260, '.chip-bnb', { x: 320, width: 180 })

      reduce = step * 1
      this.pin(900, 400, '.chip-dfy', { x: 100 })
      this.pin(1300, 300, '.chip-dfy', { x: 120 })
      this.pin(1600, 1600, '.chip-dfy', { x: 130, y: reduce })
      this.pin(3200, 320 - reduce, '.chip-dfy', { x: 500 })
      this.pin(3520 - reduce, 100, '.chip-dfy', { x: 200 })
    },

    pin (offset, duration, chip, tween) {
      return this.$scrollmagic
        .scene({
          triggerElement: '#app',
          triggerHook: '0',
          offset,
          duration
        })
        .setPin(chip, { pushFollowers: false })
        .setTween(chip, 1, tween)
        .addTo(this.$scrollmagic.controller_)
    }
  }
}
</script>

<style lang="scss" scoped>
.page.home {
  .flying-chips {
    pointer-events: none;
    user-select: none;
    @include media(md-down) {
      display: none;
    }
    .container {
      position: relative;
    }
    *[class^='chip-'] {
      position: absolute;
      width: 150px;
      &.chip-bnb {
        top: 1220px;
        left: 30px;
        // animation: floating 8s infinite ease-in-out reverse;
        // z-index: 3;
      }
      &.chip-btc {
        top: 1350px;
        left: 360px;
        // animation: floating 7s infinite ease-in-out reverse;
        // z-index: 3;
      }
      &.chip-dfy {
        top: 1070px;
        left: 300px;
        // animation: floating 10s infinite ease-in-out;
        // z-index: 5;
      }
      &.chip-nfts {
        top: 1370px;
        left: 70px;
        animation: shine-up .6s infinite ease-in-out;
        // animation: floating 9s infinite ease-in-out;
        // z-index: 5;
      }
    }
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
