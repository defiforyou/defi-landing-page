import Vue from 'vue'

export const DialogMessage = {
  install (Vue, options) {
    this.EventBus = new Vue()
    Vue.prototype.$dialogMessage = {

      show ({ onConfirm, message, type }) {
        console.log('run')
        DialogMessage.EventBus.$emit('show', { onConfirm, message, type })
      }

    }
  }
}

Vue.use(DialogMessage)
