import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_DOMAIN_PAWN_CRYPTO_SERVICE,
  proxyHeaders: false
})

export default instance
