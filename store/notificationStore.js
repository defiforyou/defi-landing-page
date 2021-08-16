export const state = () => ({
  isShowing: false,
  color: '',
  statusCode: 0,
  text: '',
  link: '',
  desc: '',
  viewMore: null,
  type: null
})

export const getters = {
  isShowing (state) { return state.isShowing },
  color (state) { return state.color },
  statusCode (state) { return state.statusCode },
  text (state) { return state.text },
  link (state) { return state.link },
  desc (state) { return state.desc },
  viewMore (state) { return state.viewMore },
  type (state) { return state.type }
}

export const actions = {
  closeMessageDialog ({ commit }) {
    commit('CLOSE_DIALOG')
  },
  showMessage ({ commit }, payload = {}) {
    commit('SHOW_DIALOG', {
      text: payload.text || 'Success!',
      link: payload.link || null,
      type: 'info'
    })
  },
  showSuccessMessage ({ commit }, payload = {}) {
    commit('SHOW_DIALOG', {
      ...payload,
      text: payload.text || 'Success!',
      link: payload.link || null,
      type: 'success'
    })
  },
  showErrorMessage ({ commit }, payload = {}) {
    commit('SHOW_DIALOG', {
      ...payload,
      text: payload.text || 'Something went wrong!',
      link: payload.link || null,
      type: 'error'
    })
  },
  showWarningMessage ({ commit }, payload = {}) {
    commit('SHOW_DIALOG', {
      ...payload,
      text: payload.text || 'Warning!',
      link: payload.link || null,
      type: 'warning'
    })
  }
}

export const mutations = {
  CLOSE_DIALOG (state) {
    state.isShowing = false
    state.text = ''
    state.link = ''
    state.viewMore = null
    // state.type = null
  },
  SHOW_DIALOG (state, payload) {
    state.isShowing = true
    state.statusCode = payload.statusCode
    state.text = payload.text
    state.link = payload.link
    state.desc = payload.desc
    state.type = payload.type
    state.viewMore = payload.viewMore
  }
}
