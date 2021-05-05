<template lang="pug">
section.hero
  .container
    .greeting
      h1.headline First-ever platform where you can loan against NFTs
      //- h1.headline Ever&nbsp;
        br.xso
        | thought of
        br
        | becoming
        br
        | your own bank?
      .preview
        .video
          .thumbnail(@click="playing = true")
            img.badge(src="/img/badge.youtube.svg" alt="Youtube")
        .description
          p DeFi For You.™ — A new decentralized P2P loan economy and the first-ever&nbsp;
            strong.special P2P NFT trading platform
            | &nbsp;built on the Binance Smart Chain, powered by the&nbsp;
            strong $DFY
            | &nbsp;smart contract token.
      .actions
        popover-exchanges
          a.dfy-button.dfy-button--primary Buy DFY on Exchanges

        //- a.dfy-button.dfy-button--ghost(:href="urls.whitepaper" target="_blank" rel="noopener") Whitepaper
        a.dfy-button.dfy-button--special(:href="urls.trade" target="_blank" rel="noopener") Trade NFTs
        //- nuxt-link.dfy-button.dfy-button--special(
          :to="{ name: 'trade-nfts' }"
          rel="noopener") Trade NFTs

    .canvas
      img.phone(src="/img/hero.phone.png" alt="Phone")
      img.token.bnb(src="/img/token.bnb.png" alt="BNB")
      img.token.dfy(src="/img/token.dfy.png" alt="DFY")
      img.token.nfts(src="/img/token.nfts.png" alt="NFTs")
      img.token.btc(src="/img/token.btc.png" alt="BTC")

    .player(v-if="playing" @click="playing = false")
      .close(@click="playing = false")
        x-icon(size="48" stroke-width="1")
      .dfy-flex.layout
        .ratio
          iframe#player(
            type="text/html"
            width="100%"
            :src="urls.video"
            frameborder="0")
</template>

<script>
import { XIcon } from 'vue-feather-icons'
import { URLS, PARTNERS } from '~/settings'

export default {
  components: {
    XIcon
  },

  data () {
    return {
      playing: false
    }
  },

  computed: {
    urls: () => URLS,
    partners: () => PARTNERS
  }
}
</script>

<style lang="scss" scoped>
.player {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(darken($--color-background-page, 10), .75);
  transform: translate3d(0, 0, 0);
  backdrop-filter: blur(20px);
  .close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 2rem;
  }
  .layout {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 80%;
    @include media(sm-down) {
      width: 100%;
    }
    .ratio {
      width: 100%;
      height: 0;
      padding-top: (100% / 16 * 9);
      position: relative;
      iframe {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

section.hero {
  overflow: hidden;
  .container {
    position: relative;
  }
  .canvas {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    @include media(xs-only) {
      display: none;
    }
    @include media(sm) {
      right: -120px;
      bottom: -220px;
      width: (840px * .8);
      height: (660px * .8);
    }
    @include media(md) {
      right: -120px;
      bottom: -220px;
      width: (840px * .9);
      height: (660px * .9);
    }
    @include media(lg) {
      width: 840px;
      height: 660px;
      bottom: 0;
    }
    .phone {
      position: absolute;
      width: 100%;
      bottom: -60px;
      animation: floating 16s infinite ease-in-out;
    }
    > .token {
      position: absolute;
      &.bnb {
        width: 18%;
        max-width: 160px;
        left: 18%;
        top: 10%;
        animation: floating 8s infinite ease-in-out reverse;
      }
      &.dfy {
        width: 18%;
        max-width: 160px;
        left: 34%;
        top: 2%;
        animation: floating 9s infinite ease-in-out;
      }
      &.btc {
        width: 20%;
        max-width: 160px;
        right: 16%;
        top: 10%;
        animation: floating 7s infinite ease-in-out reverse;
      }
      &.nfts {
        width: 20%;
        max-width: 160px;
        right: 35%;
        top: 17%;
        animation:
          floating 10s infinite ease-in-out,
          shine-up .6s infinite ease-in-out;
      }
    }
  }
  .greeting {
    position: relative;
    z-index: 2;
    padding: 2em 0;
    @include media(sm) {
      padding: 5rem 0 14rem 0;
      width: 660px;
    }
    @include media(md) {
      padding: 5rem 0 14rem 0;
    }
    @include media(lg) {
      padding: 9.5rem 0;
      width: 660px;
    }
    .headline {
      margin: 0;
      font-size: 2.5rem;
      br.xso {
        display: none;
        @include media(xs-only) {
          display: block;
        }
      }
      @include media(sm) {
        font-size: 3.35rem;
      }
    }
    .preview {
      align-items: center;
      margin-top: 1rem;
      @include media(sm) {
        margin-top: 2.5rem;
        display: flex;
      }
      .video {
        cursor: pointer;
        flex: 0 0 168px;
        .thumbnail {
          border-radius: 8px;
          width: 100%;
          height: 0;
          padding-top: 57%;
          background-image: url(/img/preview.introduction.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(white, .05);
          position: relative;
          .badge {
            position: absolute;
            top: 0;
            right: .5em;
          }
        }
      }
      .description {
        flex: 1;
        margin: 1rem 0 0 0;
        @include media(sm) {
          margin: 0 0 0 1.75em;
        }
        p {
          margin: 0;
          strong {
            color: $--color-primary;
            &.special {
              background: linear-gradient(30deg, #FA6565, #E88F8F);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
    }
    .actions {
      margin: 1rem 0 0 0;
      @include media(sm) {
        margin: 2.5rem 0 0 0;
      }
      > * {
        margin-bottom: .5em;
        &:not(:last-child) {
          margin-right: 1em;
        }
      }
    }
  }
}
</style>
