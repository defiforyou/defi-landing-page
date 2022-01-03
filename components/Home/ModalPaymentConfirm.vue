<template>
  <v-dialog
    v-model="isShow"
    width="630px"
    dark
  >
    <client-only>
      <v-card :height="$vuetify.breakpoint.xsOnly ? '450px' : undefined" class="scroll">
        <div class="header">
          <div class="button-back">
            <v-btn
              color="#45484F"
              fab
              :ripple="false"
              @click="handleBack"
            >
              <ArrowLeftIcon />
            </v-btn>
            <span class="label-back">Back</span>
          </div>
          <v-card-title class="d-flex align-center justify-space-between">
            <span class="dialog-title">Confirm information</span>
          </v-card-title>
          <div class="button-close">
            <v-btn
              small
              color="#45484F"
              fab
              :ripple="false"
              @click="$emit('update:show', false)"
            >
              <v-icon color="#ffffff">
                mdi-close
              </v-icon>
            </v-btn>
          </div>
        </div>

        <v-card-text>
          <div class="modal-confirm">
            <div class="d-md-flex align-center mb-4">
              <div class="modal-confirm__label">
                Amount:
              </div>
              <div class="modal-confirm__data">
                {{ $numberFormatDecimal(payload.pay) }} {{ payload.payCurrency }}
              </div>
            </div>

            <div class="d-md-flex align-center mb-4">
              <div class="modal-confirm__label">
                Receive
                <v-tooltip
                  bottom
                >
                  <template #activator="{ on, attrs }">
                    <v-icon small color="#C9CACD" v-bind="attrs" v-on="on">
                      mdi-information
                    </v-icon>
                  </template>
                  <span>Estimated amount</span>
                </v-tooltip>
              </div>
              <div class="d-flex modal-confirm__data">
                <img
                  class="select-img"
                  :src="$mapImageCurrency(getCurrency)"
                  alt
                >
                {{ $numberFormatDecimal(getValue) }}&nbsp;
                <span> DFY</span>
              </div>
            </div>
          </div>

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
              @click="handlePay()"
            >
              Pay
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </client-only>
    <ModalPaymentSuccess
      :show.sync="isConfirm"
    />
  </v-dialog>
</template>

<script>
import get from 'lodash/get'
import { mapState } from 'vuex'
import { ArrowLeftIcon } from 'vue-feather-icons'
import ModalPaymentSuccess from '../Home/ModalPaymentSuccess'

export default {
  components: { ArrowLeftIcon, ModalPaymentSuccess },
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
  emits: ['isBack'],
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
    handleBack () {
      this.$emit('update:show', false)
      this.$emit('isBack')
    },
    handlePay () {
      this.$emit('update:show', false)
      this.isConfirm = true
    //   try {
    //     this.loading = true
    //     const { data } = await this.$axios.post(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/indacoin/transactions`, {
    //       amountGet: this.getValue,
    //       amountPay: this.payload.pay,
    //       currencyGet: this.getCurrency,
    //       currencyPay: this.payload.payCurrency,
    //       email: this.email,
    //       walletAddress: this.currentAddress
    //     })
    //     this.loading = false
    //     window.location = get(data, 'data.transactionUrl')
    //   } catch (err) {
    //     this.$notify.error({ text: err.message })
    //   } finally {
    //     this.loading = false
    //   }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-payment-confirm.scss";
</style>
