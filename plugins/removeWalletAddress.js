export default (context, inject) => {
  const removeWalletAddress = async () => {
    await context.store.dispatch('walletStore/changeCurrentAddress', null)

    localStorage.removeItem('extensionName')

    localStorage.removeItem('walletconnect')
  }

  // Inject $removeWalletAddress(item) in Vue, context, and store
  inject('removeWalletAddress', removeWalletAddress)
  context.$removeWalletAddress = removeWalletAddress
}
