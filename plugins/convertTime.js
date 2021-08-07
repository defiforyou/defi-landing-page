import moment from 'moment'

export default (context, inject) => {
  const convertTime = (item, type = 0, callback = null) => {
    if (typeof callback === 'function') {
      callback(item)
    }

    if (type === 0) {
      return moment(item).local().format('HH:mm DD/MM/YYYY')
    }

    if (type === 1) {
      return moment(item).local().format('MMM, YYYY')
    }

    if (type === 2) {
      return moment(item).local().format('DD/MM/YYYY')
    }
  }

  // Inject $convertTime(item) in Vue, context, and store
  inject('convertTime', convertTime)
  context.$convertTime = convertTime
}
