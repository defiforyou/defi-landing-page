import get from 'lodash/get'
import { getCryptoAsset, getListFiats, getListBank, getPhoneCountry } from '~/api/exchange-crypto-service'

export const state = () => ({
  listAmountTokens: [],
  listFiats: [],
  listBanks: [],
  listPhoneCountries: []
})

export const actions = {
  async fetchListAmountTokens ({ commit }, payload) {
    const res = await getCryptoAsset(payload)
    const data = get(res, 'data.data', [])
    console.log('data ', data)
    commit('SET_LIST_AMOUNT_TOKEN', data)
  },
  async fetchListFiats ({ commit }, payload) {
    const res = await getListFiats(payload)
    const data = get(res, 'data.data', [])
    commit('SET_LIST_FIATS', data)
  },
  async fetchListBanks ({ commit }, payload) {
    const res = await getListBank(payload)
    const data = get(res, 'data.data', [])
    commit('SET_LIST_BANKS', data)
  },
  async fetchListPhoneCountries ({ commit }, payload) {
    const res = await getPhoneCountry(payload)
    const data = get(res, 'data.data', [])
    commit('SET_LIST_PHONE_COUNTRIES', data)
  }
}

export const mutations = {
  SET_LIST_AMOUNT_TOKEN (state, payload) {
    state.listAmountTokens = payload
  },
  SET_LIST_FIATS (state, payload) {
    state.listFiats = payload
  },
  SET_LIST_BANKS (state, payload) {
    state.listBanks = payload
  },
  SET_LIST_PHONE_COUNTRIES (state, payload) {
    state.listPhoneCountries = payload
  }
}
