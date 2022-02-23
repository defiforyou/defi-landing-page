<template>
  <v-dialog v-model="isShow" persistent width="552">
    <div class="dialog-content pt-9 pb-6 text-center">
      <img class="dialog-image h-28 md:h-32 mb-5" :src="imgUrl">
      <div class="dialog-message text-lg md:text-xl font-semibold text-white mb-10">
        {{ message }}
      </div>
      <v-btn
        color="#F8B017"
        depressed
        dense
        large
        rounded
        width="100px"
        class="gradient-btn"
        @click="handleConfirm"
      >
        OK
      </v-btn>
    </div>
  </v-dialog>
</template>

<script>
import { DialogMessage } from '~/plugins/dialogMessage.js'

export const DIALOG_TYPE = {
  SUCCESS: 1,
  ERRORS: 0
}

const DEFAULT_MESSAGE = {
  SUCCESS: 'Successfully !',
  ERRORS: 'Something went wrong!'
}

export default {
  name: 'DialogMessage',
  data () {
    return {
      isShow: false,
      message: 'NFT has been created successfully',
      confirm: {},
      type: DIALOG_TYPE.SUCCESS
    }
  },
  computed: {
    imgUrl () {
      if (this.type === DIALOG_TYPE.ERRORS) {
        return require('~/assets/img/exchange-crypto/error.svg')
      }
      return require('~/assets/img/exchange-crypto/successfully.svg')
    }
  },
  beforeMount () {
    DialogMessage.EventBus.$on('show', (params) => {
      this.show(params)
    })
  },
  methods: {
    show ({ onConfirm, message, type = DIALOG_TYPE.SUCCESS }) {
      this.isShow = true
      this.confirm = onConfirm
      this.type = type
      if (message) {
        this.message = message
      } else {
        this.message =
          this.type === DIALOG_TYPE.ERRORS
            ? DEFAULT_MESSAGE.ERRORS
            : DEFAULT_MESSAGE.SUCCESS
      }
    },
    hide () {
      this.isShow = false
    },
    handleConfirm () {
      if (typeof this.confirm === 'function') {
        this.confirm()
      }
      this.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  &-content {
    background: #3d414b;
  }
}
</style>
