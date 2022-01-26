/**
 * initial state
 */
export const state = () => ({
  valueUser: {
    amountPay: 0,
    currency: '',
    amountGet: 0
  },
  countries: null,
  states: [],
  phones: [],
  isShowing: false,
  text: '',
  type: null,
  isPostal: false
})

/**
 * initial getters
 */
export const getters = {
  valueUser (state) {
    return state.valueUser
  },
  isShowing (state) {
    return state.isShowing
  },
  text (state) {
    return state.text
  },
  type (state) {
    return state.type
  },
  countries (state) {
    return state.countries
  },
  states (state) {
    return state.states
  },
  phones (state) {
    return state.phones
  },
  isPostal (state) {
    return state.isPostal
  }
}

/**
 * initial actions
 */
export const actions = {
  closeMessageDialog ({ commit }) {
    commit('CLOSE_DIALOG')
  },
  showSuccessMessage ({ commit }, payload = {}) {
    commit('SHOW_DIALOG', {
      ...payload,
      type: 'success'
    })
  },
  showErrorMessage ({ commit }, payload = {}) {
    commit('SHOW_DIALOG', {
      text: payload !== 'error' ? payload : ['Something went wrong!'],
      type: 'error'
    })
  },
  getValueUser ({ commit }, payload = {}) {
    commit('GET_VALUE_USER', { ...payload })
  },
  async getCountries ({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(
        `${process.env.API_URL}/defi-user-service/public-api/v1.0.0/countries`
      )
      commit('GET_COUNTRIES', {
        ...payload,
        data
      })
    } catch (err) {
      return err
    }
  },
  async getStates ({ commit }, id) {
    try {
      const { data } = await this.$axios.get(
        `${process.env.API_URL}/defi-user-service/public-api/v1.0.0/countries/${id}`
      )
      commit('GET_STATES', data)
    } catch (err) {
      return err
    }
  },
  async getPhones ({ commit }) {
    try {
      const { data } = await this.$axios.get(
        `${process.env.API_URL}/defi-user-service/public-api/v1.0.0/phonecodes`
      )
      commit('GET_PHONES', data)
    } catch (err) {
      return err
    }
  }
}

/**
 * initial mutations
 */
export const mutations = {
  GET_VALUE_USER (state, payload) {
    state.valueUser = { ...state.valueUser, ...payload }
  },
  GET_COUNTRIES (state, payload) {
    state.countries = payload.data
  },
  GET_STATES (state, payload) {
    state.states = payload
  },
  GET_PHONES (state, payload) {
    state.phones = payload
  },
  CLOSE_DIALOG (state) {
    state.isShowing = false
    state.text = ''
    state.link = ''
    state.viewMore = null
    state.type = null
  },
  SHOW_DIALOG (state, payload) {
    state.isShowing = true
    state.text = payload.text
    state.type = payload.type
  },
  IS_POSTAL (state, payload) {
    state.isPostal = payload
  }
}
