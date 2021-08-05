/**
 * initial state
 */
const state = () => ({
  banners: {},
  isReward: false
})

/**
 * initial getters
 */
const getters = {}

/**
 * initial actions
 */
const actions = {
  async getBanners ({ state, commit }) {
    try {
      const { data } = await this.$axios.get(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/ads/banners`)

      // eslint-disable-next-line eqeqeq
      if (data.code == 0) {
        commit('SET_BANNER', data.data.data)
      }
      return data || {}
    } catch (err) {
      return err
    }
  },
  async getStatus ({ state, commit }) {
    try {
      const { data } = await this.$axios.get(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/ads/reward-status`)

      // eslint-disable-next-line eqeqeq
      if (data.code == 0) {
        commit('SET_IS_REWARD', true)
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
const mutations = {
  SET_BANNER (currState, data) {
    currState.banners = data
  },
  SET_IS_REWARD (state, data) {
    state.isReward = data
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
