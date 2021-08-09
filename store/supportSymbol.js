// import * as cryptoAssetApi from '~/api/public/cryptoAsset'

/**
 * initial state
 */
export const state = () => ({
  tokens: []
})

/**
 * initial getters
 */
export const getters = {
  tokens (state) {
    return state.tokens
  },
  tokenWhiteListCollateral (state) {
    return state.tokens.filter((item) => {
      return item.isWhitelistCollateral === true
    })
  },
  tokenWhiteListSupply (state) {
    return state.tokens.filter((item) => {
      return item.isWhitelistSupply === true
    })
  }
}

/**
 * initial actions
 */
export const actions = {
  async getListSupportSymbol ({ commit }) {
    try {
      // const { data } = await cryptoAssetApi.getListCryptoAsset()
      const data = [
        {
          id: 6,
          isWhitelistCollateral: true,
          isWhitelistSupply: false,
          usdExchange: 0.547745,
          isAcceptedAsCollateral: null,
          isAcceptedAsLoan: null,
          isAcceptedRepayment: null,
          symbol: 'ETH',
          address: '0xf827916F754297d7fF595e77c8dF8287fDE74BA4'
        }
      ]
      const fileSupportSymbol = []
      const originTokens = data
      await data.forEach((item) => {
        fileSupportSymbol[item.symbol] = item.address
      })

      commit('setListSupportSymbol', { fileSupportSymbol, originTokens })
    } catch (err) {
      return err
    }
  }
}

/**
 * initial mutations
 */
export const mutations = {
  setListSupportSymbol (state, { fileSupportSymbol, originTokens }) {
    localStorage.setItem('supportSymbol', JSON.stringify({ ...fileSupportSymbol }))
    state.tokens = originTokens
  }
}
