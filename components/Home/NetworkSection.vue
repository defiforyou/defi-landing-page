<template lang="pug">
section.network
  .dfy-decorator NETWORK
  .container
    h2.title DFY
      em .
    p.description DFY is a BEP20 token built on Binance Smart Chain.
      br
      | This ensures transactions are practically instant with extremely low fees.
    img.map(src="/img/network.png" alt="Network")
    .actions
      a.dfy-button.dfy-button--primary(href="#") Buy DFY on Exchanges
      a.dfy-button.dfy-button--ghost(href="#") Whitepaper
</template>

<style lang="scss" scoped>
section.network {
  text-align: center;
  padding: 8em 0;
  @include media(sm-down) {
    padding: 2em 0;
    margin-top: $--gap-home-section;
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
