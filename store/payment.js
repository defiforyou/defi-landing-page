/**
 * initial state
 */
export const state = () => ({
  valueUser: {
    pay: 0,
    payCurrency: '',
    getValue: 0,
    getCurrency: ''
  },
  countries: null,
  cities: null,
  isShowing: false,
  text: '',
  type: null
})

/**
 * initial getters
 */
export const getters = {
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
    console.log('call')
    commit('SHOW_DIALOG', {
      ...payload,
      type: 'success'
    })
  },
  showErrorMessage ({ commit }, payload = {}) {
    commit('SHOW_DIALOG', {
      ...payload,
      text: payload.text || 'Something went wrong!',
      type: 'error'
    })
  },
  async getCountries ({ commit }, payload) {
    const { data } = await this.$axios.get(
      'https://dev2.gwapi.defiforyou.uk/defi-user-service/public-api/v1.0.0/countries'
    )
    commit('GET_COUNTRIES', {
      ...payload,
      data
    })
  },
  async getCities ({ commit }, payload) {
    console.log('id', payload)
    const { data } = await this.$axios.get(
      `https://dev2.gwapi.defiforyou.uk/defi-user-service/public-api/v1.0.0/countries/${payload}`
    )
    commit('GET_CITIES', data)
  }
}

/**
 * initial mutations
 */
export const mutations = {
  GET_VALUE_USER (state, payload) {
    state.valueUser = payload
  },
  GET_COUNTRIES (state, payload) {
    const countries = payload.data.map(item => item.name)
    state.countries = payload.data
    console.log('payload', countries)
  },
  GET_CITIES (state, payload) {
    console.log('pay', payload)
    state.cities = payload
  },
  CLOSE_DIALOG (state) {
    state.isShowing = false
    state.text = ''
    state.link = ''
    state.viewMore = null
    // state.type = null
  },
  SHOW_DIALOG (state, payload) {
    state.isShowing = true
    state.text = payload.text
    state.type = payload.type
  }
}
