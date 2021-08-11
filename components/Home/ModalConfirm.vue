<template>
  <v-dialog
    v-model="isShow"
    width="670px"
    dark
  >
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        <span class="dialog-title">Change password</span>

        <v-btn
          small
          color="#D1D1D3"
          fab
          :ripple="false"
          @click="$emit('update:show', false)"
        >
          <v-icon color="#282C37">
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <div class="modal-confirm">
          <div class="d-flex align-center mb-4">
            <div class="modal-confirm__label">
              You pay:
            </div>
            <div class="modal-confirm__data">
              100,000,000 VND
            </div>
          </div>

          <div class="d-flex align-center mb-4">
            <div class="modal-confirm__label">
              You get:
            </div>
            <div class="modal-confirm__data">
              50,000
              <img
                class="select-img"
                :src="$mapImageCurrency(get(data, 'symbol', 'DFY'))"
                alt
              >
              <span>DFY</span>
            </div>
          </div>

          <div class="d-flex align-center mb-4">
            <div class="modal-confirm__label">
              Email:
            </div>
            <div class="modal-confirm__data">
              abcxyzotp@gmail.com
            </div>
          </div>

          <div class="d-flex align-center">
            <div class="modal-confirm__label">
              Wallet address:
            </div>
            <div class="modal-confirm__data">
              <a href="http://" target="_blank">0xaaa042c...e751a410e</a>
            </div>
          </div>
        </div>

        <v-divider />

        <div class="disclaimer">
          <h4 class="disclaimer__title">
            Disclaimer
          </h4>

          <div class="disclaimer__content">
            <p>You will now be leaving <span>defiforyou.uk</span> and be transferred to Indacoin.com. Credit Card services to acquire cryptocurrencies will be provided by Indacoin.com, which is a separate payment processing platform, owned by a third party. </p>
            <transition name="slide-fade">
              <p v-if="isMore">
                After purchase, your cryptocurrency will be automatically transferred to your walled. Please read their Terms of Services before executing the order.
                For any questions or clarifications relating to credit card payments, please contact Indacoin support at: support@indacoin.com
              </p>

              <p v-if="isMore">
                DeFi For You does not assume or hold any responsibility for loss or damages caused by any third party, including payment processing companies.
              </p>
            </transition>
            <div class="see" @click="isMore = !isMore">
              {{ isMore ? 'See less' : 'See more' }}
            </div>
          </div>
        </div>
      </v-card-text>

      <v-card-actions class="justify-center pb-8">
        <v-btn
          color="#F8B017"
          depressed
          dense
          height="40px"
          width="160px"
          rounded
        >
          Go to payment
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import get from 'lodash/get'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },

    data: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      isMore: false
    }
  },

  computed: {
    isShow: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('update:show', value)
      }
    }
  },

  methods: {
    get
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-confirm.scss";
</style>
