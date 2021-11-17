<template>
  <section class="hero">
    <!--    <div class="container">-->
    <video playsinline autoplay muted loop class="video-desktop">
      <source :src="videoBackgroundURL" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video class="video-mobile" controls>
      <source :src="videoBackgroundURL" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="container">
      <div class="greeting">
        <h1 class="headline">
          Worlds First Licensed P2P loan platform for NFTs in the real world or the meta world 🌎
        </h1>
        <!--        <div class="preview">-->
        <!--          <div class="video">-->
        <!--            <div class="thumbnail" @click="playing = true">-->
        <!--              <img class="badge" src="/img/badge.youtube.svg" alt="Youtube">-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="description">-->
        <!--            <p>-->
        <!--              DeFi For You.™ is a peer-to-peer crypto lending platform&nbsp;&nbsp;where borrowers can use-->
        <!--              cryptocurrency and NFTs, as well as physical assets as collateral.&nbsp;<strong>DFY</strong>&nbsp;is the-->
        <!--              native token on the platform.-->
        <!--            </p>-->
        <!--          </div>-->
        <!--        </div>-->
        <div class="actions">
          <a v-scroll-to="'#buy-dfy'" class="dfy-button dfy-button--primary">Buy DFY
          </a>
          <a :href="urls.pawn" target="_blank" class="dfy-button dfy-button--outline">Explore PAWN Market
          </a>
        </div>
      </div>
    </div>
    <!--      <div class="canvas">-->
    <!--        <img class="phone" src="/img/hero.phone.png" alt="Phone"><img-->
    <!--          class="token bnb"-->
    <!--          src="/img/token.bnb.png"-->
    <!--          alt="BNB"-->
    <!--        ><img class="token dfy" src="/img/token.dfy.png" alt="DFY"><img-->
    <!--          class="token nfts"-->
    <!--          src="/img/token.nfts.png"-->
    <!--          alt="NFTs"-->
    <!--        ><img class="token btc" src="/img/token.btc.png" alt="BTC">-->
    <!--      </div>-->
    <!--      <div v-if="playing" class="player" @click="playing = false">-->
    <!--        <div class="close" @click="playing = false">-->
    <!--          <x-icon size="48" stroke-width="1" />-->
    <!--        </div>-->
    <!--        <div class="dfy-flex layout">-->
    <!--          <div class="ratio">-->
    <!--            <iframe id="player" type="text/html" width="100%" :src="urls.video" frameborder="0" />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>

<script>
// import { XIcon } from 'vue-feather-icons'
import { PARTNERS, URLS, VIDEO_BACKGROUND } from '~/settings'

export default {
  components: {
    // XIcon
  },

  data () {
    return {
      playing: false
    }
  },

  computed: {
    urls: () => URLS,
    partners: () => PARTNERS,
    videoBackgroundURL: () => VIDEO_BACKGROUND
  }
}
</script>

<style lang="scss" scoped>
.player {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(darken($--color-background-page, 10), .75);
  transform: translate3d(0, 0, 0);
  backdrop-filter: blur(20px);

  .close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 2rem;
  }

  .layout {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 80%;
    @include media(sm-down) {
      width: 100%;
    }

    .ratio {
      width: 100%;
      height: 0;
      padding-top: (100% / 16 * 9);
      position: relative;

      iframe {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

section.hero {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin-top: -88px;

  @include media(sm-down) {
    height: auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    position: relative;
    height: calc(100% - 88px);
    top: 88px;
    @include media(sm-down) {
      top: 0;
    }
  }

  .canvas {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    @include media(xs-only) {
      display: none;
    }
    @include media(sm) {
      right: -120px;
      bottom: -220px;
      width: (840px * .8);
      height: (660px * .8);
    }
    @include media(md) {
      right: -120px;
      bottom: -220px;
      width: (840px * .9);
      height: (660px * .9);
    }
    @include media(lg) {
      width: 840px;
      height: 660px;
      bottom: 0;
    }

    .phone {
      position: absolute;
      width: 100%;
      bottom: -60px;
      animation: floating 16s infinite ease-in-out;
    }

    > .token {
      position: absolute;

      &.bnb {
        width: 18%;
        max-width: 160px;
        left: 18%;
        top: 10%;
        animation: floating 8s infinite ease-in-out reverse;
      }

      &.dfy {
        width: 18%;
        max-width: 160px;
        left: 34%;
        top: 2%;
        animation: floating 9s infinite ease-in-out;
      }

      &.btc {
        width: 20%;
        max-width: 160px;
        right: 16%;
        top: 10%;
        animation: floating 7s infinite ease-in-out reverse;
      }

      &.nfts {
        width: 20%;
        max-width: 160px;
        right: 35%;
        top: 17%;
        animation: floating 10s infinite ease-in-out,
        shine-up .6s infinite ease-in-out;
      }
    }
  }

  .greeting {
    position: absolute;
    z-index: 2;
    padding: 2rem 10px 2rem 0;
    margin-left: auto;
    text-align: right;
    width: 78%;
    bottom: 0;
    right: 0;

    @include media(sm-down) {
      right: 50%;
      transform: translateX(50%);
      text-align: center;
      width: 90%;
      position: relative;
    }

    .headline {
      margin: 0;
      font-size: 2rem;

      @include media(md) {
        background: #F8B017;
        display: inline;
        padding: 4px 4px;
        color: black;
        user-select: none;
      }

      br.xso {
        display: none;
        @include media(xs-only) {
          display: block;
        }
      }

      @include media(sm) {
        font-size: 2.5rem;
      }
    }

    .preview {
      align-items: center;
      margin-top: 1rem;
      @include media(sm) {
        margin-top: 2.5rem;
        display: flex;
      }

      .video {
        cursor: pointer;
        flex: 0 0 168px;

        .thumbnail {
          border-radius: 8px;
          width: 100%;
          height: 0;
          padding-top: 57%;
          background-image: url(/img/preview.introduction.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(white, .05);
          position: relative;

          .badge {
            position: absolute;
            top: 0;
            right: .5em;
          }
        }
      }

      .description {
        flex: 1;
        margin: 1rem 0 0 0;
        @include media(sm) {
          margin: 0 0 0 1.75em;
        }

        p {
          margin: 0;

          strong {
            color: $--color-primary;
          }
        }
      }
    }

    .actions {
      margin: 1rem 0 0 0;
      @include media(sm) {
        margin: 2.5rem 0 0 0;
      }

      > * {
        margin-bottom: .5em;

        &:not(:last-child) {
          margin-right: 1em;
        }
      }
    }
  }
}

.video-desktop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  overflow: hidden;
  bottom: 0;
  right: 0;
  padding-top: 88px;

  @include media(sm-down) {
    display: none;
  }
}

.video-mobile {
  display: none;
  position: relative;
  width: 100%;

  @include media(sm-down) {
    display: block;
  }
}
</style>
