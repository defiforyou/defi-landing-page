import axios from '~/utils/pawn-crypto-service'

export const getCryptoAsset = params => axios.get('crypto-asset/exchange-crypto', { params })

export const createExchangeCrypto = data => axios.post('exchange-miles', data)

export const getListBank = params => axios.get('banks', { params })

export const getListFiats = params => axios.get('fiats-money', { params })

export const getPhoneCountry = params => axios.get('pawn-shop/find-phone-countries', { params })
