/**
 * initial state
 */
export const state = () => ({
  valueUser: {
    pay: 0,
    payCurrency: '',
    getValue: 0,
    getCurrency: ''
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
}

/**
 * initial mutations
 */
export const mutations = {
  GET_VALUE_USER (state, payload) {
    state.valueUser = payload
  }
}
