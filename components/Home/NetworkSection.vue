<template lang="pug">
section.network
  .dfy-decorator NETWORK
  .container
    //- h2.title DFY
      em .
    //- p.description DFY is a BEP20 token built on Binance Smart Chain.
      br
      | This ensures transactions are practically instant with extremely low fees.
    h2.title The DFY token
    .description DFY is the native crypto currency of the DeFi For You platform.
      br
      | It’s an exchange token that has several uses.
    .blocks
      p Users who hold more than a million tokens can partner with DeFi For You Ltd to receive financing for a crypto pawnshop.
      p Users who hold more than 200,000 DFY tokens can open a crypto pawnshop and manually run it without financing from DeFi For You Ltd.
      p Users with 2,000 DFY tokens can issue P2P loans.
      p The DFY token is used for fees on the DeFi For You platform. It can also be borrowed or staked as collateral for a loan.

  .canvas
    .map
    .tokens
      img.token.bnb(src="/img/token.bnb.png" alt="BNB")
      img.token.dfy(src="/img/token.dfy.png" alt="DFY")
      img.token.nfts(src="/img/token.nfts.png" alt="NFTs")
      img.token.btc(src="/img/token.btc.png" alt="BTC")
  .container
    .actions
      popover-exchanges
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
  .blocks {
    display: grid;
    text-align: left;
    font-size: .9em;
    grid-gap: 1.5em;
    margin: 2.5em 0;
    @include media(sm) {
      margin: 2.5em auto -2em;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      max-width: 640px;
    }
    @include media(lg) {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      max-width: 1024px;
    }
    > * {
      margin: 0;
      position: relative;
      z-index: 1;
      padding-left: 2em;
      @include media(sm) {
        padding: 1em 1.5em;
        border-radius: 1em;
        backdrop-filter: blur(6px);
        background: rgba(lighten(#191C25, 2), .95);
      }
      &:before {
        content: '';
        display: block;
        width: .6em;
        height: .6em;
        border-radius: .2em;
        background: $--color-primary;
        position: absolute;
        top: .6em;
        left: 0;
        @include media(sm) {
          display: none;
        }
      }
    }
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
