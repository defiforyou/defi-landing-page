<template lang="pug">
section.footer
  .navigation
    .dfy-decorator DEFI FOR YOU
    .container
      .grid
        .company
          .branding
            nuxt-link(:to="{name: 'index'}")
              img.logo(src="/img/logo.svg" alt="DeFi For You")
          .metas
            .language
              globe-icon.icon(size="24" stroke-width="1")
              span English (United States) ->
            .email.ask(v-if="contact.email")
              mail-icon.icon(size="24" stroke-width="1")
              a(:href="`mailto:${contact.email}`" target="_blank" rel="noopener" v-text="contact.email")
            .email.support(v-if="contact.support")
              mail-icon.icon(size="24" stroke-width="1")
              a(:href="`mailto:${contact.support}`" target="_blank" rel="noopener" v-text="contact.support")

        .office(v-for="i, k in offices" :style="{gridArea: `office-${k + 1}`}")
          .title(v-text="i.name")
          .phone
            a(v-if="i.vie" :href="`tel:${i.vie}`")
              span.number {{ i.vie }}
              img.flag(src="/img/flag.vn.png" alt="Vietnamese" width="24" height="24")
          .phone
            a(v-if="i.eng" :href="`tel:${i.eng}`")
              span.number {{ i.eng }}
              img.flag(src="/img/flag.gb.png" alt="English" width="24" height="24")
              span.supporter(v-if="i.engSupporter") {{ i.engSupporter }}
          .address(v-text="i.address")
          .registration-number(v-if="i.registrationNumber")
            span Registration Number:&nbsp;
            strong {{ i.registrationNumber }}
          .companies-house
            a(
              v-if="i.companiesHouse"
              tooltip="View on Companies House"
              :href="i.companiesHouse"
              target="_blank"
              rel="noopener") View on Companies House ->

        .social
          .title Find us on
          .networks
            a(
              v-if="urls.github"
              :href="urls.github"
              target="_blank" rel="noopener"
              title="Github")
              github-icon(size="24" stroke-width="1")
            a(
              v-if="urls.telegram"
              :href="urls.telegram"
              target="_blank" rel="noopener"
              title="Telegram")
              telegram-icon(width="24" height="24")
            a(
              v-if="urls.facebook"
              :href="urls.facebook"
              target="_blank" rel="noopener"
              title="Facebook")
              facebook-icon(size="24" stroke-width="1")
            a(
              v-if="urls.youtube"
              :href="urls.youtube"
              target="_blank" rel="noopener"
              title="Youtube")
              youtube-icon(size="24" stroke-width="1")
            a(
              v-if="urls.linkedin"
              :href="urls.linkedin"
              target="_blank" rel="noopener"
              title="Linkedin")
              linkedin-icon(size="24" stroke-width="1")
            a(
              v-if="urls.twitter"
              :href="urls.twitter"
              target="_blank" rel="noopener"
              title="Twitter")
              twitter-icon(size="24" stroke-width="1")

        .quick-links
          .title Quick Navigation
          ul.links
            li
              a(
                v-if="urls.whitepaper"
                :href="urls.whitepaper"
                target="_blank" rel="noopener") Whitepaper ->
            li
              a(
                v-if="urls.app"
                :href="urls.app"
                target="_blank" rel="noopener") Get the mobile app ->
            li
              popover-exchanges(placement="top-start")
                a(:href="urls.buy") Buy DFY on Exchanges ->
        .about
         .title About DeFi For You.
         .introduce
         strong DeFi For You
         span {{about.introduce}}
  .copyright
    .container
      .layout.dfy-flex
        .trademark(v-text="copyright")
        .links
          nuxt-link(href="https://defi-for-you.gitbook.io/faq/p2p-lending/terms-of-service" target="_blank") Terms of Service
          nuxt-link(href="https://defi-for-you.gitbook.io/faq/p2p-lending/privacy-policy" target="_blank") Privacy Policy
</template>

