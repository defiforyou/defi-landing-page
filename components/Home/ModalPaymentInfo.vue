<template>
  <div>
    <v-dialog
      v-model="isShow"
      width="867px"
      dark
      class="dfy-personal-info"
    >
      <client-only>
        <v-card :height="$vuetify.breakpoint.xsOnly ? '450px' : undefined" class="scroll">
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

          <v-card-title class="d-flex align-center justify-space-between">
            <div class="button-back">
              <v-btn
                color="#45484F"
                fab
                :ripple="false"
                @click="$emit('update:show', false)"
              >
                <ArrowLeftIcon />
              </v-btn>
              <span class="label-back">Back</span>
            </div>
            <span class="dialog-title">Payment information</span>
          </v-card-title>
          <div class="buy-dfy__input">
            <v-form ref="formCard">
              <div class="input-card__cols">
                <div class="input-card__col">
                  <div class="input-card__label">
                    Card Number
                  </div>
                  <div class="input-card__field">
                    <v-text-field
                      placeholder="Enter card number"
                      type="text"
                      color="#F8B017"
                      outlined
                      required
                      rounded
                      dense
                      dark
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      class="field-amount"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                    />
                  </div>
                </div>
                <div class="input-card__col">
                  <div class="input-card__label">
                    Cvv
                  </div>
                  <div class="input-card__field input-card__field-icon">
                    <v-text-field
                      placeholder="Enter cvv"
                      type="text"
                      color="#F8B017"
                      outlined
                      required
                      rounded
                      dense
                      dark
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      class="field-cvv"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                    />
                    <v-icon class="icon-input" color="#C9CACD">
                      mdi-information
                    </v-icon>
                    <v-img
                      max-height="131"
                      max-width="202"
                      src="/img/payment_cvv.png"
                      class="img-cvv"
                    />
                  </div>
                </div>
              </div>
              <div class="input-card__cols">
                <div class="input-card__col">
                  <div class="input-card__label">
                    Name
                  </div>
                  <div class="input-card__field">
                    <v-select
                      v-model="name"
                      :items="['Mr', 'Mrs', 'Miss', 'Other']"
                      item-value="value"
                      item-text="text"
                      dense
                      outlined
                      color="#F8B017"
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                      dark
                      rounded
                      append-icon="mdi-chevron-down"
                      class="select-phone"
                    />
                    <v-text-field
                      placeholder="Enter name"
                      type="text"
                      color="#F8B017"
                      outlined
                      required
                      rounded
                      dense
                      dark
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      class="field-phone"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                    />
                  </div>
                </div>
                <div class="input-card__col">
                  <div class="input-card__label">
                    Expiry date
                  </div>
                  <div class="input-card__field input-card__field-icon">
                    <v-text-field
                      placeholder="mm/yyyy"
                      type="text"
                      color="#F8B017"
                      outlined
                      required
                      rounded
                      dense
                      dark
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      class="field-amount"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                    />
                    <img src="/img/payment_calendar.svg" alt="" class="icon-input">
                  </div>
                </div>
              </div>
              <div class="input-card__cols">
                <div class="input-card__col">
                  <div class="input-card__label">
                    Amount
                  </div>
                  <div class="input-card__field">
                    <v-text-field
                      type="text"
                      color="#F8B017"
                      outlined
                      required
                      rounded
                      dense
                      dark
                      suffix="USD"
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      class="field-amount"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                    />
                  </div>
                </div>
              </div>
            </v-form>
          </div>
          <v-card-actions class="justify-center pb-10">
            <v-btn
              color="#F8B017"
              depressed
              dense
              height="40px"
              width="160px"
              rounded
              class="go-payment"
              :loading="loading"
              @click="handleSubmit()"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </client-only>
    </v-dialog>
    <ModalPaymentConfirm :show.sync="isConfirm" :payload="payload" :get-value="getValue" :get-currency="getCurrency" :email="email" />
  </div>
</template>

<script>
import get from 'lodash/get'
import { mapState } from 'vuex'
import { ArrowLeftIcon } from 'vue-feather-icons'
import ModalPaymentConfirm from '../Home/ModalPaymentConfirm'
export default {
  components: {
    ArrowLeftIcon,
    ModalPaymentConfirm
  },
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
      loading: false,
      name: 'Mr',
      isConfirm: false
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
    handleSubmit () {
      this.isConfirm = true
      // try {
      //   this.loading = true
      //   const { data } = await this.$axios.post(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/indacoin/transactions`, {
      //     amountGet: this.getValue,
      //     amountPay: this.payload.pay,
      //     currencyGet: this.getCurrency,
      //     currencyPay: this.payload.payCurrency,
      //     email: this.email,
      //     walletAddress: this.currentAddress
      //   })
      //   this.loading = false
      //   window.location = get(data, 'data.transactionUrl')
      // } catch (err) {
      //   this.$notify.error({ text: err.message })
      // } finally {
      //   this.loading = false
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-payment.scss";
</style>
