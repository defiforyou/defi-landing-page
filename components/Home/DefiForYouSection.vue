<template lang="pug">
section.defi-for-you
  .container
    .dfy-flex.layout
      .wallets
        .screens
          .screen.metamask
            img(src="/img/wallet.metamask.jpg" alt="Metamask")
          .screen.binance
            img(src="/img/wallet.binance.jpg" alt="Binance")
          .screen.trustwallet
            img(src="/img/wallet.trustwallet.jpg" alt="Trustwallet")

        .flying-chips
          img.chip-bnb(src="/img/token.bnb.png")
          img.chip-btc(src="/img/token.btc.png")
          img.chip-dfy(src="/img/token.dfy.png")
          img.chip-nfts(src="/img/token.nfts.png")

      .text
        h2.title We've built a decentralized P2P loan economy on the blockchain.
        .description
          p Traditional loans are inflexible and inaccessible to most people in 2021. DeFi has proven there is a working use-case in decentralizing such financial services.
          p However, blockchain comes with anonymity and removes trusted third-parties, which limits the types of loans that can be issued. Why? Because some people are more likely to pay back a loan than others.
          p Trust and reputation still matters when issuing loans.
          p DeFi For You solves this by building an irrefutable, verifiable reputation system onto the blockchain and tying it together with decentralized finance services.
          p The result is a peer-to-peer loan economy, whereby lenders can trivially repossess collateral via smart contracts.
          p Now, for the first time, P2P loans can be issued to anyone, regardless of their reputation.
</template>

<script>
export default {
  mounted () {
    this.setup()
  },

  methods: {
    setup () {
      this.pin(960, 400, '.chip-bnb', { x: 320 })
      this.pin(1360, 300, '.chip-bnb', { x: 350 })
      this.pin(1660, 1400, '.chip-bnb', { x: 380 })
      this.pin(3060, 320, '.chip-bnb', { x: 200 })
      this.pin(3380, 260, '.chip-bnb', { x: 320, width: 180 })

      this.pin(1000, 400, '.chip-btc', { x: 80 })
      this.pin(1400, 300, '.chip-btc', { x: 100 })
      this.pin(1700, 1300, '.chip-btc', { x: 100 })
      this.pin(3000, 320, '.chip-btc', { x: 400 })
      this.pin(3320, 160, '.chip-btc', { x: 300, width: 180 })

      this.pin(980, 400, '.chip-nfts', { x: 250 })
      this.pin(1380, 300, '.chip-nfts', { x: 270 })
      this.pin(1680, 1400, '.chip-nfts', { x: 240 })
      this.pin(3080, 320, '.chip-nfts', { x: 160 })
      this.pin(3400, 180, '.chip-nfts', { x: 480, width: 190 })

      this.pin(900, 400, '.chip-dfy', { x: 100 })
      this.pin(1300, 300, '.chip-dfy', { x: 120 })
      this.pin(1600, 1600, '.chip-dfy', { x: 130 })
      this.pin(3200, 320, '.chip-dfy', { x: 500 })
      this.pin(3520, 100, '.chip-dfy', { x: 200 })
    },

    pin (offset, duration, chip, tween) {
      this.$scrollmagic
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
section.defi-for-you {
  padding: 4em 0;
  overflow: hidden;
  @include media(sm-down) {
    padding: 0;
  }
  .layout {
    align-items: center;
    @include media(sm-down) {
      flex-direction: column;
    }
  }
  .wallets {
    flex: 1;
    position: relative;
    @include media(sm-down) {
      margin-left: -20%;
      margin-right: -20%;
      flex: 0 360px;
      overflow: hidden;
      margin-bottom: -160px;
      opacity: .25;
      &:after {
        content: '';
        z-index: 4;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(0deg, $--color-background-page, transparent);
      }
    }
    @include media(xs-only) {
      flex: 0 480px;
      margin-bottom: -280px;
    }
    .flying-chips {
      pointer-events: none;
      user-select: none;
      @include media(md-down) {
        display: none;
      }
      *[class^='chip-'] {
        position: absolute;
        width: 150px;
        &.chip-bnb {
          top: 40%;
          left: 0;
          // z-index: 3;
        }
        &.chip-btc {
          bottom: 20%;
          right: 15%;
          // z-index: 3;
        }
        &.chip-dfy {
          top: 24%;
          right: 22%;
          // z-index: 5;
        }
        &.chip-nfts {
          top: 58%;
          left: 8%;
          // z-index: 5;
        }
      }
    }
    .screens {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      max-width: 640px;
      @include media(md) {
        max-width: 420px;
      }
      @include media(lg) {
        max-width: 500px;
      }
      .screen {
        min-width: 0;
        flex: 1;
        position: relative;
        &.metamask {
          z-index: 2;
          margin-top: 5em;
          // opacity: .75;
        }
        &.binance {
          z-index: 4;
          margin-top: 10em;
          margin-left: -136px;
          margin-right: -136px;
        }
        &.trustwallet {
          z-index: 1;
          // opacity: .5;
        }
        > img {
          border-radius: 16px;
          @include media(md) {
            width: 220px;
            border-radius: 16px;
          }
          @include media(lg) {
            width: 275px;
            border-radius: 24px;
          }
          box-shadow: 0 20px 40px 0 rgba($--color-background-page, .5);
        }
      }
    }
  }
  .text {
    flex: 1;
    z-index: 5;
    @include media(sm-down) {
      max-width: 560px;
      margin: 0 auto;
    }
  }
}
</style>
