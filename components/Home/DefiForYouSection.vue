<template lang="pug">
section.defi-for-you
  .container
    .dfy-flex.layout
      .wallets
        .screens
          .screen.metamask
            img(src="/img/ViewToken.png" alt="Metamask")
          .screen.binance
            img(src="/img/Home.png" alt="Binance")
          .screen.trustwallet
            img(src="/img/Marketplace.png" alt="Trustwallet")
      .text
        h2.title Set up your very own crypto loan business on the DeFi For You platform
        .description
          p Earn crypto tokens from interest payments and gradually scale the value of your crypto assets. Want to build your crypto lending business even further?
          p  We are partnering with licensed pawnbrokers in the UK to facilitate the storage of physical assets like gold, watches, cars, and more. These assets are then represented by NFTs.
          p You can set up your own Crypto Pawn Brokerage on DeFi For You to offer loans against this ‘Hard NFT’ collateral. Loans are secured by smart contracts, meaning collateral can be trivially repossessed in the event of a borrower defaulting on their loan repayments.
          p It’s easy, secure, and draws on a business model that’s been around for thousands of years.
</template>

<style lang="scss" scoped>
section.defi-for-you {
  padding: 4em 0;
  overflow: hidden;
  @include media(sm-down) {
    padding: 0;
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
          // opacity: .75;
        }
        &.binance {
          z-index: 4;
          margin-top: 10em;
          margin-left: -136px;
          margin-right: -136px;
        }
        &.trustwallet {
          z-index: 1;
          // opacity: .5;
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
    .description {
      p {
        padding-top: 12px;
      }
    }
  }
}
</style>
