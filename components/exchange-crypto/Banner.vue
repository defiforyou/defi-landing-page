<template>
  <div class="banner">
    <img src="@/assets/img/exchange-crypto/tokens-banner.svg" alt="">
    <div class="text-content">
      <div class="banner-title">Exchange Crypto to Cash on DeFi For You</div>
      <div class="banner-subtitle">The only crypto-to-fiat trading platform with FCA . certification</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
.banner {
  background-color: #363C4A;
  background-image: url("@/assets/img/exchange-crypto/bg-banner.svg");
  position: relative;
  background-size: contain;
  background-position: right;
  color: #fff;
  img {
    position: absolute;
    z-index: 0;
    width: 30% ;
  }
  div {
    position: relative;
    z-index: 1;
  }
  .text-content {
    padding: 12px 1rem;
    background: #11111150;
  }
  &-title {
    font-weight: bold;
  }
  &-subtitle {
    font-size: 12px;
    font-weight: 500;
  }

  height: 125px;
  img {
    width: 150px;
    bottom: 0;
    left: 20px;
  }
  .text-content {
    margin: 0 auto;
    height: 100%;
    background: #11111130;
    padding: 28px 12px 0px;
  }
  &-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
  }
  &-subtitle {
    font-size: 12px;
  }

  @include media(md) {
    height: 175px;
    img {
      width: 324px;
      bottom: 0;
      left: 60px;
    }
    .text-content {
      margin: 0 auto;
      width: 800px;
      background: transparent;
      padding: 54px 0 0;
    }
    &-title {
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 14px;
    }
    &-subtitle {
      font-size: 24px;
    }
  }
}
</style>
