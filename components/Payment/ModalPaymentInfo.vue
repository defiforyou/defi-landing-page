<template>
  <div>
    <v-dialog
      v-model="isShow"
      width="867px"
      dark
      class="dfy-personal-info"
    >
      <client-only>
        <v-card :height="$vuetify.breakpoint.xsOnly ? '607px' : undefined" class="scroll">
          <div class="header">
            <div class="button-back">
              <v-btn
                color="#45484F"
                fab
                :ripple="false"
                @click="handleBack"
              >
                <ArrowLeftIcon />
              </v-btn>
              <span class="label-back">Back</span>
            </div>
            <v-card-title class="d-flex align-center justify-space-between">
              <span class="dialog-title">Confirm information</span>
            </v-card-title>
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
          </div>
          <v-card-title class="d-flex align-center justify-center mb-4">
            <span class="dialog-title-mobile">Payment information</span>
          </v-card-title>
          <div class="buy-dfy__input">
            <v-form ref="formCard">
              <div class="input-card__cols">
                <InputTextField
                  label="Card Number"
                  :rules="cardRules"
                  :text.sync="cardNumber"
                  placeholder="Enter card number"
                  has-text
                />
                <div class="input-card__col">
                  <div class="input-card__label">
                    Cvv
                  </div>
                  <div class="input-card__field input-card__field-icon">
                    <v-text-field
                      v-model="cvvText"
                      :rules="cvvRules"
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
                    <v-icon class="icon-input icon-info" color="#C9CACD">
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
                <InputTextField
                  label="Name"
                  :select.sync="gender"
                  :text.sync="name"
                  has-select
                  :items="['Mr', 'Mrs', 'Miss', 'Other']"
                  class-select="select-phone"
                  class-input="field-phone"
                  placeholder="Enter name"
                  :rules="nameRules"
                  :value-default="gender"
                  has-text
                />
                <div class="input-card__col">
                  <div class="input-card__label">
                    Expiry date
                  </div>
                  <div class="input-card__field input-card__field-icon">
                    <v-app id="inspire">
                      <v-menu
                        ref="menu"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                      >
                        <template #activator="{ on, attrs }">
                          <v-text-field
                            v-model="formatDate"
                            :rules="dateRules"
                            color="#F8B017"
                            placeholder="mm/yyyy"
                            outlined
                            required
                            rounded
                            dense
                            dark
                            :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
                            class="field-expiry"
                            :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          />
                          <img src="/img/payment_calendar.svg" alt="" class="icon-input">
                        </template>
                        <v-date-picker
                          v-model="date"
                          :rules="dateRules"
                          no-title
                          scrollable
                          type="month"
                          :min="new Date().toISOString().slice(0, 7)"
                        >
                          <!-- <v-spacer />
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                          >
                            OK
                          </v-btn> -->
                        </v-date-picker>
                      </v-menu>
                    </v-app>
                  </div>
                </div>
              </div>
              <div class="input-card__cols">
                <InputTextField
                  :text.sync="valueUser.amountPay"
                  label="Amount"
                  :suffix="valueUser.currency"
                  has-text
                  readonly
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
              @click="handleSubmit()"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </client-only>
    </v-dialog>
    <ModalPaymentConfirm
      :show.sync="isConfirm"
      @isBack="showModalBefore"
    />
  </div>
</template>

<script>
import get from 'lodash/get'
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import { ArrowLeftIcon } from 'vue-feather-icons'
import ModalPaymentConfirm from './ModalPaymentConfirm'
import InputTextField from './Input'
export default {
  components: {
    ArrowLeftIcon,
    ModalPaymentConfirm,
    InputTextField
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['isBack'],

  data () {
    return {
      cardNumber: '',
      cvvText: '',
      gender: 'Mr',
      name: '',
      date: '',
      isConfirm: false
    }
  },

  computed: {
    ...mapGetters('walletStore', ['currentAddress']),
    ...mapGetters('payment', ['valueUser']),
    formatDate () {
      return this.date === '' ? '' : moment(this.date).format('MM/YYYY')
    },
    isShow: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('update:show', value)
      }
    },
    cardRules () {
      return [
        v => !!v || 'Card number is required',
        v => /^[0-9]+$/.test(v) || 'Invalid Card number',
        v => (v && v.length >= 0 && v.length <= 50) || 'Card number with maximum 50 digits'
      ]
    },
    cvvRules () {
      return [
        v => !!v || 'CVV is required',
        v => /^[0-9]{3}$/.test(v) || 'Invalid CVV',
        v => (v && v.length >= 0 && v.length <= 3) || 'CVV with maximum 3 digits'
      ]
    },
    nameRules () {
      return [
        v => !!v || 'Name is required',
        v => (v && v.length >= 0 && v.length <= 100) || 'Name with maximum 100 characters'
      ]
    },
    dateRules () {
      return [
        v => !!v || 'Expiry date is required'
      ]
    }
  },
  methods: {
    get,
    ...mapActions('payment', ['getValueUser']),
    showModalBefore () {
      this.$emit('update:show', true)
    },
    handleBack () {
      this.$emit('update:show', false)
      this.$emit('isBack')
    },
    handleSubmit () {
      if (this.$refs.formCard.validate()) {
        const dataEntered = {
          cardNumber: btoa(this.cardNumber),
          name: this.name,
          csv: btoa(this.cvvText),
          expiryMonth: new Date(this.date).getMonth() + 1,
          expiryYear: new Date(this.date).getFullYear(),
          wallet_address: this.currentAddress,
          amountPay: +this.valueUser.amountPay,
          amountGet: +this.valueUser.amountGet
        }
        this.getValueUser(dataEntered)
        this.$emit('update:show', false)
        this.isConfirm = true
      } else
        this.isConfirm = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-payment-info.scss";
</style>
