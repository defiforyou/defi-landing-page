import Decimal from 'decimal.js'

export default (context, inject) => {
  const numberFormatDecimal = (item, fixedNumber = 5, callback = null) => {
    if (typeof callback === 'function') {
      callback(item)
    }

    if (item || item === 0 || item === '0') {
      const StrItem = item.toString().split('.')[1] || ''
      const afterDecimalStr = StrItem.length

      let lastFixedNumber

      if (afterDecimalStr < fixedNumber) {
        lastFixedNumber = afterDecimalStr
      } else {
        lastFixedNumber = fixedNumber
      }

      const number = new Decimal(item || 0)
      const numberDecimal = number.toFixed(lastFixedNumber, Decimal.ROUND_DOWN)

      const StrItemBefore = numberDecimal.toString().split('.')[0] || ''
      const StrItemAfter = numberDecimal.toString().split('.')[1] || ''

      if (StrItemAfter === '') {
        return `${StrItemBefore.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
      } else {
        return `${StrItemBefore.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${StrItemAfter}`
      }
    }
  }

  // Inject $numberFormatDecimal(item) in Vue, context, and store
  inject('numberFormatDecimal', numberFormatDecimal)
  context.$numberFormatDecimal = numberFormatDecimal
}
