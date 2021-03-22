<template lang="pug">
section.services
  .container
    .dfy-flex.layout
      .introduce.dfy-half
        h2.title Our Services
        .description
          p We've built a decentralised loan economy on the blockchain, whereby the irrefutable reputation of the individual - as verifiable on the public ledger (blockchain) - is combined with type and terms of collateral, creating a bid and ask economy.
          p This is true decentralised finance.
      .features.dfy-half
        .feature
          img.icon(src="/img/service.pawnbrocker-service.svg")
          div
            .name Pawnbrocker Service
            p High-value goods will be pawned on the DeFi For You platform, using intermediaries to assess the value and legitimacy of collateral.
            p Local P2P virtual pawnshops can also be established where lenders assess the value of smaller goods themselves.
        .feature
          img.icon(src="/img/service.buy-and-sell.svg")
          div
            .name Buy &amp; Sell
            p Users can buy and sell goods on the DeFi For You marketplace using fiat cash or cryptocurrency payments.
        .feature
          img.icon(src="/img/service.save.svg")
          div
            .name Save
            p Save up to 50% on sales taxes on luxury goods when buying on the DeFi For You Marketplace with the DFY token.
</template>

<style lang="scss" scoped>
section.services {
  padding: 8em 0;
  .layout {
    align-items: center;
  }
  .features {
    .feature {
      display: flex;
      align-items: flex-start;
      &:not(:first-child) {
        margin-top: 4em;
      }
      .icon {
        margin-right: 2.25em;
        flex: 0 4em;
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
