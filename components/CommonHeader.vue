<template>
  <section class="header" :class="{ sticky: sticky && !expanded }">
    <div class="container">
      <div class="dfy-flex layout">
        <div class="branding">
          <nuxt-link :to="{ name: 'index' }">
            <img class="logo" src="/img/logo.svg" alt="DeFi For You">
          </nuxt-link>
        </div>
        <div class="menu">
          <template v-for="(item, index) in menus">
            <div v-if="item.child" :key="index" class="menu__parent">
              <component :is="'a'" :class="item.classes || {}">
                <div class="d-flex align-center">
                  {{ item.text }}
                  <ChevronDownIcon size="16" stroke-width="1" />
                </div>
                <div class="dropdown_menu">
                  <component
                    :is="i.to ? 'nuxt-link' : 'a'"
                    v-for="(i, k) in item.child"
                    :key="k"
                    :to="i.to"
                    :href="i.href"
                    :target="i.target || '_self'"
                    :class="i.classes || {}"
                    v-text="i.text"
                  />
                </div>
              </component>
            </div>

            <component
              :is="item.to ? 'nuxt-link' : 'a'"
              v-else
              :key="index"
              :to="item.to"
              :href="item.href"
              :target="item.target || '_self'"
              :class="item.classes || {}"
              v-text="item.text"
            />
          </template>
        </div>
        <div class="toggler" @click="expanded = true">
          <menu-icon size="36" stroke-width="1" />
        </div>
      </div>
    </div>
    <transition name="fade-in">
      <div v-if="expanded" class="mobile-menu">
        <div class="container">
          <div class="dfy-clearfix">
            <div class="toggler" @click="expanded = false">
              <x-icon size="36" stroke-width="1" />
            </div>
          </div>
          <div class="menu" @click="expanded = false">
            <template v-for="(item, key) in menus">
              <template v-if="item.child">
                <component
                  :is="i.to ? 'nuxt-link' : 'a'"
                  v-for="(i, k) in item.child"
                  :key="k"
                  :to="i.to"
                  :href="i.href"
                  :target="i.target || '_self'"
                  :class="i.classes || {}"
                  v-text="i.text"
                />
              </template>

              <component
                :is="item.to ? 'nuxt-link' : 'a'"
                v-else
                :key="key"
                :to="item.to"
                :href="item.href"
                :target="item.target || '_self'"
                :class="item.classes || {}"
                v-text="item.text"
              />
            </template>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { MenuIcon, XIcon, ChevronDownIcon } from 'vue-feather-icons'
import { URLS } from '~/settings'

