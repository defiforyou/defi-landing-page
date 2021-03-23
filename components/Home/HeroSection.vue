<template lang="pug">
section.hero
  .container
    .greeting
      h1.headline Ever thought of
        br
        | becoming
        br
        | your own bank?
      p.description DeFi For You.™ — A new decentralized P2P loan economy and NFT trading platform built on the Binance Smart Chain, powered by the&nbsp;
        strong $DFY
        | &nbsp;smart contract token.
      .actions
        a.dfy-button.dfy-button--primary(:href="urls.buy" target="_blank") Buy DFY on Exchanges
        a.dfy-button.dfy-button--ghost(:href="urls.whitepaper" target="_blank") Whitepaper

    .canvas
      img.phone(src="/img/hero.phone.png")
      img.token.bnb(src="/img/token.bnb.png")
      img.token.dfy(src="/img/token.dfy.png")
      img.token.nfts(src="/img/token.nfts.png")
      img.token.btc(src="/img/token.btc.png")
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
section.hero {
  position: relative;
  .canvas {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    .phone {
      position: absolute;
      top: 30%;
      left: 50%;
      margin-left: -50%;
    }
    > .token {
      position: absolute;
      &.bnb {
        width: 18%;
        max-width: 160px;
        left: 18%;
        top: 18%;
      }
      &.dfy {
        width: 20%;
        max-width: 160px;
        left: 40%;
        top: 10%;
      }
      &.btc {
        width: 20%;
        max-width: 160px;
        right: 16%;
        top: 23%;
      }
      &.nfts {
        width: 20%;
        max-width: 160px;
        right: 35%;
        top: 35%;
      }
    }
  }
  .greeting {
    position: relative;
    z-index: 2;
    padding: 11em 0;
    width: 660px;
    @include media(xs-only) {
      width: 100%;
    }
    .headline {
      margin: 0;
      font-size: 2.5rem;
      @include media(sm) {
        font-size: 3.5rem;
      }
    }
    .description {
      margin: 2.5rem 0 0 0;
      strong {
        color: $--color-primary;
      }
    }
    .actions {
      margin: 2.5rem 0 0 0;
      > * {
        margin-bottom: .5em;
        &:not(:last-child) {
          margin-right: 1.5em;
        }
      }
    }
  }
}
</style>
