<template>
  <v-dialog
    v-model="isShowing"
    width="28rem"
    @click:outside="closeMessageDialog"
  >
    <div class="wrapper">
      <div class="body">
        <img
          :src="iconSrc"
          alt=""
        >
        <div class="text">
          {{ text }}
        </div>
      </div>
      <div class="mt-6" />
      <v-btn
        class="gradient-btn actions"
        rounded
        @click="closeMessageDialog"
      >
        OK
      </v-btn>
    </div>
  </v-dialog>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Alert',
  computed: {
    ...mapGetters('notificationStore', [
      'isShowing',
      'type',
      'statusCode',
      'text',
      'link',
      'desc',
      'viewMore'
    ]),
    iconSrc () {
      switch (this.type) {
        case 'error':
          return '/img/error.png'
        case 'success':
          return '/img/success.png'
        case 'warning':
          return '/img/warning.png'
        case 'info':
          return '/img/info.png'
        default:
          return ''
      }
    }
  },
  watch: {
  },
  methods: {
    ...mapActions('notificationStore', ['closeMessageDialog'])
  }
}
</script>
<style lang="scss">
  .wrapper {
    padding: 2rem 3rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: $grey-10;
    border-radius: 20px;

    .body {
      display: flex;
      align-items: center;
      width: 100%;

      img {
        width: 60px;
        height: 60px;
      }

      .text {
        margin-left: 1rem;
        overflow-wrap: break-word;
      }
    }

    .footer {
      margin-top: 2rem;
    }
  }
</style>
