export default (context, inject) => {
  const mapImageCurrency = (name) => {
    if (name) {
      return `https://s3.ap-southeast-1.amazonaws.com/beta-storage-dfy/upload/${name}.png`
    } else {
      return 'https://s3.ap-southeast-1.amazonaws.com/beta-storage-dfy/upload/DFY.png'
    }
  }

  // Inject $mapImageCurrency(item) in Vue, context, and store
  inject('mapImageCurrency', mapImageCurrency)
  context.$mapImageCurrency = mapImageCurrency
}
