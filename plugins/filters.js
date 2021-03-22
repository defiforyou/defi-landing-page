import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('number', (val, format = '0,0') => {
  return numeral(val).format(format)
})

Vue.filter('abs', (val) => {
  return Math.abs(val)
})

Vue.filter('percentage', (val) => {
  return val * 100
})
