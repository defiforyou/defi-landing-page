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
                  :select.sync="phoneSelect"
                  value-select="phone_code"
                  text-select="phone_code"
                  :text.sync="phone"
                  has-select
                  :items="phones"
                  class-select="select-phone"
                  class-input="field-phone"
                  placeholder="Enter phone"
                  :value-default="getPhoneDefault"
                  :rules="phoneRules"
                  has-text
                />
              </div>
              <div class="input-card__cols">
                <InputTextField
                  label="Country"
                  :items="countries"
                  value-select="id"
                  text-select="name"
                  placeholder-select="Select country"
                  :select.sync="country"
                  has-select
                />
                <InputTextField
                  label="City"
                  placeholder-select="Enter city"
                  has-text
                  :text.sync="city"
                />
              </div>
              <div class="input-card__cols">
                <InputTextField
                  label="State"
                  :text.sync="state"
                  :items="['a', 'b', 'c']"
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
      <ModalPaymentInfo
        :show.sync="isConfirm"
        :data-entered="dataEntered"
        @isBack="showModalBefore"
      />
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
      phoneSelect: '',
      phone: '1212',
      country: '',
      city: '',
      state: '',
      postal: '',
      isConfirm: false,
      dataEntered: {}
    }
  },
  computed: {
    ...mapGetters('payment', ['countries', 'cities', 'phones']),
    getPhoneDefault () {
      return this.phones.filter(phone => phone.name === this.country.name).map(item => item.phone_code).join('')
    },
    labelPostal () {
      const postalArray = ['United Kingdom', 'Russia', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Republic of Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden']
      return postalArray.includes(this.country.name) ? 'Postal' : 'Zip'
    },
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
    },
    postalRules () {
      return [
        v => !!v || (this.labelPostal === 'Postal' ? 'Postal code is required' : 'Zip code is required '),
        // eslint-disable-next-line no-mixed-operators
        v => v && v.length <= 50 || (this.labelPostal === 'Postal' ? 'Invalid Postal code' : 'Invalid Zip code')
      ]
    },
    stateRules () {
      return [
        v => !!v || 'State is required',
        // eslint-disable-next-line no-mixed-operators
        v => v && v.length <= 50 || 'Invalid state'
      ]
    }
  },
  watch: {
    country () {
      this.getCities(this.country.id)
      // eslint-disable-next-line no-unused-expressions
      this.labelPostal
    }
  },
  created () {
    this.getCountries()
    this.getPhones()
  },
  methods: {
    ...mapActions('payment', ['getCountries', 'getCities', 'getPhones']),
    get,
    showModalBefore () {
      this.$emit('update:show', true)
    },
    goToPaymentInfo () {
      // eslint-disable-next-line no-console
      if (this.$refs.formCard.validate()) {
        this.dataEntered = {
          address: this.address,
          email: this.email,
          phone: this.getPhoneDefault + this.phone,
          country: this.city.country_id,
          city: this.city.state_code,
          state: this.state,
          postal: this.postal
        }
        console.log('data', this.dataEntered)
        this.$emit('update:show', false)
        this.isConfirm = true
      } else
        this.isConfirm = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-personal.scss";
</style>
