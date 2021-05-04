<template lang="pug">
section.contact
  .map
  .container
    .overlay
      transition(name="fade-in" mode="out-in")
        div(v-if="completed" key="completed")
          h2.title Thank you
          p.description Thank you for contacting us.
            br
            | We will contact you personally as soon as possible.
          button.submit.dfy-button.dfy-button--ghost(
            @click.prevent="reset") Send another message ->

        div(v-else key="incompleted")
          h2.title Get in touch
          p.description Have an inquiry or some feedback for us?
            br
            | Fill out the form to contact our team.
          form.form(
            :class="{loading}"
            ref="form"
            @submit.prevent="submit")
            .grid
              .first-name
                label
                  span First name
                  input(
                    type="text"
                    v-model="form.firstName"
                    placeholder="Your first name")
              .last-name
                label
                  span Last name
                  input(
                    type="text"
                    v-model="form.lastName"
                    placeholder="Your last name")
              .email.required
                label
                  span Email
                  input(
                    type="email"
                    v-model="form.email"
                    placeholder="your@email.com"
                    required)
              .phone.required
                label
                  span Phone
                  input(
                    type="phone"
                    v-model="form.phone"
                    placeholder="Phone number"
                    required)
              .message.required
                label
                  span Message
                  textarea(
                    v-model="form.message"
                    placeholder="How could we help you with?"
                    required)

            .error
              transition(name="fade-in")
                span(v-if="error" v-text="error")

            button.submit.dfy-button.dfy-button--primary(
              type="submit"
              @click.prevent="submit") Send your message ->
</template>

<script>
import { RECAPTCHA_ENABLED } from '~/settings'

export default {
  data () {
    return {
      form: {
        email: '',
        phone: '',
        message: ''
      },
      loading: false,
      completed: false,
      error: null
    }
  },

  watch: {
    form: {
      deep: true,
      handler () {
        this.completed = false
        this.error = null
      }
    }
  },

  async mounted () {
    if (RECAPTCHA_ENABLED) {
      try {
        await this.$recaptcha.init()
      } catch (e) {}
    }
  },

  beforeDestroy () {
    if (RECAPTCHA_ENABLED) this.$recaptcha.destroy()
  },

  methods: {
    reset () {
      this.form = {
        email: '',
        phone: '',
        message: ''
      }
    },

    validate () {
      if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.form.email.trim().toLowerCase()))
        return Promise.reject(new Error('Please provide a valid email address.'))
      if (!this.form.phone.trim().length)
        return Promise.reject(new Error('Please provide a valid phone number.'))
      if (!this.form.message.trim().length)
        return Promise.reject(new Error('Please enter your message.'))
      return Promise.resolve()
    },

    tokenize () {
      return this.$recaptcha.execute('contact')
        .then(this.send)
        .catch(() => {
          this.completed = false
          this.error = 'Something went wrong. Please try again later.'
        })
        .finally(() => {
          this.loading = false
        })
    },

    send (token) {
      return this.$apis
        .contactUs({
          ...this.form,
          recaptchaResponse: token
        })
        .then(() => {
          this.completed = true
        })
    },

    submit () {
      this.validate()
        .then(() => {
          this.error = null
          this.loading = true
          const cb = RECAPTCHA_ENABLED
            ? this.tokenize().then(this.send)
            : this.send()
          return cb
            .catch(() => {
              this.completed = false
              this.error = 'Something went wrong. Please try again later.'
            })
            .finally(() => {
              this.loading = false
            })
        })
        .catch(e => {
          this.error = e.message
        })
    }
  }
}
</script>

<style lang="scss" scoped>
section.contact {
  position: relative;
  padding: 8em 0;
  @include media(sm-down) {
    padding: 3em 0 0 0;
    margin-top: $--gap-home-section;
  }
  .map {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 50%;
    background: url(/img/contact.map.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @include media(md) {
      height: auto;
      width: 60%;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(0deg, $--color-background-page, transparent);
      @include media(md) {
        bottom: 0;
        left: auto;
        width: 60%;
        background: linear-gradient(-90deg, $--color-background-page, transparent);
      }
    }
  }
  .overlay {
    position: relative;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 560px;
    @include media(md) {
      margin-right: 0;
      width: 50%;
      max-width: auto;
    }
  }
  .form {
    margin-top: 3.75em;
    transition: opacity .5s ease-in-out;
    &.loading {
      pointer-events: none;
      user-select: none;
      opacity: .5;
    }
    label {
      font-size: 12px;
      color: white;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      -webkit-text-fill-color: white;
      background: transparent;
      -webkit-box-shadow: 0 0 0px 1000px lighten($--color-background-page, 5) inset;
    }
    input,
    textarea {
      display: block;
      width: 100%;
      appearance: none;
      background: transparent;
      color: white;
      font-family: $--font-family-body;
      font-size: 18px;
      outline: none;
      border: none;
      border-bottom: 1px solid #4B5563;
      border-radius: 0;
      padding: .5em 0;
      transition: .3s ease-in-out;
      &::placeholder {
        color: darken($--color-text-body, 30);
      }
      &:focus,
      &:active {
        border-bottom-color: $--color-primary;
      }
    }
    .required {
      > label > span {
        &:after {
          content: '*';
          margin-left: .5em;
          color: $--color-danger;
          font-weight: bold;
        }
      }
    }
    .error {
      min-height: 24px;
      font-size: 14px;
      margin-top: 1em;
      color: $--color-danger;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 2em;
    .message {
      grid-column: 1 / span 2;
    }
  }
  .submit {
    margin-top: 1em;
  }
}
</style>
