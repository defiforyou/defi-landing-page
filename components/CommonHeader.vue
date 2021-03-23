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
      .toggler(@click="expanded = true")
        menu-icon(size="36" stroke-width="1")

  transition(name="fade-in")
    .mobile-menu(v-if="expanded")
      .container
        .dfy-clearfix
          .toggler(@click="expanded = false")
            x-icon(size="36" stroke-width="1")
        .menu(@click="expanded = false")
          a(
            v-for="i, k in menus"
            :key="k"
            :href="i.href"
            :target="i.target || '_self'"
            :class="i.classes || {}"
            v-text="i.text")
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'
import { URLS } from '~/settings'

export default {
  components: {
    MenuIcon,
    XIcon
  },

  data () {
    return {
      expanded: false
    }
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
  &.sticky {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }
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
  .mobile-menu {
    z-index: 1000;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translate3d(0, 0, 0);
    backdrop-filter: blur(20px);
    background: rgba($--color-background-page, .6);
    .toggler {
      width: 4rem;
      height: 4rem;
      cursor: pointer;
      display: flex;
      float: right;
      align-items: center;
      justify-content: center;
      &:before,
      &:after {
        content: '';
        display: table;
        clear: both;
      }
    }
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      height: 100%;
      > a {
        font-family: $--font-family-heading;
        font-size: 13px;
        text-transform: uppercase;
        text-align: center;
        padding: .5em 0;
        &.dfy-button {
          padding: .5em 1.5em;
        }
      }
    }
  }
}
</style>
