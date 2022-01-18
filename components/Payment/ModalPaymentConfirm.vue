<template>
  <v-dialog
    v-model="isShow"
    width="630px"
    dark
  >
    <client-only>
      <v-card :height="$vuetify.breakpoint.xsOnly ? '342px' : undefined" class="scroll">
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
          <span class="dialog-title-mobile">Confirm information</span>
        </v-card-title>
        <v-card-text>
          <div class="modal-confirm">
            <div class="d-flex align-center mb-4">
              <div class="modal-confirm__label">
                Amount:
              </div>
              <div class="modal-confirm__data">
                {{ $numberFormatDecimal(valueUser.amountPay) }} {{ valueUser.currency }}
              </div>
            </div>

            <div class="d-flex align-center mb-4">
              <div class="modal-confirm__label">
                Receive
                <v-tooltip
                  bottom
                >
                  <template #activator="{ on, attrs }">
                    <v-icon small color="#C9CACD" v-bind="attrs" v-on="on">
                      mdi-information
                    </v-icon>
                  </template>
                  <span>Estimated amount</span>
                </v-tooltip>
              </div>
              <div class="d-flex modal-confirm__data">
                <img
                  class="select-img"
                  :src="$mapImageCurrency('DFY')"
                  alt
                >
                {{ $numberFormatDecimal(valueUser.amountGet) }}&nbsp;
                <span> DFY</span>
              </div>
            </div>
          </div>

          <v-card-actions class="justify-center pb-8">
            <v-btn
              color="#F8B017"
              depressed
              dense
              height="40px"
              width="160px"
              rounded
              class="go-payment"
              :loading="loading"
              @click="handlePay()"
            >
              Pay
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </client-only>
    <Alert />
  </v-dialog>
</template>

<script>
import get from 'lodash/get'
import { mapGetters, mapActions } from 'vuex'
import { ArrowLeftIcon } from 'vue-feather-icons'
import Alert from './Alert'

export default {
  components: { ArrowLeftIcon, Alert },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['isBack'],
  data () {
    return {
      isMore: false,
      loading: false,
      isConfirm: false
    }
  },

  computed: {
    // ...mapState('walletStore', ['currentAddress']),
    ...mapGetters('payment', ['valueUser', 'isShowing']),
    isShow: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('update:show', value)
      }
    }
  },

  methods: {
    get,
    handleBack () {
      this.$emit('update:show', false)
      this.$emit('isBack')
    },
    ...mapActions('payment', ['showSuccessMessage', 'showErrorMessage']),
    async handlePay () {
      try {
        this.loading = true
        await this.$axios.post(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/buy-dfy`, this.valueUser)
        this.loading = false
        this.$emit('update:show', false)
        this.showSuccessMessage()
      } catch (err) {
        this.showErrorMessage(err.response.data.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-payment-confirm.scss";
</style>
