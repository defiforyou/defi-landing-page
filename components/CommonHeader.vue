<template lang="pug">
section.header
  .container
    .dfy-flex.layout
      .branding
        nuxt-link(:to="{name: 'index'}")
          img.logo(src="/img/logo.png")
      .menu
        a(
          v-for="i, k in menus"
          :key="k"
          :href="i.href"
          :target="i.target || '_self'"
          :class="i.classes || {}"
          v-text="i.text")
      .toggler
        menu-icon(size="36" stroke-width="1")
</template>

<script>
import { MenuIcon } from 'vue-feather-icons'
import { URLS } from '~/settings'

export default {
  components: {
    MenuIcon
  },

  computed: {
    urls: () => URLS,
    menus: () => [{
      text: 'DeFi For You',
      href: '#'
    }, {
      text: 'Solution',
      href: '#'
    }, {
      text: 'Services',
      href: '#'
    }, {
      text: 'Team',
      href: '#'
    }, {
      text: 'Contact',
      href: '#'
    }, {
      text: 'Whitepaper',
      href: URLS.whitepaper,
      target: '_blank'
    }, {
      text: 'PAWN',
      href: URLS.pawn,
      target: '_blank',
      classes: {
        'dfy-button': true,
        'dfy-button--overlay': true
      }
    }]
  }
}
</script>

<style lang="scss" scoped>
section.header {
  border-bottom: 1px solid rgba(#5E4D5E, .2);
  .layout {
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 4rem;
    @include media(md) {
      height: 7.5rem;
    }
    > * {
      min-width: 0;
    }
  }
  .branding {
    .logo {
      width: 9rem;
      @include media(md) {
        width: 14rem;
      }
    }
  }
  .menu {
    display: flex;
    font-size: 14px;
    align-items: center;
    @include media(sm-down) {
      display: none;
    }
    > * {
      &:not(:last-child) {
        margin-right: 2.5em;
      }
    }
  }
  .toggler {
    cursor: pointer;
    flex: 0 0 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @include media(md) {
      display: none;
    }
  }
}
</style>
