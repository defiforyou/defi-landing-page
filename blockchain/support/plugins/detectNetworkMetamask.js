
/**
 * switch network core
  @param {string} RPC_NETWORK
  @param {string} chainId
 * @returns request change network
 */
export const switchNetWorkCore = async (rpcUrl, chainId) => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }]
      })
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId,
                rpcUrl
              }
            ]
          })
        } catch (addError) {
          // eslint-disable-next-line no-console
          console.error(addError)
        }
      }
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}

/**
 * auto detect current network
 * @returns switchNetWorkCore()
 */
export const detectNetworkMetamask = async () => {
  let chainId
  if (process.env.BLOCKCHAIN_NETWORK === 'TESTNET' && window.ethereum.networkVersion === 56) {
    chainId = '0x61'
    await switchNetWorkCore(process.env.RPC_NETWORK, chainId)
  } else if (process.env.BLOCKCHAIN_NETWORK === 'MAINNET' && window.ethereum.networkVersion === 97) {
    chainId = '0x38'
    await switchNetWorkCore(process.env.RPC_NETWORK, chainId)
  }
}
