import Web3 from 'web3'
import _get from 'lodash/get'
import detectEthereumProvider from '@metamask/detect-provider'
import waitingPropertyExtension from './plugins/waitingPropertyExtension'
import { detectNetworkMetamask } from './plugins/detectNetworkMetamask'
import { getWeb3walletConnect } from './plugins/walletConnect'

export const initWeb3 = async (extensionName = localStorage.getItem('extensionName'), isReadyEnableBlockchain = true) => {
  const provider = await detectEthereumProvider()
  let web3 = null

  switch (extensionName) {
    case 'BinanceChain':
      await waitingPropertyExtension('BinanceChain')
      await window.BinanceChain.enable()
      web3 = new Web3(window.BinanceChain)

      break
    case 'WalletConnect':
      web3 = await getWeb3walletConnect()

      break
    default:
      if (provider) {
      // if init project not available metamask
        if (isReadyEnableBlockchain) {
          await window.ethereum.enable()
        }
        // check switch network
        await detectNetworkMetamask()

        web3 = new Web3(_get(window, 'web3.currentProvider'))
      } else {
      // eslint-disable-next-line no-console
        console.log('Please install MetaMask!')
      }
      break
  }

  return web3
}
