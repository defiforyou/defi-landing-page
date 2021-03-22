<template lang="pug">
section.network
  .dfy-decorator NETWORK
  .container
    h2.title DFY
      em .
    p.description DeFi For You.™ Token (DFY) is an utility based cryptocurrency
      br
      | designed to be gas and fuel of DeFi For You.™ Network
    img.map(src="/img/network.png")
    .actions
      a.dfy-button.dfy-button--primary(href="#") Buy DFY on Exchanges
      a.dfy-button.dfy-button--ghost(href="#") Whitepaper
</template>

<style lang="scss" scoped>
section.network {
  text-align: center;
  .actions {
    > * {
      &:not(:last-child) {
        margin-right: 1.5em;
      }
    }
  }
}
</style>
