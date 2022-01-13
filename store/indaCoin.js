/**
 * initial state
 */
export const state = () => ({
  currencies: {
    currenciesPay: ['USD', 'EUR', 'GBP'],
    currenciesGet: ['DFY']
  }
})

/**
 * initial getters
 */
export const getters = {}

/**
 * initial actions
 */
export const actions = {
  async getCurrencies ({ state, commit }) {
    try {
      const { data } = await this.$axios.get(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/indacoin/currencies`)

      // eslint-disable-next-line eqeqeq
      if (data.code == 0) {
        commit('SET_CURRENCY', data.data)
      }
      return data || {}
    } catch (err) {
      return err
    }
  }

}

/**
 * initial mutations
 */
export const mutations = {
  SET_CURRENCY (state, data) {
    // state.currencies = data
  }
}
