import Vue from 'vue'

Vue.directive('image', (e, binding) => {
  const url = binding.value
  // const mods = binding.modifiers
  if (!url || binding.value === binding.oldValue) { return }
  if (e.tagName === 'IMG') { e.src = url } else { e.style.backgroundImage = `url('${url}')` }
})
