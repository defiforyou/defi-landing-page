<template>
  <v-dialog
    v-model="isShow"
    width="630px"
    dark
  >
    <client-only>
      <v-card :height="$vuetify.breakpoint.xsOnly ? '450px' : undefined" class="scroll">
        <v-img
          max-height="175"
          max-width="200"
          class="mt-10 mb-4 mr-auto ml-auto"
          src="/img/payment_success.png"
        />
        <p class="title">
          Transaction is processing
        </p>
        <p class="title">
          We will inform you by email
        </p>
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
            @click="handleSubmit"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </client-only>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
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
    handleSubmit () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #fff;
}
</style>
