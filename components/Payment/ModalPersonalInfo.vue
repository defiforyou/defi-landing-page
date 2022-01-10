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
              <InputTextField
                label="Address"
                :text.sync="address"
                :rules="addressRules"
                placeholder="Enter address"
                style="width: 100%"
                has-text
              />
              <div class="input-card__cols">
                <InputTextField
                  :text.sync="email"
                  label="Email"
                  placeholder="Enter email"
                  :rules="emailRules"
                  has-text
                />
                <InputTextField
                  label="Phone"
                  :select.sync="idPhone"
                  :text.sync="phone"
                  has-select
                  :items="[1,2,3]"
                  class-select="select-phone"
                  class-input="field-phone"
                  placeholder="Enter phone"
                  :rules="phoneRules"
                  has-text
                />
              </div>
              <div class="input-card__cols">
                <InputTextField
                  label="Country"
                  :items="countries"
                  placeholder-select="Select country"
                  :select.sync="country"
                  has-select
                />
                <InputTextField
                  label="City"
                  :items="cities"
                  placeholder-select="Select city"
                  has-select
                  :select.sync="city"
                />
              </div>
              <div class="input-card__cols">
                <InputTextField
                  label="State"
                  :select.sync="state"
                  :items="['a', 'b', 'c']"
                  placeholder-select="Select state"
                  has-select
                />
                <InputTextField
                  label="Postal"
                  :text.sync="postal"
                  placeholder="Enter postal"
                  has-text
                />
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
        @isBack="showModalBefore"
      />
    </v-dialog>
  </div>
</template>

<script>
import get from 'lodash/get'
import { mapState, mapActions } from 'vuex'
import ModalPaymentInfo from './ModalPaymentInfo'
import InputTextField from './Input'
export default {
  components: { ModalPaymentInfo, InputTextField },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      address: 'abc',
      email: 'a@gmail.com',
      idPhone: '+84',
      phone: '1212',
      country: '',
      city: '',
      state: '',
      postal: '',
      isMore: false,
      loading: false,
      isConfirm: false
    }
  },
  computed: {
    ...mapState('walletStore', ['currentAddress']),
    ...mapState('payment', ['countries', 'cities']),
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
        // eslint-disable-next-line no-mixed-operators
        v => v && v.length <= 50 || 'Email with maximum 50 character'
      ]
    },
    phoneRules () {
      return [
        v => !!v || Number(v) > 0 || 'Invalid Phone number',
        v => /^[0-9]+$/.test(v) || 'Invalid Phone number',
        v => (v && v.length >= 0 && v.length <= 20) || 'Phone number with maximum 20 digits'
      ]
    }
    // postalRules () {
    //   return []
    // }
  },
  watch: {
    country () {
      console.log('watch', this.country)
      this.getCities(this.country)
    }
  },
  created () {
    this.getCountries()
  },
  methods: {
    ...mapActions('payment', ['getCountries', 'getCities']),
    get,
    showModalBefore () {
      this.$emit('update:show', true)
    },
    goToPaymentInfo () {
      // eslint-disable-next-line no-console
      console.log('phone', this.idPhone, this.phone, this.email, this.country, this.city)
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
