<template lang="pug">
section.services
  .container
    .dfy-flex.layout
      .introduce.half
        h2.title Our Services
        .description
          p DeFi For You provides a platform for users to engage in peer-to-peer lending and borrowing.
      .features.half
        .feature
          img.icon(src="/img/service.pawnbrocker-service.svg" alt="Collateralized DeFi Loans" width="64" height="64")
          div
            .name Collateralized DeFi Loans
            p Borrowers can use NFTs, crypto assets, and physical assets represented by NFTs as collateral on the platform.
        .feature
          img.icon(src="/img/service.physical-asset-collateral.svg" alt="Physical Asset Collateral" width="64" height="64")
          div
            .name Physical Asset Collateral
            p We are building a network of licensed and insured evaluators in the UK to facilitate the storage, valuation, and tokenization of physical assets for collateral.
        .feature
          img.icon(src="/img/service.save.svg" alt="NFT Collateral" width="64" height="64")
          div
            .name NFT Collateral
            p Borrowers can stake digital NFTs as collateral for DeFi loans, allowing them to finance their non-fungible tokens without selling them.
        .feature
          img.icon(src="/img/service.crypto-pawnbroking.svg" alt="Crypto Pawnbroking" width="64" height="64")
          div
            .name Crypto Pawnbroking
            p Users can set up their own crypto pawn shops on DeFi For You, meaning they can accept physical assets as collateral for cryptocurrency loans.
</template>

<style lang="scss" scoped>
section.services {
  padding: 8em 0;
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
    }
  }
  .introduce {
    @include media(md) {
      > * {
        max-width: 380px;
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
