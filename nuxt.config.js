import { OG_ROOT, RECAPTCHA_SITE_KEY } from './settings'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0.0.0.0',
    port: 3001
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'DeFi For You.',
    titleTemplate: '%s | DeFi For You UK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A new decentralized P2P loan economy and NFT trading platform built on the Binance Smart Chain, powered by the $DFY smart contract token.' },
      { property: 'og:title', content: 'DeFi For You | DeFi For You UK' },
      { property: 'og:description', content: 'A new decentralized P2P loan economy and NFT trading platform built on the Binance Smart Chain, powered by the $DFY smart contract token.' },
      { property: 'og:image', content: `${OG_ROOT}/img/og.png` },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: OG_ROOT },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'DeFi For You | DeFi For You UK' },
      { property: 'twitter:image', content: `${OG_ROOT}/img/og.png` },
      { property: 'twitter:image:alt', content: 'DeFi For You.™' },
      { property: 'twitter:description', content: 'A new decentralized P2P loan economy and NFT trading platform built on the Binance Smart Chain, powered by the $DFY smart contract token.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/apis' },
    { src: '~/plugins/directives' },
    { src: '~/plugins/filters' },
    { src: '~/plugins/utilities' },
    { src: '~/plugins/scrollmagic', mode: 'client' },
    { src: '~/plugins/convertTime.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-gtag',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/recaptcha',
    '@nuxtjs/device'
  ],

  'google-gtag': {
    id: 'G-S83LVZJV2Q'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    scss: [
      '~/assets/settings.scss'
    ]
  },

  publicRuntimeConfig: {
    recaptcha: {
      siteKey: RECAPTCHA_SITE_KEY,
      hideBadge: true,
      version: 3
    }
  }
}
