<template>
  <client-only>
    <div class="buy-dfy">
      <div class="container">
        <v-row>
          <v-col cols="12" md="6" class="order-2 order-md-1">
            <div class="buy-dfy-with">
              <div class="buy-dfy__tabs">
                <span
                  class="buy-dfy__tabs--card tab-1 text-uppercase"
                  :class="{'active': tab == 1}"
                  @click="tab = 1"
                >
                  Buy DFY using bank card
                </span>
                <!--<span class="cards">
                  <img src="~assets/img/buy-dfy/visa.png" alt="">
                  <img class="img-rectangle" src="~assets/img/buy-dfy/rectangle.png" alt="">
                  <img src="~assets/img/buy-dfy/mastecard.png" alt="">
                </span>-->

                <span
                  class="buy-dfy__tabs--card text-uppercase"
                  :class="{'active': tab == 2}"
                  @click="tab = 2"
                >Buy DFY on Exchanges</span>
              </div>

              <div class="buy-dfy__input">
                <BuyWithCreditCard v-if="tab === 1" />
                <BuyOnExchanges v-if="tab === 2" />
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="order-1 order-md-2">
            <div class="buy-dfy-img">
              <h2 class="buy-dfy__title">
                Buy DFY Tokens
              </h2>
              <!-- <h2 class="buy-dfy__title">
                using Bank card
              </h2> -->
              <!--              <div class="buy-dfy__card">-->
              <!--                <div>-->
              <!--                  <img class="pr-2" src="~assets/img/buy-dfy/visa-2.png" alt="">-->
              <!--                  <img src="~assets/img/buy-dfy/mastecard-2.png" alt="">-->
              <!--                </div>-->
              <!--              </div>-->
              <div class="buy-dfy__subtext">
                <p class="text-left text-md-right mb-0">
                  Buy DFY tokens by through multiple channels.
                </p>
              </div>
              <!-- <div class="buy-dfy__imgs--small">
                <img src="/img/payment_visa.svg" alt="">
                <img src="/img/payment_mastercard.svg" alt="">
              </div> -->
              <div class="buy-dfy__img">
                <!--                <img src="~assets/img/buy-dfy/buy-dfy.png" alt="">-->
                <img src="/img/payment_card_2.png" alt="">
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </client-only>
</template>

<script>
import BuyWithCreditCard from '../Payment/BuyWithCreditCard.vue'
import BuyOnExchanges from './BuyOnExchanges'
export default {
  components: {
    BuyWithCreditCard,
    BuyOnExchanges
  },
  data () {
    return {
      tab: 2
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_buy-dfy.scss";
</style>
