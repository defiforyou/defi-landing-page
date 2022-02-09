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
              <a class="dfy-button dfy-button--primary" :href="item.link" target="_blank">Explore Now</a>
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
          title: 'Hard NFT Shops',
          subTitle: '(Collections of Physical Asset NFTs)',
          content:
            '<span>Buy physical assets like gold and silver via NFTs, stored and insured with our trusted partners. Collect your items in-store by showing the NFT, or use the NFT as collateral for an asset-based loan.</span>',
          contentType: CONTENT_TYPE.HTML,
          link: 'https://marketplace.defiforyou.uk/nft/search?nft_type=1',
          image: require('@/assets/img/loan-asignst-nfts/image-content-2.svg')
        },
        {
          title: 'All Hard NFTs',
          subTitle: '(NFTs Attached to a Physical Asset)',
          content:
            '<span>Discover a new breed of NFTs backed by physical assets like gold, silver, diamonds, and other commodities. Diversify your portfolio and hedge against volatility</span>',
          contentType: CONTENT_TYPE.HTML,
          link: 'https://marketplace.defiforyou.uk/nft/search?nft_type=0',
          image: require('@/assets/img/loan-asignst-nfts/image-content-3.svg')
        },
        {
          title: 'NFT Marketplace',
          subTitle: '(Digital NFTs and Collectibles)',
          content: 'Explore the NFT marketplace and find non-fungible tokens including digital art, gaming add-ons, rare collectibles and more. You can even create your own NFTs and upload them to the marketplace!',
          contentType: CONTENT_TYPE.TEXT,
          link: 'https://app.defiforyou.uk/pawn/pawnshop-all',
          image: require('@/assets/img/loan-asignst-nfts/image-content-1.svg')
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
        font-size: 20px;
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
