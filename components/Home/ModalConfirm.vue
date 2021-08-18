<template>
  <v-dialog
    v-model="isShow"
    width="670px"
    dark
  >
    <client-only>
      <v-card :height="$vuetify.breakpoint.xsOnly ? '450px' : undefined" class="scroll">
        <v-card-title class="d-flex align-center justify-space-between">
          <span class="dialog-title">Confirmation</span>

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
            <div class="d-md-flex align-center mb-4">
              <div class="modal-confirm__label">
                You pay:
              </div>
              <div class="modal-confirm__data">
                {{ $numberFormatDecimal(payload.pay) }} {{ payload.payCurrency }}
              </div>
            </div>

            <div class="d-md-flex align-center mb-4">
              <div class="modal-confirm__label">
                You get:
              </div>
              <div class="d-flex modal-confirm__data">
                {{ getValue }}
                <img
                  class="ml-5 select-img"
                  :src="$mapImageCurrency(getCurrency)"
                  alt
                >
                <span>DFY</span>
              </div>
            </div>

            <div class="d-md-flex align-center mb-4">
              <div class="modal-confirm__label">
                Email:
              </div>
              <div class="modal-confirm__data">
                {{ email }}
              </div>
            </div>

            <div class="d-md-flex align-center">
              <div class="modal-confirm__label">
                Wallet address:
              </div>
              <div class="modal-confirm__data">
                <a
                  :href="$getBscLink(currentAddress, 'address')"
                  target="_blank"
                >{{ $shortAddress(currentAddress, 8) }}</a>
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
                  After purchase, your cryptocurrency will be automatically transferred to your walled. Please read their <a href="https://indacoin.com/terms" target="_blank">Terms of Services</a> before executing the order.
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
            class="go-payment"
            :loading="loading"
            @click="goToPayment()"
          >
            Go to payment
          </v-btn>
        </v-card-actions>
      </v-card>
    </client-only>
  </v-dialog>
</template>

<script>
import get from 'lodash/get'
import { mapState } from 'vuex'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },

    payload: {
      type: Object,
      default: () => {}
    },

    getCurrency: {
      type: String,
      default: 'DFY'
    },

    getValue: {
      type: Number,
      default: 0
    },

    email: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      isMore: false,
      loading: false
    }
  },

  computed: {
    ...mapState('walletStore', ['currentAddress']),
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
    get,
    async goToPayment () {
      try {
        this.loading = true
        const { data } = await this.$axios.post(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/indacoin/transactions`, {
          amountGet: this.getValue,
          amountPay: this.payload.pay,
          currencyGet: this.getCurrency,
          currencyPay: this.payload.payCurrency,
          email: this.email,
          walletAddress: this.currentAddress
        })
        this.loading = false
        window.location = get(data, 'data.transactionUrl')
      } catch (err) {
        this.$notify.error({ text: err.message })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-confirm.scss";
</style>
