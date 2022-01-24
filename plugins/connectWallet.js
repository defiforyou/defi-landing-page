
import _isEmpty from 'lodash/isEmpty'
import { initWeb3 } from '~/blockchain/support/initWeb3'
import { getBalance } from '~/blockchain/support/getBalance'

const supportUpdateStore = async (context, currentAddress) => {
  if (currentAddress) {
    context.store.dispatch('walletStore/changeCurrentAddress', currentAddress)
    context.store.dispatch('walletStore/changeSupportTokenAndBalance', await getBalance(currentAddress))
  }
}

const logicAccountChanged = async (context, walletName, accounts) => {
  if (!_isEmpty(accounts)) {
    if (context.store.state.walletStore.currentAddress.toLowerCase() !== accounts[0].toLowerCase()) {
      const web3 = await initWeb3(walletName)

      const accounts = await web3.eth.getAccounts()

      if (accounts.length) {
        supportUpdateStore(context, accounts[0])
      } else {
        // eslint-disable-next-line no-console
        console.log(`no connect ${walletName}`)
      }
    }
  } else {
    context.$removeWalletAddress()
  }
}

const eventAccount = (context, walletName) => {
  window.ethereum.on('accountsChanged', async function (accounts) {
    if (!_isEmpty(accounts)) {
      await logicAccountChanged(context, walletName, accounts)
    }
  })

  window.BinanceChain.on('accountsChanged', async function (accounts) {
    if (!_isEmpty(accounts)) {
      await logicAccountChanged(context, walletName, accounts)
    }
  })

  window.ethereum.on('networkChanged', async function (networkId) {
    // eslint-disable-next-line no-console
    await console.log(`you are in networkId: ${networkId}`)
  })
}

export default (context, inject) => {
  const connectWallet = async (walletName, connectExist = true) => {
    let isReadyEnableBlockchain = false
    // connextExist before run code below, if no connectExist run connectWallet first time
    if (connectExist) {
      if (walletName !== 'WalletConnect') {
        isReadyEnableBlockchain = false
      }
    } else {
      isReadyEnableBlockchain = true
    }

    try {
      await context.store.dispatch('walletStore/changeLoadingWallet', true)

      // console.log(isReadyEnableBlockchain, 11111212)
      const web3 = await initWeb3(walletName, isReadyEnableBlockchain)

      const accounts = await web3.eth.getAccounts()
      // console.log(accounts, 1111111111)
      if (accounts.length) {
        supportUpdateStore(context, accounts[0])
        eventAccount(context, walletName)
      } else {
        // eslint-disable-next-line no-console
        console.log(`no connect ${walletName}`)
      }
    } catch (error) {
      // console.log(error, 111111111)
    } finally {
      await context.store.dispatch('walletStore/changeLoadingWallet', false)
    }
  }

  // Inject $connectWallet(item) in Vue, context, and store
  inject('connectWallet', connectWallet)
  context.$connectWallet = connectWallet
}
