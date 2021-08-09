import * as gasInfo from './plugins/getGasInformation'
import { initWeb3 } from './initWeb3'
import erc20Abi from '~/blockchain/contracts/erc20.abi.json'

const MAX_INT = process.env.MAX_INT

/**
 * check approve
  @param {string} from format wallet address
  @param {string} tokenSymbol
  @param {string} spender
 * @returns
 */
export const checkApproveTx = async (from, tokenSymbol, spender) => {
  if (tokenSymbol === 'BNB') {
    return MAX_INT
  } else {
    const web3 = await initWeb3()
    const supportSymbol = JSON.parse(localStorage.getItem('supportSymbol'))
    const tokenContract = new web3.eth.Contract(erc20Abi, supportSymbol[tokenSymbol])
    const allowance = await tokenContract.methods.allowance(from, spender).call()
    return allowance
  }
}

/**
 * create approve
  @param {} from format wallet address
  @param {} tokenSymbol
  @param {} amount
  @param {} spender
 * @returns
 */
export const createApproveTx = async (from, tokenSymbol, spender, amount = MAX_INT) => {
  const web3 = await initWeb3()
  const supportSymbol = JSON.parse(localStorage.getItem('supportSymbol'))
  const tokenContract = new web3.eth.Contract(
    erc20Abi,
    supportSymbol[tokenSymbol]
  )

  const txData = tokenContract.methods.approve(
    spender,
    amount
  )

  const nonce = await web3.eth.getTransactionCount(from, 'pending')
  // data tx
  const tx = {
    from,
    to: supportSymbol[tokenSymbol],
    value: 0,
    nonce,
    data: txData.encodeABI()
  }

  const gasData = await gasInfo.getGasInformation(tx)

  return {
    tx,
    gasPrice: gasData.gasPrice,
    gasLimit: gasData.gasLimit
  }
}
