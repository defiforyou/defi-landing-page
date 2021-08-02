<template>
  <div class="modal-root">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="reward">
        <span class="close" @click="$emit('close')">
          <img src="~assets/img/x-circle.png" alt="">
        </span>

        <div class="reward__content">
          <h3 class="reward-title">
            Exclusive on DeFi For You!!!
          </h3>

          <div class="reward-text">
            Register new DeFi For You account from  <span>01/08/2021</span> to <span>31/12/2021</span> to have 100% chance of receiving DFY tokens
          </div>

          <div class="reward-btn">
            <button>
              Sign up to get reward
            </button>

            <button class="btn-disable">
              Sign up to get reward
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
  background: url('~assets/img/bg-reward-mobile.png') no-repeat;
  background-position: initial;
  background-size: cover;
  border-radius: 20px;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  max-width: 344px;
  margin: auto;

  @media (min-width: 576px) {
    max-width: 536px;
  }

  @media (min-width: 768px) {
    max-width: 710px;
  }

  @media(min-width: 960px) {
    background-position: center;
    background: url('~assets/img/bg-reward.png') no-repeat;
    height: 476px;
    max-width: 1135px;
  }
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.reward__content {
  margin: 80px 20px 0 20px;

  @media(min-width: 960px) {
    position: absolute;
    top: 100px;
    right: 50px;
    text-align: center;
    max-width: 760px;
    margin-top: 0;
    padding: 0;
  }
}

.reward-title {
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 20px;
  font-family: "Montserrat";
  margin-top: 100px;
  margin-top: 20px;

  @media(min-width: 960px) {
    font-size: 48px;
  }
}

.reward-text {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 54px;
  color: #FFFFFF;
  font-family: "Montserrat";

  @media(min-width: 960px) {
    font-size: 24px;
  }

  span {
    color: #DBA83D;
  }
}

.reward-btn {
  text-align: center;
  button {
    width: 240px;
    height: 40px;
    border: none;
    background: linear-gradient(221.15deg, #EFA727 0%, #FFD87C 49.02%, #FFC43D 62.02%, #EAA326 101.47%);
    border-radius: 30px;
    color: #282C37;
    font-weight: 600;
    font-size: 16px;
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
    display: none;
  }
}
</style>
