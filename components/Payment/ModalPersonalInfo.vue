<template>
  <div>
    <v-dialog v-model="isShow" width="867px" dark class="dfy-personal-info">
      <client-only>
        <v-card
          :height="$vuetify.breakpoint.xsOnly ? '450px' : undefined"
          class="scroll"
        >
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
                <div class="input-card__col">
                  <div class="input-card__label">
                    Phone
                  </div>
                  <div class="input-card__field">
                    <v-select
                      :value="valuePhoneCode"
                      :rules="phoneCodeRules"
                      :items="phones"
                      dense
                      outlined
                      color="#F8B017"
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      :style="
                        $vuetify.breakpoint.smAndUp
                          ? 'font-size: 16px'
                          : 'font-size: 14px'
                      "
                      dark
                      class="select-phone"
                      rounded
                      return-object
                      append-icon="mdi-chevron-down"
                    >
                      <template #selection="{ item }">
                        <img
                          :src="`https://flagcdn.com/h20/${item.country_code.toLowerCase()}.png`"
                        ><span>
                          {{
                            item.phone_code.includes("+")
                              ? item.phone_code
                              : `+${item.phone_code}`
                          }}
                        </span>
                      </template>
                      <template #item="{ item }">
                        <img
                          :src="`https://flagcdn.com/h20/${item.country_code.toLowerCase()}.png`"
                          style="
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            margin-right: 10px;
                            object-fit: cover;
                          "
                        >{{ item.phone_code }}
                      </template>
                    </v-select>
                    <v-text-field
                      v-model="phone"
                      placeholder="Enter phone"
                      :rules="phoneRules"
                      type="text"
                      color="#F8B017"
                      outlined
                      required
                      rounded
                      dense
                      dark
                      class="field-phone"
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      :style="
                        $vuetify.breakpoint.smAndUp
                          ? 'font-size: 16px'
                          : 'font-size: 14px'
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="input-card__cols">
                <!-- <InputTextField
                  label="Country"
                  :items="countries"
                  no-object
                  value-select="country_code"
                  text-select="name"
                  placeholder-select="Select country"
                  :select.sync="country"
                  :rules="countryRules"
                  has-select
                /> -->
                <div class="input-card__col">
                  <div class="input-card__label">
                    Country
                  </div>
                  <div class="input-card__field">
                    <v-select
                      v-model="country"
                      :items="countries"
                      :rules="countryRules"
                      item-text="name"
                      dense
                      outlined
                      color="#F8B017"
                      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                      dark
                      rounded
                      return-object
                      append-icon="mdi-chevron-down"
                      placeholder="Select country"
                    />
                  </div>
                </div>
                <InputTextField
                  label="City"
                  placeholder-select="Enter city"
                  has-text
                  :text.sync="city"
                  :rules="cityRules"
                />
              </div>
              <div class="input-card__cols">
                <InputTextField
                  label="State"
                  :select.sync="state"
                  :items="states"
                  value-select="state_code"
                  text-select="name"
                  placeholder-select="Select state"
                  has-select
                />
                <InputTextField
                  :label="labelPostal"
                  :rules="postalRules"
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
              @click="goToPaymentInfo"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </client-only>
      <ModalPaymentInfo :show.sync="isConfirm" @isBack="showModalBefore" />
    </v-dialog>
  </div>
</template>

<script>
import get from 'lodash/get'
import { mapGetters, mapActions } from 'vuex'
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
      phone: '',
      country: '',
      city: '',
      state: '',
      postal: '',
      isConfirm: false
    }
  },
  computed: {
    ...mapGetters('payment', ['countries', 'states', 'phones', 'valueUser']),
    getIndexCountry () {
      return this.phones?.findIndex((item) => item?.name === this.country.name)
    },
    valuePhoneCode () {
      return this.phones[this.getIndexCountry]
    },
    convertPhone () {
      const phoneCode = this.phones[this.getIndexCountry]?.phone_code
      return phoneCode.charAt(0) === '+'
        ? phoneCode.slice(1) + this.phone
        : phoneCode + this.phone
    },
    labelPostal () {
      const postalArray = [
        'United Kingdom',
        'Russia',
        'Austria',
        'Belgium',
        'Bulgaria',
        'Croatia',
        'Republic of Cyprus',
        'Czech Republic',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hungary',
        'Ireland',
        'Italy',
        'Latvia',
        'Lithuania',
        'Luxembourg',
        'Malta',
        'Netherlands',
        'Poland',
        'Portugal',
        'Romania',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Sweden'
      ]
      return postalArray.includes(this.country.name) ? 'Postal' : 'Zip'
    },
    isShow: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('update:show', value)
      }
    },
    addressRules () {
      return [
        (v) =>
          !!v ||
          (v && v.length >= 0 && v.length <= 100) ||
          'Invalid Address Detail'
      ]
    },
    emailRules () {
      return [
        (v) =>
        // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(v) || 'Invalid email',
        // eslint-disable-next-line no-mixed-operators
        (v) => (v && v.length <= 50) || 'Email with maximum 50 character'
      ]
    },
    phoneRules () {
      return [
        (v) => !!v || Number(v) > 0 || 'Invalid Phone number',
        (v) => /^[0-9]+$/.test(v) || 'Invalid Phone number',
        (v) =>
          (v && v.length >= 0 && v.length <= 20) ||
          'Phone number with maximum 20 digits'
      ]
    },
    postalRules () {
      return [
        (v) =>
          !!v ||
          (this.labelPostal === 'Postal'
            ? 'Postal code is required'
            : 'Zip code is required '),
        // eslint-disable-next-line no-mixed-operators
        (v) =>
          (v && v.length <= 50) ||
          (this.labelPostal === 'Postal'
            ? 'Invalid Postal code'
            : 'Invalid Zip code')
      ]
    },
    countryRules () {
      return [
        (v) =>
          // eslint-disable-next-line no-mixed-operators
          Object.keys(v).length > 0 || 'Country is required'

      ]
    },
    phoneCodeRules () {
      return [
        (v) =>
          !!v || 'Phone code is required'

      ]
    },
    stateRules () {
      return [
        (v) => !!v || 'State is required'
      ]
    },
    cityRules () {
      return [
        (v) => !!v || 'City is required',
        // eslint-disable-next-line no-mixed-operators
        (v) => (v && v.length <= 50) || 'Invalid city',
        // eslint-disable-next-line no-mixed-operators
        (v) =>
          (v && /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]*$/.test(v)) ||
          'Invalid city'
      ]
    }
  },
  watch: {
    country () {
      this.getStates(this.country.id)
      // eslint-disable-next-line no-unused-expressions
      this.labelPostal
      // eslint-disable-next-line no-unused-expressions
      this.postalRules
    }
  },
  created () {
    this.getCountries()
    this.getPhones()
  },
  methods: {
    ...mapActions('payment', [
      'getCountries',
      'getStates',
      'getPhones',
      'getValueUser'
    ]),
    get,
    showModalBefore () {
      this.$emit('update:show', true)
    },
    goToPaymentInfo () {
      if (this.$refs.formCard.validate()) {
        const dataEntered = {
          address: this.address,
          email: this.email,
          phone: this.convertPhone,
          country: this.country.country_code,
          city: this.city,
          state: this.state.state_code || null,
          postal: this.postal
        }
        this.getValueUser(dataEntered)
        this.$emit('update:show', false)
        this.isConfirm = true
      } else {
        this.isConfirm = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-personal.scss";
</style>
