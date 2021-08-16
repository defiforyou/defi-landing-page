export const state = () => ({
  currentAddress: null,
  supportTokenAndBalance: [],
  isLoadingWallet: false
})
export const getters = {
  currentAddress (state) {
    return state.currentAddress
  },
  supportTokenAndBalance (state) {
    return state.supportTokenAndBalance
  },
  isLoadingWallet (state) {
    return state.isLoadingWallet
  }
}
export const actions = {
  changeCurrentAddress ({ commit }, address) {
    commit('CHANGE_CURRENT_ADDRESS', address)
  },
  changeSupportTokenAndBalance ({ commit }, data) {
    commit('CHANGE_SUPPORT_TOKEN_AND_BALANCE', data)
  },
  changeLoadingWallet ({ commit }, data) {
    commit('CHANGE_LOADING_WALLET', data)
  }
}
export const mutations = {
  CHANGE_CURRENT_ADDRESS (state, address) {
    state.currentAddress = address
  },
  CHANGE_SUPPORT_TOKEN_AND_BALANCE (state, data) {
    state.supportTokenAndBalance = data
  },
  CHANGE_LOADING_WALLET (state, data) {
    state.isLoadingWallet = data
  }
}
