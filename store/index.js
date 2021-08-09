export const state = () => ({
})

export const actions = {
  async nuxtServerInit ({ commit, dispatch, state }) {
    // update list coin from database crypto asset
    await dispatch('supportSymbol/getListSupportSymbol')

    // const extensionName = localStorage.getItem('extensionName')
    // try {
    //   if (extensionName) {
    //     await this.$connectWallet(extensionName, extensionName !== 'WalletConnect')
    //   }
    // } catch (error) {
    //   // eslint-disable-next-line no-console
    //   console.log(error)
    // }
  },
  async nuxtClientInit () {
    const extensionName = localStorage.getItem('extensionName')
    try {
      if (extensionName) {
        await this.$connectWallet(extensionName, extensionName !== 'WalletConnect')
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}

export const mutations = {
}
