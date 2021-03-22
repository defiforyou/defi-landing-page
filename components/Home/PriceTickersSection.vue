<template lang="pug">
client-only
  section.price-tickers
    .container
      .tickers(v-if="!loading")
        .ticker(v-for="i, k in pairs" :key="k")
          .name {{ i.symbol }} / usd
          .price(:class="{'price--up': i.price_change_percentage_24h > 0, 'price--down': i.price_change_percentage_24h < 0}")
            .current {{ i.current_price }}
            .change {{ i.price_change_percentage_24h | abs | number('0,0.00') }}%
          .volume
            span 24H VOL
            span.value {{ i.total_volume | number }}
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      pairs: []
    }
  },

  mounted () {
    this.loading = true
    this.$apis
      .getMarketPrices()
      .then((res) => {
        this.pairs = res
        console.log(this.pairs)
      })
      .finally(() => {
        this.loading = false
      })
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
    text-transform: uppercase;
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
