<template lang="pug">
section.solution
  .container
    .diagram
      .cogs
        cog-image.sm
        cog-image.lg
      .text
        h2.title Decentralized
          br
          | Finance
        p.description A new decentralized P2P loan economy built on
          br
          | the Binance Smart Chain,
          br
          | powered by the DFY smart contract BEP20 token.
      .stamp.decentralized
        img.icon(src="/img/solution.decentralized.svg" alt="Decentralized")
        .caption Decentralized
      .stamp.permissionless
        img.icon(src="/img/solution.permissionless.svg" alt="Permissionless")
        .caption Permissionless
      .stamp.censorship-resistant
        img.icon(src="/img/solution.censorship-resistant.svg" alt="Censorship Resistant")
        .caption Censorship Resistant
      .stamp.transparent
        img.icon(src="/img/solution.transparent.svg" alt="Transparent")
        .caption Transparent
      .stamp.programable
        img.icon(src="/img/solution.programable.svg" alt="Programable")
        .caption Programable
      .stamp.trustless
        img.icon(src="/img/solution.trustless.svg" alt="Trustless")
        .caption Trustless
</template>

<script>
import CogImage from '~/static/img/cog.svg?inline'

export default {
  components: {
    CogImage
  }
}
</script>

<style lang="scss" scoped>
section.solution {
  overflow: hidden;
  text-align: center;
  margin: $--gap-home-section 0 0 0;
  @include media(sm) {
    padding-bottom: 2rem;
    margin: 0 0 2rem 0;
  }
  @include media(md) {
    padding-bottom: 3rem;
    margin: 0 0 3rem 0;
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
    .cogs {
      z-index: 1;
      > * {
        position: absolute;
      }
      .sm {
        animation: spin 8s infinite linear reverse;
        width: 96px;
        top: 10%;
        left: 30%;
        @include media(sm-down) {
          width: 128px;
          top: 18%;
          left: 2%;
        }
        * {
          stroke-width: 2px;
        }
      }
      .lg {
        animation: spin 8s infinite linear;
        width: 240px;
        top: 40%;
        left: 40%;
        @include media(sm-down) {
          width: 320px;
          top: 50%;
          left: 45%;
        }
        * {
          stroke-width: 1px;
        }
      }
    }
    .text {
      position: relative;
      z-index: 2;
      margin-bottom: 2em;
    }
    .stamp {
      z-index: 3;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      border-radius: 1000px;
      background: rgba(white, .08);
      font-size: 16px;
      padding: 0 1.5em;
      height: 64px;
      margin: .25em;
      backdrop-filter: blur(4px);
      width: 280px;
      @include media(sm) {
        width: auto;
        height: auto;
        padding: 1em 1.5em;
        position: absolute;
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
