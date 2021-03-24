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
      .stamps
        .stamp.decentralized
          img.icon(src="/img/solution.decentralized.svg" alt="Decentralized" width="36" height="36")
          .caption Decentralized
        .stamp.permissionless
          img.icon(src="/img/solution.permissionless.svg" alt="Permissionless" width="36" height="36")
          .caption Permissionless
        .stamp.censorship-resistant
          img.icon(src="/img/solution.censorship-resistant.svg" alt="Censorship Resistant" width="36" height="36")
          .caption Censorship Resistant
        .stamp.transparent
          img.icon(src="/img/solution.transparent.svg" alt="Transparent" width="36" height="36")
          .caption Transparent
        .stamp.programable
          img.icon(src="/img/solution.programable.svg" alt="Programable" width="36" height="36")
          .caption Programable
        .stamp.trustless
          img.icon(src="/img/solution.trustless.svg" alt="Trustless" width="36" height="36")
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
    margin: 3rem 0;
  }
  .diagram {
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
    box-sizing: border-box;
    z-index: 6;
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
        top: 13%;
        left: 30%;
        @include media(sm-down) {
          width: 128px;
          top: 15%;
          left: -10%;
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
    .stamps {
      @include media(xs-only) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1px;
        > .stamp {
          display: flex;
          flex-direction: column;
          border-radius: 0;
          width: auto;
          height: auto;
          margin: 0;
          padding: 1em;
          text-align: center;
          background: transparent;
          img {
            margin-right: 0;
            width: 56px;
            height: auto;
          }
          .caption {
            font-size: 14px;
            margin-top: .5em;
          }
        }
      }
    }
    .stamp {
      position: relative;
      z-index: 3;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      border-radius: 1000px;
      font-size: 16px;
      padding: 0 1.5em;
      height: 64px;
      margin: .25em;
      width: 280px;
      text-align: left;
      // background: rgba(white, .08);
      background: #2A2D36;
      // backdrop-filter: blur(6px);
      @include media(sm) {
        position: absolute;
        width: auto;
        height: auto;
        padding: 1em 1.5em;
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
        }
        &.programable {
          bottom: 20%;
          left: -18%;
        }
        &.decentralized {
          top: 30%;
          left: -10%;
        }
      }
      @include media(md) {
        font-size: 18px;
        padding: 1.15em 1.75em;
        &.censorship-resistant {
          bottom: -7%;
          right: 26%;
        }
        &.programable {
          bottom: 20%;
          left: -14%;
        }
      }
      .icon {
        width: 2em;
        margin-right: .65em;
      }
    }
  }
}
</style>
