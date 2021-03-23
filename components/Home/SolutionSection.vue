<template lang="pug">
section.solution
  .container
    .diagram
      h2.title Decentralized
        br
        | Finance
      p.description A new decentralized P2P loan economy built on
        br
        | the Binance Smart Chain,
        br
        | powered by the DFY smart contract BEP20 token.
      .stamp.decentralized
        img.icon(src="/img/solution.decentralized.svg")
        .caption Decentralized
      .stamp.permissionless
        img.icon(src="/img/solution.permissionless.svg")
        .caption Permissionless
      .stamp.censorship-resistant
        img.icon(src="/img/solution.censorship-resistant.svg")
        .caption Censorship Resistant
      .stamp.transparent
        img.icon(src="/img/solution.transparent.svg")
        .caption Transparent
      .stamp.programable
        img.icon(src="/img/solution.programable.svg")
        .caption Programable
      .stamp.trustless
        img.icon(src="/img/solution.trustless.svg")
        .caption Trustless
</template>

<style lang="scss" scoped>
section.solution {
  text-align: center;
  margin: $--gap-home-section 0 0 0;
  @include media(sm) {
    margin: 0 0 3rem 0;
  }
  @include media(md) {
    margin: 0 0 6rem 0;
  }
  .diagram {
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
    box-sizing: border-box;
    @include media(sm) {
      background-image: url(/img/solution.cloud.svg);
      padding: 14em 0 0 0;
      background-size: 100%;
      width: 560px;
      height: 480px;
    }
    @include media(md) {
      width: 720px;
      height: 560px;
    }
    .stamp {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      border-radius: 1000px;
      background: rgba(white, .08);
      font-size: 16px;
      padding: 0 1.5em;
      height: 64px;
      width: 220px;
      margin: .25em;
      @include media(sm) {
        height: auto;
        padding: 1em 1.5em;
        position: absolute;
        width: auto;
      }
      @include media(md) {
        font-size: 18px;
        padding: 1.15em 1.75em;
      }
      &.permissionless {
        top: 15%;
        right: 20%;
      }
      &.transparent {
        top: 45%;
        right: -14%;
      }
      &.trustless {
        bottom: 5%;
        right: -12%;
      }
      &.censorship-resistant {
        right: 28%;
        bottom: -2%;
        @include media(md) {
          bottom: -7%;
          right: 26%;
        }
      }
      &.programable {
        bottom: 20%;
        left: -18%;
        @include media(md) {
          bottom: 20%;
          left: -14%;
        }
      }
      &.decentralized {
        top: 30%;
        left: -10%;
      }
      .icon {
        width: 2em;
        margin-right: .65em;
      }
      .caption {
        text-align: left;
      }
    }
  }
}
</style>
