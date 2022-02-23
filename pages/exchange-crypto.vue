<template>
  <div class="page">
    <div>
      <banner />
    </div>
    <div class="container main-content">
      <div class="form">
        <div class="form-title mb-11">
          Exchange crypto
        </div>
        <div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col class="py-0" cols="12" md="6">
                <div style="display: flex">
                  <input-custom
                    v-model="form.amount"
                    :rules="rules.amount"
                    placeholder="Enter Amount"
                    label="Amount"
                    style="width: 60%; padding-right: 16px"
                    required
                  />
                  <select-custom
                    v-model="form.crypto_asset_id"
                    :options="listAmountTokens"
                    :rules="rules.crypto_asset_id"
                    :label="' '"
                    placeholder="Select token"
                    style="width: 40%"
                    custom
                    item-value="id"
                  >
                    <template #selection="{ item }">
                      <img
                        class="select-img"
                        :src="$mapImageCurrency(item.symbol)"
                        alt
                      >
                      <span style="font-weight: 500;font-size: 16px;">{{ item.symbol }}</span>
                    </template>
                    <template #item="{ item }">
                      <v-list-item-content @click="onChangeCryptoAssetToken(item)">
                        <v-list-item-title
                          style="display: flex; align-items: center"
                        >
                          <img
                            class="select-img"
                            :src="
                              `https://s3.ap-southeast-1.amazonaws.com/beta-storage-dfy/upload/${item.symbol}.png`
                            "
                            alt
                            style="width: 24px; height: 24px"
                          >
                          {{ item.symbol }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </select-custom>
                </div>
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <select-custom
                  v-model="form.fiat_money_id"
                  :options="listFiats"
                  :rules="rules.fiat_money_id"
                  placeholder="Select receive"
                  label="Receive fiat"
                  required
                  item-text="fiat_money"
                  item-value="id"
                  custom
                >
                  <template #selection="{ item }">
                    <span style="font-weight: 500;font-size: 16px;">{{ item.fiat_money }}</span>
                  </template>
                  <template #item="{ item }">
                    <v-list-item-content @click="onChangeFiatMoney(item)">
                      <v-list-item-title
                        style="display: flex; align-items: center"
                      >
                        {{ item.fiat_money }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                </select-custom>
              </v-col>
              <v-col class="py-0" cols="12">
                <div class="form-sub-title mb-6">
                  Contact information
                </div>
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <input-custom
                  v-model="form.email_sender"
                  :rules="rules.email_sender"
                  placeholder="Enter email"
                  label="Email"
                  required
                />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <input-custom
                  v-model="form.full_name"
                  :rules="rules.full_name"
                  placeholder="Enter full name"
                  label="Full name"
                  required
                />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <v-row>
                  <v-col cols="12" md="5">
                    <auto-complete-custom
                      v-model="form.phone_country_id"
                      placeholder="Select countries"
                      label="Phone number"
                      required
                      :options="listPhoneCountries"
                      :rules="rules.phone.countries"
                      item-value="id"
                    >
                      <template slot="selection" slot-scope="data">
                        <span style="font-weight: 500;font-size: 16px;">{{
                          data.item.code
                        }}</span>
                      </template>

                      <template slot="item" slot-scope="data">
                        <v-list-item-content @click="onChangeCountryCode(data)">
                          <v-list-item-title
                            style="display: flex;align-items: center"
                          >
                            {{ data.item.name }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </auto-complete-custom>
                  </v-col>

                  <v-col cols="12" md="7">
                    <input-custom
                      v-model="form.phone_number"
                      :rules="rules.phone.phoneNumber"
                      :autocomplete="false"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <input-custom
                  v-model="form.address"
                  placeholder="Enter address"
                  label="Address"
                />
              </v-col>
              <v-col class="py-0" cols="12">
                <div class="form-sub-title mb-6">
                  Bank details
                </div>
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <select-custom
                  v-model="form.bank_details_request.bank_id"
                  :options="listBanks"
                  :rules="rules.bank_id"
                  placeholder="Select bank"
                  label="Select bank"
                  required
                  item-value="id"
                  item-text="name_bank"
                  custom
                >
                  <template #selection="{ item }">
                    <span>{{ item.name_bank }}</span>
                  </template>
                  <template #item="{ item }">
                    <v-list-item-content @click="onChangeBank(item)">
                      <v-list-item-title
                        style="display: flex; align-items: center"
                      >
                        <span>{{ item.name_bank }}</span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                </select-custom>
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <input-custom
                  v-model="form.bank_details_request.bank_account"
                  :rules="rules.bank_account"
                  placeholder="Enter bank account number"
                  label="Bank account"
                  required
                />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <input-custom
                  v-model="form.bank_details_request.card_holder"
                  :rules="rules.card_holder"
                  placeholder="Enter card holder"
                  label="Card holder"
                  required
                />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <input-custom
                  v-model="form.bank_details_request.sort_code"
                  :rules="rules.sort_code"
                  placeholder="Enter sort code"
                  label="Sort code"
                  required
                />
              </v-col>
            </v-row>
          </v-form>
          <div class="action py-12 d-flex justify-center">
            <button class="submit dfy-button dfy-button--primary" @click="onConfirmOrder">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
    <popup-confirm-exchange
      v-model="showPopUpConfirmExchange"
      :data="form"
      @onConfirm="onCreateExchangeCrypto"
    />
    <v-overlay :value="loading">
      <v-progress-circular
        indeterminate
        color="amber"
      />
    </v-overlay>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { isValidPhoneNumber } from 'libphonenumber-js'
import Banner from '~/components/exchange-crypto/Banner'
import InputCustom from '~/components/Custom/InputCustom'
import SelectCustom from '~/components/Custom/SelectCustom'
import AutoCompleteCustom from '~/components/Custom/AutocompleteCustom'
import { createExchangeCrypto } from '~/api/exchange-crypto-service'
import PopupConfirmExchange from '~/components/exchange-crypto/PopupConfirmExchange'
const DIALOG_TYPE = {
  SUCCESS: 1,
  ERRORS: 0
}

export default {
  name: 'ExchangeCrypto',
  components: {
    PopupConfirmExchange,
    AutoCompleteCustom,
    SelectCustom,
    InputCustom,
    Banner
  },
  layout: 'exchange-crypto',
  data () {
    return {
      valid: true,
      form: {
        amount: null,
        crypto_asset_id: null,
        fiat_money_id: null,
        email_sender: null,
        full_name: null,
        phone_country_id: null,
        phone_number: null,
        address: null,
        fee: null,
        bank_details_request: {
          bank_id: null,
          bank_account: null,
          card_holder: null,
          sort_code: null,
          bank_name: null
        },
        crypto_asset_token: null,
        fiat_money_name: null
      },
      rules: {
        amount: [v => !!v || 'Amount is required'],
        crypto_asset_id: [v => !!v || 'Token is required'],
        fiat_money_id: [v => !!v || 'Receive fiat is required'],
        email_sender: [v => !!v || 'Email is required'],
        full_name: [v => !!v || 'Full name is required'],
        phone: {
          countries: [v => !!v || 'Code country is required'],
          phoneNumber: [
            v => !!v || 'Phone number is required',
            v =>
              (v && v.length <= 50) || 'Phone number with maximum 50 character',
            v =>
              isValidPhoneNumber(`${this.phone_country_code}${v}`) ||
              'Wrong phone number format'
          ]
        },
        bank_id: [v => !!v || 'Bank is required'],
        bank_account: [v => !!v || 'Bank account is required'],
        card_holder: [v => !!v || 'Card holder is required'],
        sort_code: [v => !!v || 'Sort code is required']
      },
      phone_country_code: null,
      loading: false,
      showPopUpConfirmExchange: false
    }
  },
  computed: {
    ...mapState('exchange-crypto-store', [
      'listAmountTokens',
      'listPhoneCountries',
      'listFiats',
      'listBanks'
    ])
  },
  created () {
    this.onInitData()
  },
  methods: {
    ...mapActions('exchange-crypto-store', [
      'fetchListAmountTokens',
      'fetchListFiats',
      'fetchListBanks',
      'fetchListPhoneCountries'
    ]),
    isValidPhoneNumber,
    onChangeFiatMoney (val) {
      this.form.fiat_money_name = val.fiat_money
    },
    onChangeBank (val) {
      this.form.bank_details_request.bank_name = val.name_bank
    },
    onChangeCryptoAssetToken ({ symbol }) {
      this.form.crypto_asset_token = symbol
    },
    onChangeCountryCode ({ item }) {
      this.phone_country_code = item.code
    },
    onInitData () {
      this.fetchListAmountTokens()
      this.fetchListFiats()
      this.fetchListBanks()
      this.fetchListPhoneCountries()
    },
    onValidate () {
      this.$refs.form.validate()
    },
    async onCreateExchangeCrypto () {
      try {
        this.showPopUpConfirmExchange = false
        this.loading = true
        await createExchangeCrypto(this.form)
        this.$dialogMessage.show({
          type: DIALOG_TYPE.SUCCESS,
          message: 'Created successfully'
        })
      } catch (e) {
        this.$dialogMessage.show({
          type: DIALOG_TYPE.ERRORS,
          message: 'Error'
        })
      } finally {
        this.loading = false
      }
    },
    onConfirmOrder () {
      if (this.$refs.form.validate()) {
        this.showPopUpConfirmExchange = true
      }
    }
  }
}
</script>

<style lang="scss">
.page {
  background-image: radial-gradient(
    240px 240px at 80% 80px,
    rgba(94, 77, 94, 0.4) 0%,
    $--color-background-page 100%
  );
  @include media(md) {
    background-image: radial-gradient(
      520px 520px at 80% 120px,
      rgba(94, 77, 94, 0.4) 0%,
      $--color-background-page 100%
    );
  }
}

.main-content {
  margin-top: 62px;

  .form {
    background: #282c37;
    border-radius: 20px;
    padding: 24px 53px;

    &-title {
      font-weight: 600;
      font-size: 36px;
      color: #fff;
    }

    &-sub-title {
      font-weight: 600;
      font-size: 20px;
      color: #ffffff;
    }
  }
  .action {

  }
}

@media (min-width: 1904px) {
  .container {
    max-width: 1400px !important;
  }
}
</style>
