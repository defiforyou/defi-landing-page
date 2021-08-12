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
            v-model="payload.get"
            type="number"
            placeholder="Enter get"
            color="#F8B017"
            outlined
            required
            rounded
            dense
            dark
            :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
            :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
            hide-details="auto"
          />

          <v-select
            v-model="payload.getCurrency"
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
    </v-form>

    <div class="input-card__item mb-0">
      <div class="input-card__label mb-4">
        Wallet address
      </div>

      <v-text-field
        v-if="currentAddress"
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
        @click="isConfirm = true"
      >
        Buy DFY
      </v-btn>
    </div>

    <ChooseWallet :show.sync="isWallet" />
    <ModalConfirm :show.sync="isConfirm" />
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
        get: '',
        getCurrency: 'DFY'
      },
      isWallet: false,
      isCheckBox: true,
      isConfirm: false,
      isDisable: false,
      payRules: [
        v => !!v || 'Invalid amount',
        v => parseFloat(v) > 0 || 'Invalid amount',
        v => /^\d+(\.\d{0,5})?$/.test(v) || 'must below 5 digit after decimal',
        v => (v && v.length >= 0 && v.length <= 255) || 'Invalid amount'
      ]
    }
  },

  computed: {
    ...mapState('walletStore', ['currentAddress']),
    ...mapState('indaCoin', ['currencies'])
  },

  methods: {
    get
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_buy-dfy.scss";
</style>
