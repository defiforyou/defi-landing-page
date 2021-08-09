import * as gasInfo from '~/blockchain/support/getGasInformation'
import { initWeb3 } from '~/blockchain/support/initWeb3'
import pawnAbi from '~/blockchain/contracts/pawn.abi.json'

const pawnContractAddress = '0xadb668b33b7a8562b719cab837991c810d3f1ce0'

export const cancelOfferTx = async (offerId, bcCollateralId, from) => {
  // eslint-disable-next-line no-console
  console.log(offerId, bcCollateralId, from, 'offerId, bcCollateralId, from - cancelOfferTx')
  const web3 = await initWeb3()
  const tokenContract = new web3.eth.Contract(
    pawnAbi,
    pawnContractAddress
  )
  const txData = tokenContract.methods.cancelOffer(
    offerId,
    bcCollateralId
  )

  const nonce = await web3.eth.getTransactionCount(from, 'pending')
  // Create transaction
  const tx = {
    from,
    to: pawnContractAddress,
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
