<template>
  <div class="container">
    <div class="main-content">
      <v-row v-for="(item, index) in content" :key="index" class="content" align="center" :class="index % 2 ? 'revert' : ''">
        <v-col cols="12" md="6">
          <div class="text-content">
            <div class="title">
              {{ item.title }}
            </div>
            <div v-if="item.subTitle" class="sub-title">
              {{ item.subTitle }}
            </div>
            <div v-if="item.contentType === CONTENT_TYPE.HTML" class="content-text" v-html="item.content" />
            <div v-else class="content-text">
              {{ item.content }}
            </div>
            <div class="action">
              <a class="dfy-button dfy-button--primary">Buy DFY</a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="image-content">
            <img
              :src="item.image"
              alt=""
            >
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
const CONTENT_TYPE = {
  TEXT: 0,
  HTML: 1
}

export default {
  name: 'LoanAgainstNfts',
  data () {
    return {
      CONTENT_TYPE,
      content: [
        {
          title: 'Digital Asset Shops',
          subTitle: null,
          content:
            '<span>Find items of your choice in one of the Digital Asset shops,here you can buy,sell or loan against your purchase.All goods on display are attached to NFTs which are recorded on the blockchain and the physical assets are kept in safe storage with one of our trusted partners in fully licensed premises. <br> If the physical assets are collected by the owner it would require a newly minted NFT and validation.</span>',
          contentType: CONTENT_TYPE.HTML,
          link: '',
          image: require('@/assets/img/loan-asignst-nfts/image-content-1.svg')
        },
        {
          title: 'Hard NFT',
          subTitle: '(NFT attached to a physical asset)',
          content:
            '<span>Discover a whole new concept where physical assets are attached to NFT,s <br> like gold,diamonds,art or even vacations to name just a few.</span>',
          contentType: CONTENT_TYPE.HTML,
          link: '',
          image: require('@/assets/img/loan-asignst-nfts/image-content-2.svg')
        },
        {
          title: 'Soft NFT',
          subTitle: '(Traditional NFT)',
          content: 'Explore the marketplace,collect,sell or loan against your NFT',
          contentType: CONTENT_TYPE.TEXT,
          link: '',
          image: require('@/assets/img/loan-asignst-nfts/image-content-3.svg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'MyWebFont';
  src: url('@/assets/font/DrukWide-Medium.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@media (min-width: 1904px) {
  .container {
    max-width: 1400px !important;
  }
}

.main-content {
  .content {
    margin: 56px 0;
    .text-content {
      max-width: 535px;

      .title {
        font-weight: 500;
        font-size: 40px;
        margin-bottom: 20px;
        color: #fff;
        font-family: 'MyWebFont';
        line-height: 1;
      }

      .sub-title {
        font-weight: 500;
        font-size: 24px;
        color: #fff;
        margin-bottom: 20px;
        font-family: 'MyWebFont';
      }

      .content-text {
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 32px;
        text-align: justify;
      }
    }
    .image-content {
      text-align: right;
    }
  }
  .content.revert {
    flex-direction: row-reverse;
    .text-content, .content-text {
      text-align: right;
    }
    .text-content {
      margin-left:  auto;
    }
    .image-content {
      text-align: left;
    }
  }
}
</style>
