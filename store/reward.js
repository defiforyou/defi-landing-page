/**
 * initial state
 */
export const state = () => ({
  banners: {},
  isReward: false,
  priceGold: []
})

/**
 * initial getters
 */
export const getters = {}

/**
 * initial actions
 */
export const actions = {
  async getBanners ({ state, commit }) {
    try {
      const { data } = await this.$axios.get(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/ads/banners`)

      // eslint-disable-next-line eqeqeq
      if (data.code == 0) {
        commit('SET_BANNER', data.data)
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
  },
  async getGoldPrice ({ state, commit }) {
    try {
      const { data } = await this.$axios.get(`${process.env.API_URL}/defi-pawn-crypto-service/public-api/v1.0.0/gold-bar-pricing`)

      // eslint-disable-next-line eqeqeq
      if (data.code == 0) {
        commit('SET_PRICE', data.data)
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
  SET_BANNER (currState, data) {
    currState.banners = data
  },
  SET_IS_REWARD (state, data) {
    state.isReward = data
  },
  SET_PRICE (currState, data) {
    currState.priceGold = data
  }

}
