<template lang="pug">
section.price-tickers
  .container
    .tickers
      .ticker(v-for="i, k in pairs" :key="k")
        .name(v-text="i.name")
        .price(:class="{'price--up': i.change > 0, 'price--down': i.change < 0}")
          .current(v-text="i.price")
          .change {{ i.change | abs | number('0,0.00') }}%
        .volume
          span 24H VOL
          span.value {{ i.volume | number }}
</template>

<script>
export default {
  data () {
    return {
      pairs: [{
        name: 'AVA / USDT',
        price: 3.73,
        change: 3,
        volume: 28922490
      }, {
        name: 'XRP / USDT',
        price: 0.4312345,
        change: -1.23,
        volume: 123456789
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.price-tickers {
  background: linear-gradient(180deg, #13171F 0%, rgba($--color-background-page, 0) 100%);
  padding: 2rem 0;
}

.tickers {
  display: flex;
  > *:not(:last-child) {
    border-right: 1px solid #252F3F;
  }
  > *:not(:first-child) {
    padding-left: 1.2em;
  }
}

.ticker {
  min-width: 180px;
  font-size: 14px;
  line-height: 1.5em;
  .name {
    font-family: $--font-family-heading;
    color: white;
  }
  .price {
    display: flex;
    &--up {
      color: $--color-up;
      .change:before {
        content: '▲';
      }
    }
    &--down {
      color: $--color-down;
      .change:before {
        content: '▼';
      }
    }
    .current {
      margin-right: .5em;
    }
    .change {
      &:before {
        margin-right: .5em;
      }
    }
  }
  .volume {
    color: #6B7280;
    span:first-child {
      margin-right: .5em;
    }
    .value {
      color: white;
      font-weight: bold;
    }
  }
}
</style>
