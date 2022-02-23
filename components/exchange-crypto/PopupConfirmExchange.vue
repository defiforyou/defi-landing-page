<template>
  <v-dialog v-model="dialog" width="500">
    <div class="modal-exchange-crypto">
      <div class="modal-header d-flex justify-space-between align-center mb-12">
        <div class="modal-title">Confirm order</div>
        <div>
          <v-btn
            elevation="0"
            dark
            fab
            small
            color="#BEC0C3"
            @click="onClose"
          >
            <v-icon dark>
              mdi-close
            </v-icon>
          </v-btn>
        </div>
      </div>
      <div class="modal-content">
        <v-row ref="row">
          <v-col cols="4" class="py-0 mb-4 text-label">
            Amount
          </v-col>
          <v-col cols="8" class="py-0 mb-4">
            <div class="d-flex align-center">
              <img
                class="select-img"
                :src="`https://s3.ap-southeast-1.amazonaws.com/beta-storage-dfy/upload/${get(data, 'crypto_asset_token', 'DFY')}.png`"
                alt
                style="width: 24px; height: 24px"
              >{{ get(data, 'amount', '') }} {{ get(data, 'crypto_asset_token', '') }}
            </div>
          </v-col>
          <v-col cols="4" class="py-0 mb-4 text-label">
            Bank detail
          </v-col>
          <v-col cols="8" class="py-0 mb-4">
            <div class="mb-2">{{ get(data, 'bank_details_request.name_bank', '') }}</div>
            <div>{{ get(data, 'bank_details_request.bank_account', '') }}</div>
          </v-col>
          <v-col cols="4" class="py-0 mb-4 text-label">
            Fiat
          </v-col>
          <v-col cols="8" class="py-0 mb-4">
            $ {{ get(data, 'fiat_money_name', '') }}
          </v-col>
          <v-col cols="4" class="py-0 text-label">
            Free
          </v-col>
          <v-col cols="8" class="py-0">
            4-5%
          </v-col>
        </v-row>
      </div>
      <div class="modal-action pt-10 pb-4 d-flex justify-center">
        <button class="submit dfy-button dfy-button--primary" @click="onConfirm">
          Confirm Order
        </button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import get from 'lodash/get'

export default {
  name: 'PopupConfirmExchange',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    dialog: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    get,
    onClose () {
      this.dialog = false
    },
    onConfirm () {
      this.$emit('onConfirm')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-exchange-crypto {
  background: #3d414b;
  padding: 24px 30px;
  .modal-header {
    width: 100%;
    .modal-title {
      font-weight: 600;
      font-size: 28px;
      color: #FFFFFF;
    }
  }
  .modal-content {
    //font-weight: 500;
    font-size: 16px;
    .text-label {
      color: #BEC0C3;
    }
  }
}
</style>
