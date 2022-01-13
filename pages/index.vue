<template lang="pug">
  .page.home
    .bulb
    //.flying-chips
    //  .container
    //    .chip-bnb
    //      img(src="/img/token.bnb.png" alt="BNB")
    //    .chip-btc
    //      img(src="/img/token.btc.png" alt="BTC")
    //    .chip-dfy
    //      img(src="/img/token.dfy.png" alt="DFY")
    //    .chip-nfts
    //      img(src="/img/token.nfts.png" alt="NFTs")
    .sections
      home-modal-reward(@close="closeRewardModal", v-if="isReward")
      .reward-mini(v-if="isRewardMini", @click="handleRewardMini")
        img.reward-icon(src="~assets/img/reward-click.png")
      home-hero-section#hero.sticky
      home-get-us-section#team
      home-price-tickers-section#price-tickers
      v-app(style="background-color: #171A23")
        home-buy-dfy#buy-dfy
        //home-how-work
        payment-alert
      home-defi-for-you-section#defi-for-you
      //home-solution-section#solution
      home-services-section#services
      //home-network-section#network
      home-partners-section#partners
      //home-team-section#team
      home-contact-section#contact
</template>

<script>
// import moment from 'moment'
// import get from 'lodash/get'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      isRewardMini: false
    }
  },
  computed: {
    ...mapState('reward', ['banners', 'isReward'])
  },

  async created () {
    await this.getStatus()
    await this.getBanners()
    // await this.getCurrencies()
  },

  mounted () {
    this.setup()
  },

  methods: {
    async connectWallet (walletName) {
      try {
        localStorage.setItem('extensionName', walletName)
        await this.$connectWallet(walletName, false)
        this.isSigning = false
        this.$emit('close')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e, 11)
        localStorage.removeItem('extensionName')
      }
    },
    ...mapActions('reward', ['getBanners', 'getStatus']),
    // ...mapActions('indaCoin', ['getCurrencies']),
    ...mapMutations('reward', ['SET_IS_REWARD']),
    setup () {
      if (window.innerWidth < 1200) {
        return
      }

      const step = 40
      const addSection = 220

      let reduce = step * 4
      this.pin(980 + addSection, 400 + addSection, '.chip-nfts', { x: 480 })
      this.pin(1380 + addSection, 300 + addSection, '.chip-nfts', { x: 480 })
      this.pin(1680 + addSection, 1400 + addSection, '.chip-nfts', { x: 480, y: reduce })
      this.pin(3080 + addSection, 320 + addSection - reduce, '.chip-nfts', { x: 480 })
      this.pin(3400 + addSection, 180 + addSection, '.chip-nfts', { x: 480, width: 190 })

      reduce = step * 3
      this.pin(1000 + addSection, 400 + addSection, '.chip-btc', { x: 300 })
      this.pin(1400 + addSection, 300 + addSection, '.chip-btc', { x: 300 })
      this.pin(1700 + addSection, 1300 + addSection, '.chip-btc', { x: 300, y: reduce })
      this.pin(3000 + addSection, 320 - reduce + addSection, '.chip-btc', { x: 300 })
      this.pin(3320 + addSection, 160 + addSection, '.chip-btc', { x: 300, width: 180 })

      reduce = step * 2
      this.pin(960 + addSection, 400 + addSection, '.chip-bnb', { x: 320 })
      this.pin(1360 + addSection, 300 + addSection, '.chip-bnb', { x: 320, y: reduce })
      this.pin(1660 + addSection, 1400 + addSection, '.chip-bnb', { x: 320 })
      this.pin(3060 + addSection, 320 - reduce + addSection, '.chip-bnb', { x: 320 })
      this.pin(3380 + addSection, 260 + addSection, '.chip-bnb', { x: 320, width: 180 })

      reduce = step * 1
      this.pin(900 + addSection, 400 + addSection, '.chip-dfy', { x: 200 })
      this.pin(1300 + addSection, 300 + addSection, '.chip-dfy', { x: 200 })
      this.pin(1600 + addSection, 1600 + addSection, '.chip-dfy', { x: 200, y: reduce })
      this.pin(3200 + addSection, 320 - reduce + addSection, '.chip-dfy', { x: 200 })
      this.pin(3520 + addSection, 100 + addSection, '.chip-dfy', { x: 200 })
    },

    pin (offset, duration, chip, tween) {
      return this.$scrollmagic
        .scene({
          triggerElement: '#app',
          triggerHook: '111',
          offset,
          duration
        })
        .setPin(chip, { pushFollowers: false })
        .setTween(chip, 1, tween)
        .addTo(this.$scrollmagic.controller_)
    },

    closeRewardModal () {
      this.SET_IS_REWARD(false)
      // this.isReward = false
      this.isRewardMini = true
    },

    handleRewardMini () {
      this.SET_IS_REWARD(true)
      // this.isReward = true
      this.isRewardMini = false
    }
  }
}
</script>

<style lang="scss" scoped>
.page.home {
  .flying-chips {
    pointer-events: none;
    user-select: none;
    height: 0;
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
        animation: floating-margin 7s linear infinite;
      }

      &.chip-btc {
        top: 1350px;
        left: 460px;
        animation: floating-margin 5s linear infinite;
      }

      &.chip-dfy {
        top: 1070px;
        left: 300px;
        animation: floating-margin 6s linear infinite;
      }

      &.chip-nfts {
        top: 1370px;
        left: 100px;
        animation: floating-margin 4s linear infinite, shine-up .6s linear infinite;
      }
    }
  }

  ::v-deep {
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

  .reward-mini {
    cursor: pointer;
    position: fixed;
    z-index: 1001;
    bottom: 100px;
    right: 20px;
    width: 80px;
    animation: ring 2s infinite;

    @media (min-width: 960px) {
      width: unset
    }

    @keyframes ring {
      0% {
        right: 20px;
        bottom: 100px
      }
      25% {
        right: 20px;
        bottom: 75px
      }
      50% {
        right: 45px;
        bottom: 75px
      }
      75% {
        right: 45px;
        bottom: 100px
      }
      100% {
        right: 20px;
        bottom: 100px
      }
    }
  }
}
</style>
