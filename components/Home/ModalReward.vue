<template>
  <div class="modal-root" @click="$emit('close')">
    <div class="modal-wrapper">
      <div
        v-if="$device.isMobile"
        class="reward"
        :style="{ backgroundImage: 'url(' + get(banners, '[0].imageMobileUrl', '') + ')' }"
      >
        <span class="close" @click="$emit('close')">
          <img src="~assets/img/x-circle.png" alt="">
        </span>

        <div class="reward__content">
          <h3 class="reward-title">
            Exclusive on DeFi For You!!!
          </h3>

          <div class="reward-text">
            Register new DeFi For You account from  <span>{{ $convertTime(get(banners, '[0].startAt', '')) }}</span> to
            <span>{{ $convertTime(get(banners, '[0].stopAt', '')) }}</span> to have 100% chance of receiving DFY tokens
          </div>

          <div class="reward-btn">
            <button v-if="isHandleSignUp" @click="redirect()">
              Sign up to get reward
            </button>

            <button v-else class="btn-disable">
              Sign up to get reward
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="$device.isDesktopOrTablet"
        class="reward"
        :style="{ backgroundImage: 'url(' + get(banners, '[0].imageUrl', '') + ')' }"
      >
        <span class="close" @click="$emit('close')">
          <img src="~assets/img/x-circle.png" alt="">
        </span>

        <div class="reward__content">
          <h3 class="reward-title">
            Exclusive on DeFi For You!!!
          </h3>

          <div class="reward-text">
            Register new DeFi For You account from  <span>{{ $convertTime(get(banners, '[0].startAt', '')) }}</span> to
            <span>{{ $convertTime(get(banners, '[0].stopAt', '')) }}</span> to have 100% chance of receiving DFY tokens
          </div>

          <div class="reward-btn">
            <button v-if="isHandleSignUp" @click="redirect()">
              Sign up to get reward
            </button>

            <button v-else class="btn-disable">
              Sign up to get reward
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import get from 'lodash/get'
export default {
  computed: {
    ...mapState('reward', ['banners']),
    isHandleSignUp () {
      const startAt = moment(get(this.banners, '[0].startAt', ''))
      const stopAt = moment(get(this.banners, '[0].stopAt', ''))
      const popup = ((startAt.isBefore(moment()) && moment().isBefore(stopAt)))
      return popup
    }
  },

  methods: {
    get,
    redirect () {
      window.location = `${process.env.APP_URL}/login?tab=1`
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-root {
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  max-height: 90%;
  transform-origin: center center;
  transition: .3s cubic-bezier(.25,.8,.25,1);
  margin: 0;
  width: 100%;

  @media(min-width: 1200px) {
    margin: auto 20px;
  }
}

.reward {
  // background: url('~assets/img/bg-reward-mobile.png') no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 20px;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  max-width: 344px;
  margin: auto;
  min-height: 400px;

  @media (min-width: 576px) {
    max-width: 536px;
  }

  @media (min-width: 768px) {
    max-width: 710px;
  }

  @media(min-width: 960px) {
    background-position: center;
    // background: url('~assets/img/bg-reward.png') no-repeat;
    height: 476px;
    max-width: 1135px;
  }
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  @media (min-width: 960px) {
    top: 20px;
    right: 20px;
  }

  img {
    width: 27px;
    height: 27px;

    @media (min-width: 960px) {
      width: unset;
      height: unset;
    }
  }
}

.reward__content {
  margin: 60px 20px 0 20px;

  @media(min-width: 960px) {
    position: absolute;
    top: 90px;
    right: 50px;
    text-align: center;
    max-width: 760px;
    margin-top: 0;
    padding: 0;
    max-width: 710px;
    margin-top: 80px 0 0 0;
  }
}

.reward-title {
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  font-family: "Montserrat";
  margin-bottom: 10px;
  text-align: center;

  @media(min-width: 960px) {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 48px;
  }
}

.reward-text {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 18px;
  color: #FFFFFF;
  font-family: "Montserrat";
  text-align: left;

  @media(min-width: 960px) {
    margin-bottom: 54px;
    font-size: 22px;
    line-height: 29px;
  }

  span {
    color: #F8EF17;
  }
}

.reward-btn {
  text-align: center;
  button {
    width: 196px;
    height: 40px;
    border: none;
    background: linear-gradient(221.15deg, #EFA727 0%, #FFD87C 49.02%, #FFC43D 62.02%, #EAA326 101.47%);
    border-radius: 30px;
    color: #282C37;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    font-family: "Montserrat";
    margin-bottom: 20px;

    @media(min-width: 960px) {
      width: 336px;
      font-size: 24px;
      height: 60px;
    }
  }

  .btn-disable {
    background: #A2A3A7;
    color: #D1D1D3;
    cursor: not-allowed;
  }
}
</style>
