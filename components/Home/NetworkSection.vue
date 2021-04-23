<template lang="pug">
section.network
  .dfy-decorator NETWORK
  .container
    h2.title DFY
      em .
    p.description DFY is a BEP20 token built on Binance Smart Chain.
      br
      | This ensures transactions are practically instant with extremely low fees.
  .canvas
    .map
    .tokens
      img.token.bnb(src="/img/token.bnb.png" alt="BNB")
      img.token.dfy(src="/img/token.dfy.png" alt="DFY")
      img.token.nfts(src="/img/token.nfts.png" alt="NFTs")
      img.token.btc(src="/img/token.btc.png" alt="BTC")
  .container
    .actions
      popper-exchanges(trigger="clickToToggle" append-to-body)
        a.dfy-button.dfy-button--primary Buy DFY on Exchanges
      a.dfy-button.dfy-button--ghost(
        :href="urls.whitepaper"
        target="_blank"
        rel="noopener") Whitepaper
</template>

<script>
import { URLS } from '~/settings'

export default {
  computed: {
    urls: () => URLS
  }
}
</script>

<style lang="scss" scoped>
section.network {
  text-align: center;
  padding: 2em 0;
  margin-top: $--gap-home-section;
  @include media(sm) {
    padding: 2em 0;
    margin-top: 0;
  }
  .canvas {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    background: url(/img/network.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 640px;
    height: 320px;
    position: relative;
    @include media(sm) {
      background-size: 1000px;
      height: 500px;
    }
    @include media(lg) {
      position: inherit;
    }
    .tokens {
      @include media(lg) {
        display: none;
      }
    }
    .token {
      position: absolute;
      width: 27%;
      min-width: 120px;
      @include media(sm) {
        width: 20%;
      }
      @include media(md) {
        width: 18%;
      }
      &.bnb {
        top: 30%;
        left: 7%;
        animation: floating 8s infinite ease-in-out reverse;
        @include media(md) {
          top: 32%;
          left: 24%;
        }
      }
      &.nfts {
        top: 47%;
        left: 40%;
        width: 30%;
        animation:
          floating 9s infinite ease-in-out,
          shine-up .8s infinite ease-in-out;
        @include media(sm) {
          width: 20%;
        }
        @include media(md) {
          top: 46%;
          left: 44%;
        }
      }
      &.btc {
        top: 20%;
        right: 14%;
        animation: floating 7s infinite ease-in-out reverse;
        @include media(md) {
          top: 20%;
          right: 25%;
        }
      }
      &.dfy {
        top: 8%;
        left: 30%;
        animation: floating 10s infinite ease-in-out;
        @include media(md) {
          top: 12%;
          left: 40%;
        }
      }
    }
  }
  .actions {
    @include media(sm-down) {
      text-align: center;
      > * {
        margin: .5em;
      }
    }
    > * {
      @include media(md) {
        &:not(:last-child) {
          margin: 0 1em 0 0;
        }
      }
    }
  }
}
</style>
