/**
 * initial state
 */
const state = () => ({
  banners: {}
})

/**
 * initial getters
 */
const getters = {}

/**
 * initial actions
 */
const actions = {
  async getBanners ({ commit }) {
    try {
      const { data } = await this.$axios.get('/defi-pawn-crypto-service/public-api/v1.0.0/ads/banners')

      if (data.code === 0) {
        commit('SET_BANNER', data.data.data)
      }
      return data || {}
    } catch (err) {
      return err
    }
  },

  async postCreateEvaluatorStepOne ({ commit }, payload) {
    const result = await this.$api.evaluator.postCreateEvaluatorStepOne(payload)

    return result || {}
  }

}

/**
 * initial mutations
 */
const mutations = {
  SET_BANNER (currState, data) {
    currState.banners = data
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
