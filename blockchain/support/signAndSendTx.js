import { initWeb3 } from './initWeb3'

export const signAndSendTx = async (data) => {
  const tx = data.tx
  tx.gasLimit = data.gasLimit
  tx.gasPrice = data.gasPrice

  const web3 = await initWeb3()

  const receipt = await web3.eth.sendTransaction(tx)
  return receipt
}
