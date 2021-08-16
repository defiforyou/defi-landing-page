export default (context, inject) => {
  const mapImageCurrency = (name) => {
    if (name) {
      return require(`~/assets/img/coin/${name}.png`)
    } else {
      return require('~/assets/img/coin/DFY.png')
    }
  }

  // Inject $mapImageCurrency(item) in Vue, context, and store
  inject('mapImageCurrency', mapImageCurrency)
  context.$mapImageCurrency = mapImageCurrency
}
