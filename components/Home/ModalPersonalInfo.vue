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
                    :rules="addressRules"
                    placeholder="Enter address"
                    type="text"
                    color="#F8B017"
                    outlined
                    required
                    rounded
                    dense
                    dark
                    :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                    class="field-address"
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
                      v-model="email"
                      :rules="emailRules"
                      placeholder="Enter email"
                      type="text"
                      color="#F8B017"
                      outlined
                      required
                      rounded
                      dense
                      dark
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      class="field-email"
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
                      v-model="phone"
                      :rules="phoneRules"
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
                      placeholder="Select state"
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
              @click="goToPaymentInfo"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </client-only>
      <ModalPaymentInfo
        :show.sync="isConfirm"
        :payload="payload"
        :get-value="getValue"
        :get-currency="getCurrency"
        :email="email"
        @isBack="showModalBefore"
      />
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
    }
  },

  data () {
    return {
      email: '',
      phone: '',
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
    },
    addressRules () {
      return [
        v => !!v || (v && v.length >= 0 && v.length <= 100) || 'Invalid Address Detail'
      ]
    },
    emailRules () {
      return [
        // eslint-disable-next-line no-useless-escape
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(v) || 'Invalid email',
        v => v.length <= 50 || 'Email with maximum 50 character'
      ]
    },
    phoneRules () {
      return [
        v => !!v || Number(v) > 0 || 'Invalid Phone number',
        v => /^[0-9]+$/.test(v) || 'Invalid Phone number',
        v => (v && v.length >= 0 && v.length <= 20) || 'Phone number with maximum 20 digits'
      ]
    }
  },

  methods: {
    get,
    showModalBefore () {
      this.$emit('update:show', true)
    },
    goToPaymentInfo () {
      if (this.$refs.formCard.validate()) {
        this.$emit('update:show', false)
        this.isConfirm = true
      } else
        this.isConfirm = false
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
