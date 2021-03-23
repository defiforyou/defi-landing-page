import { CONTACT } from '~/settings'

export default ({ $axios }, inject) => {
  inject('apis', {
    getMarketPrices () {
      return $axios
        .$get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: [
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
    },

    sendMessage (data) {
      return $axios
        .$post(CONTACT.form, data, {
          headers: {
            Accept: 'application/json'
          }
        })
    }
  })
}
