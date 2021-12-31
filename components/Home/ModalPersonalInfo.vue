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
            <span class="dialog-title">Personal information</span>
          </v-card-title>
          <div class="buy-dfy__input">
            <v-form ref="formCard">
              <div class="input-card__item">
                <div class="input-card__label">
                  Address
                </div>
                <div class="input-card__field">
                  <v-text-field
                    placeholder="Enter address"
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
              <div class="input-card__cols">
                <div class="input-card__col">
                  <div class="input-card__label">
                    Email
                  </div>
                  <div class="input-card__field">
                    <v-text-field
                      placeholder="Enter email"
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
                    Phone
                  </div>
                  <div class="input-card__field">
                    <v-select
                      :items="['32', '12']"
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
                      placeholder="Enter phone"
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
              </div>
              <div class="input-card__cols">
                <div class="input-card__col">
                  <div class="input-card__label">
                    Country
                  </div>
                  <div class="input-card__field">
                    <v-select
                      :items="['32', '12']"
                      item-value="value"
                      item-text="text"
                      dense
                      outlined
                      color="#F8B017"
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                      dark
                      placeholder="Select country"
                      rounded
                      append-icon="mdi-chevron-down"
                    />
                  </div>
                </div>
                <div class="input-card__col">
                  <div class="input-card__label">
                    City
                  </div>
                  <div class="input-card__field">
                    <v-select
                      :items="['32', '12']"
                      item-value="value"
                      item-text="text"
                      dense
                      outlined
                      color="#F8B017"
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                      dark
                      placeholder="Select city"
                      rounded
                      append-icon="mdi-chevron-down"
                    />
                  </div>
                </div>
              </div>
              <div class="input-card__cols">
                <div class="input-card__col">
                  <div class="input-card__label">
                    State
                  </div>
                  <div class="input-card__field">
                    <v-text-field
                      placeholder="Enter state"
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
                    Postal
                  </div>
                  <div class="input-card__field">
                    <v-text-field
                      placeholder="Enter postal"
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
              @click="goToPayment()"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </client-only>
      <ModalPaymentInfo :show.sync="isConfirm" :payload="payload" :get-value="getValue" :get-currency="getCurrency" :email="email" />
    </v-dialog>
  </div>
</template>

<script>
import get from 'lodash/get'
import { mapState } from 'vuex'
import ModalPaymentInfo from '../Home/ModalPaymentInfo'

export default {
  components: { ModalPaymentInfo },
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
      isConfirm: false
    }
  },

  computed: {
    ...mapState('walletStore', ['currentAddress']),
    isShow: {
      get () {
        return this.show
        // return true
      },
      set (value) {
        this.$emit('update:show', value)
      }
    }
  },

  methods: {
    get,
    goToPayment () {
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
@import "~assets/components/home/_modal-personal.scss";
</style>
