import moment from 'moment'
import get from 'lodash/get'
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

      if (data.code === 0) {
        commit('SET_BANNER', data.data.data)
        const startAt = moment(get(state.banners, '[0].startAt', ''))
        const stopAt = moment(get(state.banners, '[0].stopAt', ''))
        const popup = ((startAt.isBefore(moment()) && moment().isBefore(stopAt)) || moment().isBefore(startAt))
        commit('SET_IS_REWARD', popup)
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