<script>
import {
  GlobeIcon,
  MailIcon,
  GithubIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
  TwitterIcon
} from 'vue-feather-icons'
import TelegramIcon from '~/assets/icon.telegram.svg?inline'

import { COPYRIGHT, URLS, OFFICES, CONTACT, ABOUT } from '~/settings'

export default {
  components: {
    GlobeIcon,
    MailIcon,
    TelegramIcon,
    GithubIcon,
    FacebookIcon,
    YoutubeIcon,
    LinkedinIcon,
    TwitterIcon
  },

  computed: {
    copyright: () => COPYRIGHT,
    urls: () => URLS,
    offices: () => OFFICES,
    contact: () => CONTACT,
    about: () => ABOUT
  }
}
</script>

<style lang="scss" scoped>
.footer {
  .navigation {
    position: relative;
    padding: 5em 0;
    @include media(sm-down) {
      padding: 2em 0;
      margin-top: $--gap-home-section;
    }
    .title {
      font-family: $--font-family-heading;
      color: white;
      margin-bottom: 2em;
      @include media(sm-down) {
        margin-bottom: 1em;
      }
    }
    .grid {
      display: grid;
      font-size: 14px;
      grid-template-columns: 1fr;
      grid-row-gap: 3em;
      grid-template-areas:
        'company'
        'office-1'
        'office-2'
        'office-3'
        'about'
        'social'
        'quick-links';
      @include media(sm) {
        grid-template-columns: 2fr 3fr;
        grid-column-gap: 20px;
        grid-row-gap: 3em;
        grid-template-areas:
          'company office-1'
          'social office-2'
          'quick-links office-3'
          'about about';
      }
      @include media(md) {
        grid-template-columns: 3fr 4fr 3fr;
        grid-row-gap: 4em;
        grid-template-areas:
          'company office-1 social'
          'company office-2 quick-links'
          'company office-3 quick-links'
          'company about about';
      }
      @include media(lg) {
        grid-template-columns: 4fr 4fr 3fr;
      }
    }
    .company {
      grid-area: company;
      .branding {
        .logo {
          width: 10rem;
          @include media(md) {
            width: 14rem;
          }
        }
      }
      .metas {
        margin-top: 1.8em;
        > * {
          display: flex;
          align-items: center;
          &:not(:first-child) {
            margin-top: .6em;
          }
          > * {
            flex: 1;
          }
          .icon {
            color: #374151;
            flex: 0 24px;
            margin-right: .9em;
          }
        }
      }
    }
    .office {
      a {
        color: $--color-primary;
      }
      .phone {
        * {
          vertical-align: middle;
        }
        .number {
          width: 128px;
          display: inline-block;
        }
        .flag {
          margin-right: .65em;
        }
      }
      > * {
        &:not(:first-child) {
          margin-top: .6em;
        }
      }
    }
    .social {
      grid-area: social;
      .networks {
        display: flex;
        > * {
          &:not(:last-child) {
            margin-right: 1.6em;
          }
          path {
            stroke-width: 1px;
            stroke: currentColor;
          }
        }
      }
    }
    .quick-links {
      grid-area: quick-links;
      > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        > li {
          &:not(:last-child) {
            margin-bottom: .6em;
          }
        }
      }
    }
    .about {
      grid-area: about;
      strong {
        color: #DBA83D;
      }
      span {
        color: #9FA6B2;
      }
    }
  }
  .copyright {
    color: lighten(#4B5563, 25);
    font-size: 14px;
    background: #13171f;
    padding: 1rem 0 1.5rem 0;
    @include media(sm-down) {
      padding: 1em 0;
    }
    .layout {
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      @include media(xs-only) {
        justify-content: center;
      }
    }
    .links {
      a {
        color: lighten(#4B5563, 25);
        &:hover {
          color: $--color-text-body;
        }
        &:not(:last-child) {
          padding-right: 1em;
          margin-right: 1em;
          border-right: 1px solid #161E2E;
        }
      }
    }
  }
}
</style>
