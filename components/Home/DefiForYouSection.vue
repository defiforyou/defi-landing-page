<template lang="pug">
section.defi-for-you
  .container
    .dfy-flex.layout
      .wallets
        .screens
          img(src="/img/gold.png" alt="Metamask")
          //- .screen.metamask
          //- .screen.binance
          //-   img(src="/img/Home.png" alt="Binance")
          //- .screen.trustwallet
          //-   img(src="/img/Marketplace.png" alt="Trustwallet")
      .text
        h2.title Buy and Loan against NFTs attached to physical assets.
        .description
          p  Would you like to diversify your portfolio using your cryptocurrency to buy items like gold, silver and diamonds? This will be made possible by purchasing NFTs which are attached to that specific asset. These will be stored and insured with one of our trusted partners. You can also redeem the goods by giving the NFT to the partner, who will then burn it and give you the asset. Loans can also be made available in stablecoin by using the physical goods as collateral.
        //- h3.title Use case for DFY
        //- .description
        //-   p All sales of NFTs will incur 2.5% charge of which 1.25% will be used to buy DFY on exchanges, which will be burned.
        //-   p All minting fees are in DFY, which will also be burned.
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
    h3 {
      font-size: 1.125rem !important;
    }
    @include media(sm-down) {
      max-width: 560px;
      margin: 0 auto;
    }
    .description {
      margin-bottom: 70px;
      p {
        padding-top: 12px;
      }
    }
  }
}
</style>
