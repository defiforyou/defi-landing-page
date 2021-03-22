<template lang="pug">
section.contact
  .container
    .dfy-flex
      .overlay
        h2.title Contact
        p.description Have an inquiry or some feedback for us?
          br
          | Fill out the form to contact our team.
        form.form(ref="form")
          .grid
            .first-name
              label First name
                input(
                  type="text"
                  v-model="form.first_name"
                  placeholder="Your first name")
            .last-name
              label Last name
                input(
                  type="text"
                  v-model="form.last_name"
                  placeholder="Your last name")
            .email
              label Email
                input(
                  type="email"
                  v-model="form._replyto"
                  placeholder="your@email.com")
            .phone
              label Phone
                input(
                  type="phone"
                  v-model="form.phone"
                  placeholder="Phone number")
            .message
              label Message
                textarea(
                  v-model="form.message"
                  placeholder="How could we help you with?")

          button.submit.dfy-button.dfy-button--primary(type="submit") Send your message ->
</template>

<script>
export default {
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style lang="scss" scoped>
section.contact {
  .overlay {
    flex: 0 50%;
    margin-left: auto;
  }
  .form {
    margin-top: 3.75em;
    label {
      font-size: 12px;
      color: white;
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
      padding: .5em 0;
      &::placeholder {
        color: #252F3F;
      }
      &:focus,
      &:active {
        border-bottom-color: $--color-primary;
      }
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
    margin-top: 2em;
  }
}
</style>
