<template>
  <div class="gold-bullion">
    <div class="container">
      <h2 class="text--title" style="align-items: center;">
        GOLD BULLION NFTs
      </h2>
      <div class="dfy-flex layout">
        <div class="text">
          <div v-for="(item, index) in contents" :key="index" style="margin-bottom: 10px;">
            <v-icon
              color="#DBA83D"
            >
              mdi-check
            </v-icon>
            <span class="content">
              {{ item.title }}
            </span>
          </div>
          <div class="second" style="margin-top: 53px;">
            To buy Gold represented by NFTs
          </div>
          <div class="second" style="margin-bottom: 18px;">
            You must first hold DFY in your purchase wallet
          </div>
          <div v-for="(item, index) in holdDfys" :key="index">
            <v-icon
              large
              color="#DBA83D"
              style="margin-left: -10px;"
            >
              mdi-circle-small
            </v-icon>
            <span class="content">
              {{ item.title }}
            </span>
          </div>
          <div class="d-flex" style="margin-top: 21px;">
            <div class="go-here" style="margin-right: 30px;">
              Go here 1<sup>st</sup>
            </div>
            <div class="buy-dfy" style="margin-right: 11px;">
              Buy DFY
            </div>
            <div style="margin-right: 11px;">
              <v-icon
                small
                color="#DBA83D"
                style="margin-top: -5px;"
              >
                mdi-arrow-right
              </v-icon>
            </div>
            <a class="cex" href="https://www.gateio.ch/trade/DFY_USDT" target="_blank">
              Gate.io
            </a>
            <div style="border: 1px solid #FFFFFF; transform: rotate(90deg); width: 16px; height: 0px; margin-top: 11px; margin-right: 6px;" />
            <a class="cex" href="https://www.mexc.com/exchange/DFY_USDT" target="_blank">
              Mexc
            </a>
            <div style="border: 1px solid #FFFFFF; transform: rotate(90deg); width: 16px; height: 0px; margin-top: 11px; margin-right: 6px;" />
            <a class="cex" href="https://pancakeswap.finance/swap#/swap?outputCurrency=0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2" target="_blank">
              Pancake
            </a>
          </div>
          <div class="d-flex justify-center align-center" style="margin-top: 60px;">
            <div class="go-here" style="margin-right: 30px;">
              Go here 2<sup>st</sup>
            </div>
            <v-btn class="gradient-btn" large rounded @click="linkToMarket()">
              Buy Gold NFT
            </v-btn>
          </div>
        </div>

        <div class="right">
          <div class="daily-gold">
            <div class="daily-gold__title">
              Daily Gold Prices
            </div>
            <div class="daily-gold__box">
              <v-row no-gutters style="margin-bottom: 5px;">
                <v-col class="daily-gold__box--title" style="margin-top: 8px;">
                  Weight
                </v-col>
                <v-col class="daily-gold__box--title" style="margin-top: 8px;">
                  Prices/g
                </v-col>
                <v-col class="daily-gold__box--title" style="margin-top: 8px;">
                  Total
                </v-col>
              </v-row>
              <v-row v-for="(item, index) in priceGold" :key="index" no-gutters style="background: #1f222d; border-radius: 10px; height: 35px; margin: 5px">
                <v-col class="daily-gold__box--content" style="margin-top: 5px;">
                  {{ item.weight }}
                </v-col>
                <v-col class="daily-gold__box--content" style="margin-top: 5px;">
                  {{ Math.round((item.priceOfGm + Number.EPSILON) * 100) / 100 }}
                </v-col>
                <v-col class="daily-gold__box--content" style="margin-top: 5px;">
                  {{ Math.round((item.price + Number.EPSILON) * 100) / 100 }}
                </v-col>
              </v-row>
            </div>
          </div>
          <!-- <div class="d-flex" style="margin-top: 30px">
            <img src="~assets/img/preview-video/1.png" style="margin-right: 8px; cursor: pointer;" alt="#" @click="handleShowPreview(item1)">
            <img src="~assets/img/preview-video/2.png" style="margin-left: 8px; cursor: pointer;" alt="#" @click="handleShowPreview(item2)">
          </div> -->
        </div>
      </div>
    </div>
    <PreViewMedia
      :dialog.sync="showPreview"
      :url="dataShowPreview.url"
      :type="dataShowPreview.type"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PreViewMedia from '~/components/Home/PreViewMedia'

export default {
  components: { PreViewMedia },
  data () {
    return {
      contents: [
        {
          title: 'Cookson Gold purchased in bulk by Cotswold Fine Jewellery Group + volted in UK'
        },
        {
          title: 'Insured with T.H March'
        },
        {
          title: 'Guaranteed Buy Back from Cotswold Fine Jewellery Group in USDT/USDC'
        },
        {
          title: 'Free storage'
        },
        {
          title: 'Collection of the physical gold asset (UK only)'
        },
        {
          title: 'Up to 107.5% Buy Back rate based on daily price'
        },
        {
          title: '0% commission on NFT purchase'
        }
      ],
      holdDfys: [
        {
          title: 'Hold 75 USD of DFY - 5g (Up to 104% Buy Back)'
        },
        {
          title: 'Hold 500 USD of DFY - 10g + 20g (Up to 106% Buy Back)'
        },
        {
          title: 'Hold 1000 USD of DFY - 50g + 100g (Up to 107.5% Buy Back)'
        }
      ],
      showPreview: false,
      dataShowPreview: {
        url: '',
        type: ''
      },
      item1: {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'VIDEO'
      },
      item2: {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'VIDEO'
      }
    }
  },
  computed: {
    ...mapState('reward', ['priceGold'])
  },
  methods: {
    handleShowPreview (file) {
      this.dataShowPreview = {
        url: file.url,
        type: file.type
      }
      this.showPreview = true
    },
    linkToMarket () {
      window.location.href = 'https://marketplace.defiforyou.uk/collections/0xd84e196cab681adc97a1aee887b413f3c4ca6f36'
    }
  }
}
</script>

<style lang="scss" scoped>
.daily-gold {
  text-align: center;
  height: 292px;
  background: #33313F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  &__title {
    padding-top: 8px;
    margin-bottom: 8px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    /* Gradient/Gold */

    background: linear-gradient(221.15deg, #BD8727 0%, #FFD574 49.02%, #FECA50 62.02%, #BD8727 101.47%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  &__box {
    height: 237px;
    margin: 7px;

    /* Color/ Neutral/ Black */

    background: #171A23;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    &--title {
      margin-top: 5px;
      margin-bottom: 5px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      text-align: center;

      /* Gold */

      color: #DBA83D;
    }

    &--content {
      font-family: 'Montserrat';
      font-style: normal;
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      text-align: center;

      /* Color/ Neutral/ White */

      color: #FFFFFF;
    }
  }
}
.cex {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;

  /* Gold */

  color: #DBA83D;
  margin-right: 10px;
  cursor: pointer;
}
.buy-dfy {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #DBA83D;
}
.go-here {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #FF4848;
}
.second {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #DBA83D;
}
.content {
  font-family: 'Montserrat' !important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
}
.gold-bullion {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 0;

  @include media(sm-down) {
    padding: 1rem 0;
  }
}

.layout {
  align-items: center;

  > .text {
    width: 70%;
  }

  > .right {
    width: 30%;
  }

  @include media(sm-down) {
    flex-direction: column;
    > .text {
      width: 100%;
      text-align: center;
    }
    > .right {
      margin-top: 30px;
      width: 100%;
      text-align: center;
    }
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;

    background: linear-gradient(180deg, #A0702D 5.85%, #FFD25F 49.81%, #805515 96.61%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: center;

    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
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
