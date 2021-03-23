<template lang="pug">
section.defi-for-you
  .container
    .dfy-flex.layout
      .wallets
        .screens
          .screen.metamask
            img(src="/img/wallet.metamask.jpg" alt="Metamask")
          .screen.binance
            img(src="/img/wallet.binance.jpg" alt="Binance")
          .screen.trustwallet
            img(src="/img/wallet.trustwallet.jpg" alt="Trustwallet")
      .text
        h2.title We've built a decentralized P2P loan economy on the blockchain.
        .description
          p Traditional loans are inflexible and inaccessible to most people in 2021. DeFi has proven there is a working use-case in decentralizing such financial services.
          p However, blockchain comes with anonymity and removes trusted third-parties, which limits the types of loans that can be issued. Why? Because some people are more likely to pay back a loan than others.
          p Trust and reputation still matters when issuing loans.
          p DeFi For You solves this by building an irrefutable, verifiable reputation system onto the blockchain and tying it together with decentralized finance services.
          p The result is a peer-to-peer loan economy, whereby lenders can trivially repossess collateral via smart contracts.
          p Now, for the first time, P2P loans can be issued to anyone, regardless of their reputation.
</template>

<style lang="scss" scoped>
section.defi-for-you {
  padding: 4em 0;
  overflow: hidden;
  @include media(sm-down) {
    padding: 2em 0;
    margin-top: $--gap-home-section;
  }
  .layout {
    align-items: center;
    @include media(sm-down) {
      flex-direction: column;
    }
  }
  .wallets {
    flex: 1;
    position: relative;
    @include media(sm-down) {
      margin-left: -20%;
      margin-right: -20%;
      flex: 0 360px;
      overflow: hidden;
      margin-bottom: -160px;
      opacity: .25;
      &:after {
        content: '';
        z-index: 4;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(0deg, $--color-background-page, transparent);
      }
    }
    @include media(xs-only) {
      flex: 0 480px;
      margin-bottom: -280px;
    }
    .screens {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      max-width: 640px;
      @include media(md) {
        max-width: 420px;
      }
      @include media(lg) {
        max-width: 500px;
      }
      .screen {
        min-width: 0;
        flex: 1;
        position: relative;
        &.metamask {
          z-index: 2;
          margin-top: 5em;
          opacity: .75;
        }
        &.binance {
          z-index: 3;
          margin-top: 10em;
          margin-left: -136px;
          margin-right: -136px;
        }
        &.trustwallet {
          z-index: 1;
          opacity: .5;
        }
        > img {
          border-radius: 16px;
          @include media(md) {
            width: 220px;
            border-radius: 16px;
          }
          @include media(lg) {
            width: 275px;
            border-radius: 24px;
          }
          box-shadow: 0 20px 40px 0 rgba($--color-background-page, .5);
        }
      }
    }
  }
  .text {
    flex: 1;
    z-index: 5;
    @include media(sm-down) {
      max-width: 560px;
      margin: 0 auto;
    }
  }
}
</style>
