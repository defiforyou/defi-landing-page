<template lang="pug">
section.header(:class="{sticky: sticky && !expanded}")
  .container
    .dfy-flex.layout
      .branding
        nuxt-link(:to="{name: 'index'}")
          img.logo(src="/img/logo.svg" alt="DeFi For You")
      .menu
        component(
          v-for="i, k in menus"
          :key="k"
          :is="i.to ? 'nuxt-link' : 'a'"
          :to="i.to"
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
          component(
            v-for="i, k in menus"
            :key="k"
            :is="i.to ? 'nuxt-link' : 'a'"
            :to="i.to"
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
      expanded: false,
      sticky: true
    }
  },

  computed: {
    urls: () => URLS,
    menus: () => [{
      text: 'Solution',
      to: { name: 'index', hash: '#defi-for-you' }
    }, {
      text: 'Team',
      to: { name: 'index', hash: '#team' }
    }, {
      text: 'Contact',
      to: { name: 'index', hash: '#contact' }
    }, {
      text: 'Whitepaper',
      href: URLS.whitepaper,
      target: '_blank'
    }, {
      text: 'P2P Lending',
      href: URLS.lending,
      target: '_blank',
      classes: {
        'dfy-button': true,
        'dfy-button--overlay': true,
        'dfy-button--beta': true
      }
    }, {
      text: 'Staking',
      href: URLS.stacking,
      target: '_blank',
      classes: {
        'dfy-button': true,
        'dfy-button--overlay': true
      }
    }, {
      text: 'Farming',
      href: URLS.farming,
      target: '_blank',
      classes: {
        'dfy-button': true,
        'dfy-button--overlay': true,
        'dfy-button--coming-soon': true
      }
    }, {
      text: 'Trade NFTs',
      href: URLS.trade,
      target: '_blank',
      classes: {
        'dfy-button': true,
        'dfy-button--special': true
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
    z-index: 1000;
    backdrop-filter: blur(16px);
    background: rgba($--color-background-page, .25);
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
          width: 11rem;
        }
        @include media(lg) {
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
        &:not(:first-child) {
          margin-left: 1.6em;
          @include media(lg) {
            margin-left: 2em;
          }
        }
      }
      a {
        cursor: pointer;
      }
      a.dfy-button {
        padding: .9rem 1.2rem;
        white-space: nowrap;
        + a.dfy-button {
          margin-left: .65rem;
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
    z-index: 1001;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translate3d(0, 0, 0);
    backdrop-filter: blur(20px);
    background: rgba($--color-background-page, .75);
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
        font-size: 16px;
        text-transform: uppercase;
        text-align: center;
        padding: .75em 0;
        cursor: pointer;
        &.dfy-button {
          padding: .75em 1.5em;
          height: auto;
          margin-top: .35em;
          width: 296px;
          > * {
            justify-content: space-between;
          }
          &--beta,
          &--coming-soon {
            &:after {
              position: initial;
              background: rgba(black, .25);
              margin-left: auto;
              margin-right: -.65em;
              transform: none;
              padding: 4px 8px;
              opacity: 1;
            }
            &:hover {
              color: white;
            }
          }
          &--coming-soon {
            &:after {
              content: 'Coming Soon';
            }
          }
        }
      }
    }
  }
}
</style>
