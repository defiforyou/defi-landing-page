import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import erc20Abi from '~/blockchain/contracts/erc20.abi.json'

const rpcURL = process.env.RPC_NETWORK
const web3 = new Web3(rpcURL)
const supportSymbol = JSON.parse(localStorage.getItem('supportSymbol'))

export const getBalance = async (walletAddress) => {
  return await Promise.all(Object.keys(supportSymbol).map(async (symbol) => {
    if (symbol === 'BNB') {
      const userBalance = await web3.eth.getBalance(walletAddress)
      return {
        symbol,
        balance: BigNumber(userBalance).dividedBy(10 ** 18).toString()
      }
    } else {
      const tokenAddress = supportSymbol[symbol]
      const tokenContract = new web3.eth.Contract(
        erc20Abi,
        tokenAddress
      )

      let userBalance = 0
      try {
        userBalance = await tokenContract.methods
          .balanceOf(walletAddress)
          .call()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }

      return {
        symbol,
        balance: BigNumber(userBalance).dividedBy(10 ** 18).toString()
      }
    }
  }))
}
