<template lang="pug">
section.services
  .container
    .dfy-flex.layout
      .introduce.half
        h2.title Our Services
        .description
          p We're the world's first peer-to-peer lending platform that allows you to finance your assets without any intermediaries.
      .features.half
        .feature
          img.icon(src="/img/service.pawnbrocker-service.svg" alt="Pawnbrocker Service" width="64" height="64")
          div
            .name Collateralized loans
            p Offer or receive loans using cryptocurrency, NFTs, and other assets as collateral. Terms and interest are negotiated directly between lenders and borrows and stored in irrefutable smart contracts.
        .feature
          img.icon(src="/img/service.buy-and-sell.svg" alt="Buy & Sell" width="64" height="64")
          div
            .name Finance NFTs
            p You can use your NFTs as collateral, allowing you to finance them without having to sell them. This means you can earn from your NFTs, instead of having them just sit there gathering digital dust.
        .feature
          img.icon(src="/img/service.save.svg" alt="Save" width="64" height="64")
          div
            .name Trade NFTs
            p You can buy and sell NFTs on our platform as well, including any that you obtain through liquidated collateral. This opens a uniquely competitive market where you can potentially buy NFTs below their usual market value.
        .feature
          img.icon(src="/img/service.buy-and-sell.svg" alt="Buy and sell" width="64" height="64")
          div
            .name Buy and sell
            p Users will be able to buy, sell, rent and pawn goods and services on the platform using fiat cash or cryptocurrency as payment, in accordance with local laws and regulations.
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
