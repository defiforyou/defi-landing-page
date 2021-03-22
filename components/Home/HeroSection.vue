<template lang="pug">
section.hero
  .container
    .dfy-flex
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
  .greeting {
    margin: 11rem 0;
    width: 50%;
    min-width: 660px;
    .headline {
      margin: 0;
      font-size: 3.5rem;
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
        &:not(:last-child) {
          margin-right: 1.5em;
        }
      }
    }
  }
}
</style>
