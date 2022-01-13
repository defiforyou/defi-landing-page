<template>
  <div class="input-card">
    <v-form ref="formCard">
      <div class="input-card__item input-card__item--wallet">
        <div class="input-card__label mb-4">
          Wallet address
        </div>

        <v-text-field
          v-if="currentAddress"
          :rules="walletRules"
          :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
          :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
          color="#F8B017"
          outlined
          rounded
          dark
          readonly
          dense
          :value="$vuetify.breakpoint.smAndUp ? currentAddress : $shortAddress(currentAddress, 5)"
        >
          <template #append>
            <v-btn
              depressed
              dense
              color="#F8B017"
              rounded
              class="change-wallet"
              @click="isWallet = true"
            >
              Change wallet
            </v-btn>
          </template>
        </v-text-field>

        <v-btn
          v-else
          depressed
          dense
          outlined
          color="#F8B017"
          rounded
          class="connect-wallet"
          @click="isWallet = true"
        >
          Connect wallet
        </v-btn>
      </div>
      <div class="input-card__item">
        <div class="input-card__label">
          Amount
        </div>
        <div class="input-card__field">
          <v-text-field
            v-model="payload.amountPay"
            :rules="payRules"
            type="number"
            placeholder="Enter amount"
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

          <v-select
            v-model="payload.currency"
            :items="currencies.currenciesPay"
            item-value="value"
            item-text="text"
            dense
            outlined
            color="#F8B017"
            :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
            :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
            placeholder="All"
            dark
            rounded
            append-icon="mdi-chevron-down"
            class="select-currency"
          />
        </div>
      </div>

      <div class="input-card__item">
        <div class="input-card__label">
          Receive
          <v-tooltip
            right
          >
            <template #activator="{ on, attrs }">
              <v-icon small color="#C9CACD" v-bind="attrs" v-on="on">
                mdi-information
              </v-icon>
            </template>
            <span>Estimated amount</span>
          </v-tooltip>
        </div>

        <div class="input-card__field">
          <v-text-field
            v-model="payload.amountGet"
            type="number"
            color="#F8B017"
            outlined
            required
            rounded
            dense
            dark
            disabled
            :loading="loadingRate"
            :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
            :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
          />

          <v-select
            v-model="currencyGet"
            :items="currencies.currenciesGet"
            dense
            outlined
            color="#F8B017"
            :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
            :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
            placeholder="All"
            dark
            rounded
            append-icon=""
            class="select-currency"
          >
            <template slot="selection" slot-scope="data">
              <img
                class="select-img"
                :src="$mapImageCurrency(currencies.currenciesGet.join(''))"
                alt
              >
              <span style="font-weight: 500;font-size: 16px;">{{ data.item }}</span>
            </template>
            <template slot="item" slot-scope="data">
              <v-list-item-content>
                <v-list-item-title style="display: flex; align-items: center">
                  <img
                    class="select-img"
                    :src="require(`~/assets/img/coin/${data.item}.png`)"
                    alt
                    style="width: 24px; height: 24px"
                  >
                  {{ data.item }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-select>
        </div>
      </div>

      <!-- <div class="input-card__item">
        <div class="input-card__label">
          Email
        </div>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          type="email"
          placeholder="Enter email"
          color="#F8B017"
          outlined
          required
          rounded
          dense
          dark
          :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
          :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
        />
      </div> -->

      <div class="input-card__item mb-0">
        <div class="d-flex align-center checkbox">
          <v-checkbox
            v-model="isCheckBox"
            color="#F8B017"
            dark
            @change="value => isDisable = !value"
          />
          <span class="checkbox-text">
            I agree with the
            <a href="https://defi-for-you.gitbook.io/faq/p2p-lending/term-business" target="_blank">Terms & Conditions and Policies</a>
            <!-- and
            <a href="https://defi-for-you.gitbook.io/faq/p2p-lending/privacy-policy" target="_blank">Privacy Policy</a> -->
            of DeFi For You.
          </span>
        </div>
      </div>
    </v-form>

    <div class="input-card__btn text-center">
      <v-btn
        depressed
        dense
        color="#F8B017"
        rounded
        :height="$vuetify.breakpoint.smAndUp ? '47px' : '40px'"
        width="114px"
        style="color: #FFFFFF"
        :disabled="isDisable"
        @click="goToPersonalInfo"
      >
        Continue
      </v-btn>
    </div>

    <ChooseWallet :show.sync="isWallet" />
    <ModalPersonalInfo :show.sync="isConfirm" />
    <!-- <ModalConfirm :show.sync="isConfirm" :payload="payload" :get-value="getValue" :get-currency="getCurrency" :email="email" /> -->
  </div>
</template>

<script>
import get from 'lodash/get'
import { mapState, mapActions } from 'vuex'
import ChooseWallet from '../ChooseWallet.vue'
// import ModalConfirm from '../Home/ModalConfirm'
import ModalPersonalInfo from './ModalPersonalInfo'
export default {
  components: {
    ChooseWallet,
    ModalPersonalInfo
    // ModalConfirm
  },

  data () {
    return {
      payload: {
        amountPay: '',
        currency: 'USD',
        amountGet: '0'
      },
      currencyGet: 'DFY',
      // email: '',
      isWallet: false,
      isCheckBox: true,
      isConfirm: false,
      isDisable: false,
      loadingRate: false
    }
  },

  computed: {
    ...mapState('walletStore', ['currentAddress']),
    ...mapState('indaCoin', ['currencies']),
    payRules () {
      return [
        v => !!v || 'Invalid amount',
        v => parseFloat(v) > 0 || 'Invalid amount',
        v => /^\d+(\.\d{0,5})?$/.test(v) || 'Must below 5 digit after decimal',
        v => (v && v.length >= 0 && v.length <= 50) || 'Invalid amount'
        // this.payload.payCurrency === 'USD' ? v => parseFloat(v) >= 40 || 'Amount must be greater than 40 USD' : true,
        // this.payload.payCurrency === 'VND' ? v => parseFloat(v) >= 912200 || 'Amount must be greater than 912,200 VND' : true,
        // this.payload.payCurrency === 'AUD' ? v => parseFloat(v) >= 54.35 || 'Amount must be greater than 54.35 AUD' : true,
        // this.payload.payCurrency === 'BRL' ? v => parseFloat(v) >= 208.78 || 'Amount must be greater than 208.78 BRL' : true,
        // this.payload.payCurrency === 'CAD' ? v => parseFloat(v) >= 50.07 || 'Amount must be greater than 50.07 CAD' : true,
        // this.payload.payCurrency === 'CHF' ? v => parseFloat(v) >= 36.88 || 'Amount must be greater than 36.88 CHF' : true,
        // this.payload.payCurrency === 'CNY' ? v => parseFloat(v) >= 259.13 || 'Amount must be greater than 259.13 CHF' : true,
        // this.payload.payCurrency === 'CZK' ? v => parseFloat(v) >= 865.78 || 'Amount must be greater than 865.78 CZK' : true,
        // this.payload.payCurrency === 'DKK' ? v => parseFloat(v) >= 253.51 || 'Amount must be greater than 253.51 DKK' : true,
        // this.payload.payCurrency === 'EUR' ? v => parseFloat(v) >= 34.08 || 'Amount must be greater than 34.08 EUR' : true,
        // this.payload.payCurrency === 'GBP' ? v => parseFloat(v) >= 28.85 || 'Amount must be greater than 28.85 GBP' : true,
        // this.payload.payCurrency === 'INR' ? v => parseFloat(v) >= 2973.30 || 'Amount must be greater than 2,973.30 INR' : true,
        // this.payload.payCurrency === 'NOK' ? v => parseFloat(v) >= 354.36 || 'Amount must be greater than 354.36 NOK' : true,
        // this.payload.payCurrency === 'NZD' ? v => parseFloat(v) >= 56.92 || 'Amount must be greater than 56.92 NZD' : true,
        // this.payload.payCurrency === 'PLN' ? v => parseFloat(v) >= 156.32 || 'Amount must be greater than 156.32 PLN' : true,
        // this.payload.payCurrency === 'RUB' ? v => parseFloat(v) >= 2944.58 || 'Amount must be greater than 2,944.58 RUB' : true,
        // this.payload.payCurrency === 'SEK' ? v => parseFloat(v) >= 347.39 || 'Amount must be greater than 347.39 SEK' : true
      ]
    },
    // emailRules () {
    //   return [
    //     // eslint-disable-next-line no-useless-escape
    //     v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(v) || 'Invalid email',
    //     v => v.length <= 50 || 'Email with maximum 50 character'
    //   ]
    // },
    walletRules () {
      return [
        this.currentAddress ? true : v => 'Invalid Address'
      ]
    }
  },

  watch: {
    payload: {
      deep: true,

      // We have to move our method to a handler field
      handler () {
        this.getRate()
      }
    }
  },

  methods: {
    get,
    ...mapActions('payment', ['getValueUser', 'getRateExchange']),
    ...mapState('payment', ['valueUser', 'isLoading']),
    async getRate () {
      // this.getRateExchange(this.payload)
      try {
        this.loadingRate = true
        // const { data } = await this.$axios.get(`https://indacoin.com/api/GetCoinConvertAmount/${this.payload.payCurrency}/${this.payload.getCurrency}/${this.payload.pay}`)
        const { data } = await this.$axios.get(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/buy-dfy/currencies`)
        this.loadingRate = false
        switch (this.payload.currency.toLowerCase()) {
          case 'usd':
            this.payload.amountGet = (data.data['defi-for-you'].usd * this.payload.amountPay).toFixed(5)
            break
          case 'eur':
            this.payload.amountGet = (data.data['defi-for-you'].eur * this.payload.amountPay).toFixed(5)
            break
          case 'gbp':
            this.payload.amountGet = (data.data['defi-for-you'].gbp * this.payload.amountPay).toFixed(5)
            break
          default: return 0
        }
        this.getValueUser(this.payload)
      } catch (e) {
        return e
      } finally {
        this.loadingRate = false
      }
    },
    goToPersonalInfo () {
      if (this.$refs.formCard.validate()) {
        if (this.currentAddress) {
          this.isConfirm = true
          this.getValueUser(this.payload)
        } else {
          this.$notify.error({ text: 'Please connect your wallet first' })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_buy-dfy.scss";
</style>
