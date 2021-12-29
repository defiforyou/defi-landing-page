<template>
  <div class="get-us">
    <div class="container">
      <div class="dfy-flex layout">
        <div class="screens">
          <div class="screens--app-store">
            <img src="/img/icon-get-us-1.png" alt="">
          </div>
          <div class="screens--google-play">
            <img src="/img/icon-get-us-2.png" alt="">
          </div>
        </div>

        <div class="text">
          <h2 class="text--title">
            Get us on mobile
          </h2>
          <p>Access DeFi For You from home and anywhere else on the world.</p>
          <p>It’s easy, convenient and secure at your fingertips with the DeFi For You Mobile App.</p>
          <p class="coming-soon">
            Coming soon on:
          </p>
          <div class="download d-flex align-center">
            <nuxt-link :to="{name: 'download-app'}">
              <img src="/img/icon-app-store.svg" alt="">
              <img src="/img/QR_ios.jpeg" class="qr_code">
            </nuxt-link>
            <nuxt-link :to="{name: 'download-app'}">
              <img src="/img/icon-google-play.svg" alt="">
              <img src="/img/QR_android.jpeg" class="qr_code">
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.get-us {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 4rem;

  @include media(sm-down) {
    padding-bottom: 1rem;
  }
}

.layout {
  align-items: center;

  > div {
    width: 50%;
  }

  @include media(sm-down) {
    flex-direction: column;

    > div {
      width: 100%;
      text-align: center;
    }
  }
}

.screens {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  @include media(sm-down) {
    margin-bottom: -200px;
    z-index: 1;
    &:after {
      content: "";
      z-index: 4;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      background: linear-gradient(#171A23bb, #171A23ee);
    }
  }

  &--app-store {
    position: relative;
    z-index: 1;
    margin-bottom: 2.5rem;
    left: 3rem;
  }

  &--google-play {
    position: relative;
    z-index: 2;
    margin-top: 2.5rem;
    right: 3rem;
  }
}

.text {
  position: relative;
  z-index: 2;

  &--title {
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 500;
  }

  p {
    color: #9FA6B2;
    margin-bottom: 16px;

    &:last-child {
      margin-top: 32px;
    }
  }
}

p.coming-soon {
  margin-bottom: 8px;
}

.download {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a {
    margin-bottom: 1rem;
    position: relative;
    &:hover .qr_code{
      display: block;
      animation: fade-in .25s;
    }
  }
  & .qr_code{
    position: absolute;
    z-index: 2;
    bottom: -180px;
    right: 0;
    left: 0;
    display: none;
  }
  a:first-child {
    margin-right: 45px;
  }
  @keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

  @include media(sm-down) {
    justify-content: center;
    a{
      margin-bottom: 2rem;
    }
    /* img {
      margin-bottom: 2rem;
      margin-right: 0 !important;
    } */
  }
  @media screen and (max-width: 438px){
    a{
      margin-bottom: 2rem;
    }
    a:first-child {
    margin-right: 0;
    }
  }

}
</style>
