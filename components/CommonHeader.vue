<template lang="pug">
section.header
  .container
    .flex
      .branding
        nuxt-link(:to="{name: 'index'}")
          img.logo(src="/img/logo.png" width="224px")
      .menu
        a(href="#") DeFi For You
        a(href="#") Solution
        a(href="#") Services
        a(href="#") Team
        a(href="#") Contact
        a(:href="urls.whitepaper" target="_blank") Whitepaper
        a.dfy-button.dfy-button--overlay(:href="urls.pawn" target="_blank") PAWN
</template>

<script>
import { URLS } from '~/settings'

export default {
  computed: {
    urls: () => URLS
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid rgba(#5E4D5E, .2);
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.5em;
  box-sizing: border-box;
  > * {
    min-width: 0;
  }
}
.menu {
  display: flex;
  font-size: 14px;
  align-items: center;
  > * {
    &:not(:last-child) {
      margin-right: 2.5em;
    }
  }
}
</style>
