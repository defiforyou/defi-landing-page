export default (context, inject) => {
  const getBscLink = (link, type) => {
    if (type === 'address') {
      return process.env.BLOCKCHAIN_NETWORK === 'TESTNET'
        ? `https://testnet.bscscan.com/address/${link}`
        : `https://bscscan.com/address/${link}`
    } else {
      return process.env.BLOCKCHAIN_NETWORK === 'TESTNET'
        ? `https://testnet.bscscan.com/tx/${link}`
        : `https://bscscan.com/tx/${link}`
    }
  }

  // Inject $convertTime(item) in Vue, context, and store
  inject('getBscLink', getBscLink)
  context.$getBscLink = getBscLink
}
