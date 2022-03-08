<template>
  <v-dialog
    v-model="isShowing"
    width="630px"
    dark
    :retain-focus="false"
    @click:outside="closeMessageDialog"
  >
    <client-only>
      <v-card :height="$vuetify.breakpoint.xsOnly ? '380px' : undefined" class="scroll card">
        <v-img
          max-width="200"
          class="mb-4 mr-auto ml-auto"
          :src="iconSrc"
        />
        <div v-if="type === 'success'">
          <p class="title">
            Transaction is processing
          </p>
          <p class="title">
            We will inform you by email
          </p>
        </div>
        <div v-else-if="type==='error'" class="title px-2">
          {{ text }}
          <!-- <p v-for="item in text" :key="item.text" class="title">
            {{ item.includes('postal') ? (!isPostal && item.replaceAll('postal', 'zip')): item }}
          </p> -->
        </div>
        <v-card-actions class="justify-center pb-8">
          <v-btn
            color="#F8B017"
            depressed
            dense
            height="40px"
            width="160px"
            rounded
            :loading="loading"
            @click="closeMessageDialog"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </client-only>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters('payment', [
      'isShowing',
      'type',
      'text',
      'isPostal'
    ]),
    iconSrc () {
      switch (this.type) {
        case 'error':
          return '/img/error.png'
        case 'success':
          return '/img/payment_success.png'
        default:
          return ''
      }
    }
  },
  methods: {
    ...mapActions('payment', ['closeMessageDialog'])
  }
}
</script>

<style lang="scss" scoped>
.card{
  padding-top: 40px;
  @include media(xs){
    padding-top: 28px;
  }
}
::v-deep.card .v-image__image--cover {
  background-size: unset;
}
.title{
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  @include media(xs){
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