export default {
  components: {
    MenuIcon,
    XIcon,
    ChevronDownIcon
  },

  data () {
    return {
      expanded: false,
      sticky: true
    }
  },

  computed: {
    urls: () => URLS,
    menus: () => [
      {
        text: 'About',
        child: [
          {
            text: 'Solution',
            to: {
              name: 'index',
              hash: '#defi-for-you'
            }
          },
          {
            text: 'Team',
            href: URLS.team,
            target: '_blank'
          },
          {
            text: 'Contact',
            to: {
              name: 'index',
              hash: '#contact'
            }
          },
          {
            text: 'Whitepaper',
            href: URLS.whitepaper,
            target: '_blank'
          }
        ]
      },
      {
        text: 'Buy NFTs',
        href: 'buy-nfts',
        target: '',
        classes: {
          'dfy-button': true,
          'dfy-button--overlay': true,
          'dfy-button--beta': false
        }
      },
      // {
      //   text: 'Loan against NFTs',
      //   classes: {
      //     'dfy-button': true,
      //     'dfy-button--overlay': true,
      //     'dfy-button--coming-soon': true
      //   }
      // },
      {
        text: 'Mint NFTs',
        href: 'https://marketplace.defiforyou.uk/nft/create',
        target: '_blank',
        classes: {
          'dfy-button': true,
          'dfy-button--overlay': true,
          'dfy-button--beta': false
        },
        child: [
          {
            text: 'NFTs',
            href: 'https://marketplace.defiforyou.uk/nft/create',
            target: '_blank'
          },
          {
            text: 'Hard NFTs',
            href: 'https://marketplace.defiforyou.uk/nft/create/hard',
            target: '_blank'
          }
        ]
      },
      {
        text: 'P2P lending',
        href: 'https://app.defiforyou.uk/pawn',
        target: '_blank',
        classes: {
          'dfy-button': true,
          'dfy-button--overlay': true,
          'dfy-button--beta': false
        }
      },
      {
        text: 'Buy DFY',
        to: {
          name: 'index',
          hash: '#price-tickers'
        },
        classes: {
          'dfy-button': true,
          'dfy-button--special': true
        }
      }
      // {
      //   text: 'P2P Lending',
      //   href: URLS.lending,
      //   target: '_blank',
      //   classes: {
      //     'dfy-button': true,
      //     'dfy-button--overlay': true,
      //     'dfy-button--beta': false
      //   }
      // },
      // {
      //   text: 'Staking',
      //   href: URLS.staking,
      //   target: '_blank',
      //   classes: {
      //     'dfy-button': true,
      //     'dfy-button--overlay': true
      //   }
      // },
      // {
      //   text: 'Farming',
      //   href: URLS.farming,
      //   target: '_blank',
      //   classes: {
      //     'dfy-button': true,
      //     'dfy-button--overlay': true
      //     // 'dfy-button--coming-soon': true
      //   }
      // },
      // {
      //   text: 'Trade NFTs',
      //   href: URLS.trade,
      //   target: '_blank',
      //   classes: {
      //     'dfy-button': true,
      //     'dfy-button--special': true
      //   }
      // }
    ]
  }
}
</script>

<style lang="scss" scoped>
section.header {
  border-bottom: 1px solid rgba(#5e4d5e, 0.2);

  &.sticky {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    backdrop-filter: blur(16px);
    background: rgba($--color-background-page, 0.25);
  }

  .layout {
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 4rem;
    // @include media(md) {
    //   height: 7.5rem;
    // }
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

      .menu-item {
        line-height: 1.3;
        padding-right: 1rem;
        border-right: 1px solid #fff;
        font-size: 1rem;

        a {
          transition: 0s;
        }

        &:last-child {
          border: 0;
        }

        &.dfy-button--coming-soon:hover a {
          visibility: hidden;
        }
      }

      @include media(sm-down) {
        display: none;
      }

      > * {
        &:not(:first-child) {
          margin-left: 1.6em;
          @include media(lg) {
            margin-left: 1em;
          }
        }
      }

      a {
        cursor: pointer;
      }

      a.dfy-button {
        padding: 0.9rem 1.2rem;
        white-space: nowrap;

        + a.dfy-button {
          margin-left: 0.65rem;
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
    background: rgba($--color-background-page, 0.75);

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
        content: "";
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
        padding: 0.75em 0;
        cursor: pointer;

        &.dfy-button {
          padding: 0.75em 1.5em;
          height: auto;
          margin-top: 0.35em;
          width: 296px;

          > * {
            justify-content: space-between;
          }

          &--beta,
          &--coming-soon {
            &:after {
              position: initial;
              background: rgba(black, 0.25);
              margin-left: auto;
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
              content: "Coming Soon";
            }
          }
        }
      }
    }
  }
}

.menu {
  &__parent {
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.9rem 0 1.2rem;

    &:hover {
      .dropdown_menu {
        position: absolute;
        top: 100%;
        right: 0;
        display: flex;
        flex-direction: column;
      }
    }
  }
}

.dropdown_menu {
  display: none;
  background: #3d414b;
  border-radius: 16px;

  a {
    padding: 0.875rem 1.2rem;
    min-width: 170px;
    color: #fff;

    &:hover {
      color: #f8b017;
      background: rgba(255, 255, 255, 0.1);
    }

    &:first-child {
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }

    &:last-child {
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
  }
}
</style>
