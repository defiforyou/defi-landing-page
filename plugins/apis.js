import { CONTACT } from '~/settings'

export default ({ $axios }, inject) => {
  inject('apis', {
    getMarketPrices () {
      return $axios
        .$get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: [
              'defi-for-you',
              'bitcoin',
              'ethereum',
              'concierge-io',
              'binancecoin',
              'binance-usd',
              'ripple',
              'tether',
              'bitcoin-cash',
              'chainlink',
              'cardano',
              'litecoin',
              'polkadot'
            ].join(', '),
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false,
            price_change_percentage: '24h'
          }
        })
        .then(res => {
          res.sort((a, b) => {
            if (a.symbol === 'dfy') return -1
            return 0
          })
          return res
        })
    },

    sendMessage (data) {
      return $axios
        .$post(CONTACT.form, data, {
          headers: {
            Accept: 'application/json'
          }
        })
    },

    contactUs (data) {
      return $axios
        .$post('https://gwapi.defiforyou.uk/defi-user-service/public-api/v1.0.0/contact-us', data)
    }
  })
}
