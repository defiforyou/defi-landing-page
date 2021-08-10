<template>
  <div class="buy-dfy">
    <div class="container">
      <v-row>
        <v-col cols="12" md="6" class="order-2 order-md-1">
          <div class="buy-dfy-with">
            <div class="buy-dfy__tabs">
              <span
                :class="{'active': tab == 1}"
                @click="tab = 1"
              >Buy DFY with credit card</span>

              <span
                :class="{'active': tab == 2}"
                @click="tab = 2"
              >Buy DFY on exchanges</span>
            </div>

            <div class="buy-dfy__input">
              <BuyWithCreditCard v-if="tab == 1" />
              <BuyOnExchanges v-if="tab == 2" />
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="order-1 order-md-2">
          <div class="buy-dfy-img">
            <h2 class="buy-dfy__title">
              <p>
                Buy DFY
              </p>
              <p>
                with Credit card
              </p>
            </h2>

            <div class="buy-dfy__subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, id.
            </div>

            <div class="buy-dfy__img">
              <img src="~assets/img/buy-dfy/buy-dfy.png" alt="">
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import BuyOnExchanges from './BuyOnExchanges'
import BuyWithCreditCard from './BuyWithCreditCard'
export default {
  components: {
    BuyWithCreditCard,
    BuyOnExchanges
  },
  data () {
    return {
      tab: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_buy-dfy.scss";
</style>
