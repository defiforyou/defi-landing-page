<template lang="pug">
section.services
  .container
    h2.title Defi For You is a digital asset-backed finance and NFT trading platform
    .dfy-flex.layout
      .features.half
        .feature
          img.icon(src="/img/service.save.svg" alt="NFT Collateral" width="64" height="64")
          div
            .name Crypto Asset-backed Finance
            p Open a digital asset shop and earn passive income by issuing secured stablecoin loans to users on the DeFi For You platform.
        .feature
          img.icon(src="/img/service.crypto-pawnbroking.svg" alt="Crypto Pawnbroking" width="64" height="64")
          div
            .name Trade NFTs
            p Put your NFTs on the market, or use them as collateral for a stablecoin loan. Get more liquidity from your NFTs without selling them.
      //- .introduce.half
        //.description
        //  p DeFi For You is a crypto pawnbroking and NFT trading platform.
      .features.half
        .feature
          img.icon(src="/img/service.pawnbrocker-service.svg" alt="Collateralized DeFi Loans" width="64" height="64")
          div
            .name Collateralized DeFi Loans
            p Unlock liquidity in your crypto assets and NFTs by using them as collateral for a P2P secured stable coin loan.
        .feature
          img.icon(src="/img/service.physical-asset-collateral.svg" alt="Physical Asset Collateral" width="64" height="64")
          div
            .name Physical Asset NFTs
            p Securely store physical assets with our one of trusted partners and have them turned into Hard NFTs which can be used as collateral in our DeFi lending platform.
</template>

<style lang="scss" scoped>
section.services {
  .title {
    text-align: center;
    margin-bottom: 50px;
    padding: 0 160px;
  }
  padding: 2em 0;
  @include media(sm-down) {
    padding: 2em 0;
    margin-top: $--gap-home-section;
  }
  .layout {
    align-items: center;
    @include media(sm-down) {
      flex-direction: column;
      max-width: 560px;
      margin: 0 auto;
    }
    .half {
      flex: 1;
      margin-right: 15px;
    }
  }
  .introduce {
    @include media(md) {
      > * {
        max-width: 640px;
      }
    }
  }
  .features {
    @include media(sm-down) {
      margin-top: 2em;
    }
    .feature {
      display: flex;
      align-items: flex-start;
      > * {
        min-width: 0;
      }
      &:not(:first-child) {
        margin-top: 2em;
        @include media(md) {
          margin-top: 4em;
        }
      }
      .icon {
        margin-right: 1.5em;
        flex: 0 0 3.5em;
        @include media(md) {
          margin-right: 2.4em;
          flex: 0 0 4em;
        }
      }
      .name {
        font-family: $--font-family-heading;
        font-size: 1.125em;
        line-height: 1.35em;
        color: white;
      }
    }
  }
}
</style>
