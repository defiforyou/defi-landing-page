import { isEmpty } from 'lodash'

export default (context, inject) => {
  const shortAddress = (item, number, callback = null) => {
    if (typeof callback === 'function') {
      callback(item)
    }
    return !isEmpty(item)
      ? item.slice(0, number) + '...' + item.slice(item.length - number)
      : null
  }

  // Inject $shortAddress(item) in Vue, context, and store
  inject('shortAddress', shortAddress)
  context.$shortAddress = shortAddress
}
