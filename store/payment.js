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
  cities: [],
  phones: [],
  isShowing: false,
  text: '',
  type: null
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
  cities (state) {
    return state.cities
  },
  phones (state) {
    return state.phones
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
  getValueUser ({ commit }, payload = {}) {
    commit('GET_VALUE_USER', {
      ...payload,
      valueUser: payload
    })
  },
  async getCountries ({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(
        'https://dev2.gwapi.defiforyou.uk/defi-user-service/public-api/v1.0.0/countries'
      )
      commit('GET_COUNTRIES', {
        ...payload,
        data
      })
    } catch (err) {
      console.log(err)
    }
  },
  async getCities ({ commit }, id) {
    try {
      const { data } = await this.$axios.get(
        `https://dev2.gwapi.defiforyou.uk/defi-user-service/public-api/v1.0.0/countries/${id}`
      )
      commit('GET_CITIES', data)
    } catch (err) {
      console.log('err', err)
    }
  },
  async getPhones ({ commit }) {
    try {
      const { data } = await this.$axios.get(
        'https://dev2.gwapi.defiforyou.uk/defi-user-service/public-api/v1.0.0/phonecodes'
      )
      commit('GET_PHONES', data)
    } catch (err) {
      console.log('err', err)
    }
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
    state.countries = payload.data
  },
  GET_CITIES (state, payload) {
    state.cities = payload
  },
  GET_PHONES (state, payload) {
    state.phones = payload
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
