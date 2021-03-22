<template lang="pug">
section.defi-for-you
  .container
    .dfy-flex.layout
      .wallets
        .screens
          .screen.metamask
            img(src="/img/wallet.metamask.jpg")
          .screen.binance
            img(src="/img/wallet.binance.jpg")
          .screen.trustwallet
            img(src="/img/wallet.trustwallet.jpg")
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
  padding: 8em 0;
  .layout {
    align-items: center;
  }
  .wallets {
    flex: 1;
    .screens {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 500px;
      .screen {
        min-width: 0;
        flex: 1;
        position: relative;
        &.metamask {
          z-index: 2;
          margin-top: 5em;
        }
        &.binance {
          z-index: 3;
          margin-top: 10em;
          margin-left: -136px;
          margin-right: -136px;
        }
        &.trustwallet {
          z-index: 1;
        }
        > img {
          width: 275px;
          max-width: 275px;
          border-radius: 24px;
          box-shadow: 0 20px 40px 0 rgba($--color-background-page, .5);
        }
      }
    }
  }
  .text {
    flex: 1;
  }
}
</style>
