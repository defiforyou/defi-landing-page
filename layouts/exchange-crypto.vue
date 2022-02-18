<template>
  <div id="app" class="app">
    <common-header />
    <v-app>
      <nuxt />
      <alert />
      <term-conditions />
    </v-app>
    <common-footer />
  </div>
</template>

<script>
import Alert from '~/components/Alert'
export default {
  name: 'ExchangeCrypto',
  components: { Alert },
  data () {
    return {
      emptyLinkBlocker: null
    }
  },

  mounted () {
    this.emptyLinkBlocker = document.addEventListener('click', e => {
      const el = e.target
      if (el.tagName !== 'A') return
      const href = el.getAttribute('href')
      if (href === '#') e.preventDefault()
    })
  },

  beforeDestroy () {
    document.removeEventListener('click', this.emptyLinkBlocker)
  }
}
</script>

<style lang="scss" scoped>
.app {
  background-image: radial-gradient(
      240px 240px at 80% 80px,
      rgba(94, 77, 94, 0.4) 0%,
      $--color-background-page 100%);
  @include media(md) {
    background-image: radial-gradient(
        520px 520px at 80% 120px,
        rgba(94, 77, 94, 0.4) 0%,
        $--color-background-page 100%);
  }
}
</style>
