import Web3 from 'web3'

const rpcURL = process.env.RPC_NETWORK
const web3 = new Web3(rpcURL)

export const getGasInformation = async (txRaw) => {
  const gasPrice = await web3.eth.getGasPrice()
  let gasLimit = 0

  try {
    gasLimit = await web3.eth.estimateGas(txRaw)
  } catch {
    gasLimit = 4000000
  }

  return {
    gasPrice,
    gasLimit
  }
}
