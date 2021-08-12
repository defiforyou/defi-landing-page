<template>
  <div class="input-card">
    <v-form ref="formCard">
      <div class="input-card__item">
        <div class="input-card__label">
          You pay
        </div>
        <div class="input-card__field">
          <v-text-field
            v-model="payload.pay"
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
            hide-details="auto"
            class="field-amount"
            :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
          />

          <v-select
            v-model="payload.payCurrency"
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
            hide-details="auto"
            append-icon="mdi-chevron-down"
            class="select-currency"
          />
        </div>
      </div>

      <div class="input-card__item">
        <div class="input-card__label">
          You get
        </div>

        <div class="input-card__field">
          <v-text-field
            v-model="getValue"
            type="number"
            placeholder="Enter get"
            color="#F8B017"
            outlined
            required
            rounded
            dense
            dark
            disabled
            :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
            :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
            hide-details="auto"
          />

          <v-select
            v-model="getCurrency"
            :items="currencies.currenciesGet"
            dense
            outlined
            color="#F8B017"
            :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
            :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
            placeholder="All"
            dark
            rounded
            hide-details="auto"
            append-icon=""
            class="select-currency"
          >
            <template slot="selection" slot-scope="data">
              <img
                class="select-img"
                :src="$mapImageCurrency(data.item)"
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

      <div class="input-card__item">
        <div class="input-card__label">
          Email
        </div>
        <v-text-field
          v-model="payload.email"
          :rules="emailRules"
          type="email"
          placeholder="Enter email"
          color="#F8B017"
          outlined
          required
          hide-details="auto"
          rounded
          dense
          dark
          :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
          :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
        />
      </div>

      <div class="input-card__item mb-0">
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
          hide-details
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
          @click="isWallet = true"
        >
          Connect wallet
        </v-btn>

        <div class="d-flex align-center checkbox">
          <v-checkbox
            v-model="isCheckBox"
            color="#F8B017"
            dark
            @change="value => isDisable = !value"
          />

          <span class="checkbox-text">
            I agree with the <a href="https://defi-for-you.gitbook.io/faq/p2p-lending/term-business" target="_blank">Terms & Conditions and Policies</a> of DeFi For You.
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
        @click="buyDFY()"
      >
        Buy DFY
      </v-btn>
    </div>

    <ChooseWallet :show.sync="isWallet" />
    <ModalConfirm :show.sync="isConfirm" :payload="payload" :get-value="getValue" :get-currency="getCurrency" />
  </div>
</template>

<script>
import get from 'lodash/get'
import { mapState } from 'vuex'
import ChooseWallet from '../ChooseWallet'
import ModalConfirm from '../Home/ModalConfirm'
export default {
  components: {
    ChooseWallet,
    ModalConfirm
  },

  data () {
    return {
      payload: {
        pay: '',
        payCurrency: 'USD',
        email: ''
      },
      getValue: '',
      getCurrency: 'DFY',
      isWallet: false,
      isCheckBox: true,
      isConfirm: false,
      isDisable: false
    }
  },

  computed: {
    ...mapState('walletStore', ['currentAddress']),
    ...mapState('indaCoin', ['currencies']),
    payRules () {
      return [
        v => !!v || 'Invalid amount',
        v => parseFloat(v) > 0 || 'Invalid amount',
        v => /^\d+(\.\d{0,5})?$/.test(v) || 'must below 5 digit after decimal',
        v => (v && v.length >= 0 && v.length <= 255) || 'Invalid amount'
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
    emailRules () {
      return [
        // eslint-disable-next-line no-useless-escape
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(v) || 'Invalid email'
      ]
    },
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
    async getRate () {
      const { data } = await this.$axios.get(`https://indacoin.com/api/GetCoinConvertAmount/${this.payload.payCurrency}/${this.getCurrency}/${this.payload.pay}`)
      this.getValue = data
    },
    buyDFY () {
      if (this.$refs.formCard.validate()) {
        this.isConfirm = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_buy-dfy.scss";
</style>
