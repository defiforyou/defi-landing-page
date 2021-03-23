<template lang="pug">
client-only
  section.price-tickers
    .container
      swiper.tickers(
        v-if="!loading"
        ref="swiper"
        :options="options")
        swiper-slide(v-for="i, k in pairs" :key="k")
          .ticker
            .name {{ i.symbol }} / usd
            .price(:class="{'price--up': i.price_change_percentage_24h > 0, 'price--down': i.price_change_percentage_24h < 0}")
              .current {{ i.current_price }}
              .change {{ i.price_change_percentage_24h | abs | number('0,0.00') }}%
            .volume
              span 24H VOL
              span.value {{ i.total_volume | number }}
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  data () {
    return {
      loading: false,
      pairs: [],
      options: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }
      }
    }
  },

  mounted () {
    this.loading = true
    this.$apis
      .getMarketPrices()
      .then((res) => {
        this.pairs = res
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
  padding: 1rem 0;
  @include media(sm) {
    padding: 1.5rem 0;
  }
  @include media(md) {
    padding: 2rem 0;
  }
}
.tickers {
  /deep/ .swiper-slide {
    width: auto;
  }
}
.ticker {
  font-size: 13px;
  line-height: 1.6em;
  padding-right: 20px;
  border-right: 1px solid #252F3F;
  @include media(sm) {
    font-size: 14px;
    line-height: 1.5em;
  }
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
    display: flex;
    white-space: nowrap;
    > * {
      min-width: 0;
    }
    .value {
      flex: 1;
      color: white;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: .5em;
    }
  }
}
</style>
