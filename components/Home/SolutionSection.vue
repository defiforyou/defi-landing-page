<template lang="pug">
section.solution
  .container
    h2.title Decentralized
      br
      | Finance
    p.description A new decentralized P2P loan economy built on
      br
      | the Binance Smart Chain,
      br
      | powered by the DFY smart contract BEP20 token.
    .diagram
      .stamp
        img.icon(src="/img/solution.decentralized.svg")
        .caption Decentralized
      .stamp
        img.icon(src="/img/solution.permissionless.svg")
        .caption Permissionless
      .stamp
        img.icon(src="/img/solution.censorship-resistant.svg")
        .caption Censorship Resistant
      .stamp
        img.icon(src="/img/solution.transparent.svg")
        .caption Transparent
      .stamp
        img.icon(src="/img/solution.programable.svg")
        .caption Programable
      .stamp
        img.icon(src="/img/solution.trustless.svg")
        .caption Trustless
</template>

<style lang="scss" scoped>
section.solution {
  text-align: center;
  padding: 8em 0;
  @include media(sm-down) {
    padding: 2em 0;
    margin-top: $--gap-home-section;
  }
  .diagram {
    .stamp {
      display: inline-flex;
      align-items: center;
      border-radius: 1000px;
      background: rgba(white, .08);
      font-size: 16px;
      padding: 1em 1.5em;
      width: 220px;
      margin: .25em;
      @include media(md) {
        width: auto;
        font-size: 18px;
        padding: 1.25em 1.75em;
      }
      .icon {
        width: 2em;
        margin-right: .65em;
      }
    }
  }
}
</style>
