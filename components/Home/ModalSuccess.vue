<template>
  <v-dialog
    v-model="isShow"
    width="700px"
    persistent
  >
    <v-card>
      <div class="d-flex flex-column align-center pt-10 pb-11">
        <img v-if="isSuccess" class="mb-10" :src="require('~/assets/img/tx-success.png')" alt="">
        <img v-else class="mb-10" :src="require('~/assets/img/tx-fail.png')" alt="">
        <div v-if="isSuccess" class="mb-15 text-h6">
          Transaction completed. DFY is being sent to your wallet.
        </div>
        <div v-else class="text-h6">
          Transaction failed. Please try to purchase again.
        </div>
        <div v-if="!isSuccess" class="mb-15 text-h6">
          Contact online support or send email to <a href="#">support@defiforyou.uk</a>
        </div>
        <div>
          <div class="submit dfy-button dfy-button--primary" @click="backHome">
            Back to homepage
          </div>
        </div>
      </div>

      <v-divider />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    isSuccess: {
      type: Boolean,
      default: true
    }
  },

  computed: {
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
    backHome () {
      this.$emit('update:show', false)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/components/home/_modal-confirm.scss";
</style>
