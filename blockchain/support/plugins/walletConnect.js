import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider'

export const getWeb3walletConnect = async () => {
  try {
    const rpc = process.env.BLOCKCHAIN_NETWORK === 'MAINNET' ? { 56: process.env.RPC_NETWORK } : { 97: process.env.RPC_NETWORK }
    const provider = new WalletConnectProvider({
      chainId: process.env.BLOCKCHAIN_NETWORK === 'MAINNET' ? 56 : 97,
      rpc,
      bridge: 'https://walletconnect-monorepo.defiforyou.uk',
      infuraId: '5b7980e38cf9418cb5d2ccf34bcb5c46',
      qrcodeModalOptions: {
        mobileLinks: [
          'rainbow',
          'metamask',
          'argent',
          'trust',
          'imtoken',
          'pillar',
          'safepal'
        ]
      }
    })
    // await provider.disconnect();

    await provider.enable()

    const web3 = new Web3(provider)

    return web3
  } catch (e) {
    localStorage.removeItem('extensionName')
    localStorage.removeItem('walletconnect')
  }
}
