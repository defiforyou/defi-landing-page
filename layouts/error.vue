<template>
  <div style="text-align: center;">
    <div style="background: #383838;">
      <div class="">
        <div>
          <div class="oop">
            Oopps...!
          </div>
          <div class="oop-content">
            <div>
              App Website is under maintainance
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <img :src="require('~/assets/img/maintain-error.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Page not found.',
      otherError: 'An error occurred.'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.oop {
  color: #FFFFFF;
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;

  &-content {
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
  }
}
</style>
