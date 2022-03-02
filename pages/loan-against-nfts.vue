<template>
  <div class="container loan-against-nfts">
    <div class="main-content">
      <div class="page-title">
        Keep your physical assets in safe storage and receive a stable coin loan
      </div>
      <div class="diagram">
        <img v-if="$vuetify.breakpoint.mdAndUp" src="@/assets/img/loan-asignst-nfts/digram.svg" alt="">
        <img v-else src="@/assets/img/loan-asignst-nfts/digram-mobile.svg" alt="">
      </div>
      <div class="page-subtitle">
        Select your NFT and use as collateral for a loan
      </div>
      <div class="action">
        <a
          class="submit dfy-button dfy-button--primary btn-upload"
          href="https://app.defiforyou.uk/pawn/nft-offer?page=0&size=10"
          target="_blank"
        >
          Select now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoanAgainstNfts'
}
</script>

<style lang="scss">
@font-face {
  font-family: "DrukWide";
  src: url("@/assets/font/DrukWide-Medium.ttf") format("truetype"); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}

@media (min-width: 1904px) {
  .container {
    max-width: 1400px !important;
  }
}

.loan-against-nfts {
  padding-top: 39px;

  .page-title {
    font-family: "DrukWide";
    font-weight: 500;
    text-align: center;
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1;
    padding: 0px 235px;
  }

  .diagram {
    text-align: center;
    width: 100%;
    margin-bottom: 45px;

    img {
      width: 70%;
      height: auto;
    }
  }

  .page-subtitle {
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
    font-family: "DrukWide";
    text-align: center;
    margin-bottom: 24px;
  }

  .action {
    width: 100%;
    text-align: center;

    .btn-upload {
      color: #282c37;
    }
  }

  @include media(sm-down) {
    padding-top: 16px;
    .page-title, .page-subtitle {
      font-size: 14px;
      margin-bottom: 26px;
      padding: 0;
    }
    .diagram {
      margin-bottom: 26px;
    }
  }
}
</style>
