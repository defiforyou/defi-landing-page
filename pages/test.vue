<template lang="pug">
.page
  .container
    .scene
    .scene#trigger
      div
        img.icon(src="/icon.png")
    .scene
</template>

<script>
import { TweenMax, Power3 } from 'gsap'

export default {
  mounted () {
    this.$scrollmagic
      .scene({
        triggerElement: '#trigger'
      })
      .setTween(TweenMax.to('.icon', 2, {
        y: '-=50',
        blurFilter: {
          blurX: 0,
          blurY: 20
        },
        ease: Power3.out
      }))
      .addIndicators()
      .addTo(this.$scrollmagic.controller_)
  }
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  max-width: 1100px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.scene {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
