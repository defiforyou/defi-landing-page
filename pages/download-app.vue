<template lang="pug">
.download-full
  .container
    .page.page-download
      v-row.row__download
        v-col(cols="12" md="6")
          .page__title
            p You can now use
            span.page__title--gold DeFi For You
            span &nbsp;on Mobile
          p.page__desc Store your assets, request loans, trade NFTs and more with the DeFi For You mobile app.
          .download
            span.label Download:
            .buttons
              .button
                a.button__ios.dfy-button.dfy-button--special(href="https://install.appcenter.ms/users/defi-for-you/apps/defi-for-you-1/distribution_groups/defi" target="_blank")
                  img(src="/img/download_ios.svg" alt="")
                  span IOS
                img.qr_code(src="/img/QR_ios.jpeg" alt="")
              .button
                a.button__android.dfy-button.dfy-button--special(href="https://install.appcenter.ms/users/defi-for-you/apps/defi-for-you/distribution_groups/defi" target="_blank")
                  img(src="/img/download_android.svg" alt="")
                  span Android
                img.qr_code(src="/img/QR_android.jpeg" alt="")
          .instruction
            span.label Instruction:
            .button
              a.button__instruction.dfy-button.dfy-button--special(href="https://docs.google.com/document/d/1VQOSASCCI8aJsWfHAXjZAdkpTQHv9fyiXUryYp1sr_g/edit#" target="_blank")
                img(src="/img/download_instruction.svg" alt="")
                span Instruction
        v-col(cols="12" md="6")
          .screens
            .screen.screen__left
              img(src="/img/download_phone_left.png" alt="")
            .screen.screen__center
              img(src="/img/download_phone_center.png" alt="")
            .screen.screen__right
              img(src="/img/download_phone_right.png" alt="")
      v-row
        v-col(cols="12")
          .content
            span This is a Beta version and not official, the features are not completed and there may be errors during in use. In case of problems contact&nbsp;
            span.page__title--gold tech@defiforyou.uk.
            span &nbsp;The goal of the Beta is to collect feedbacks from users and improve the system, in preparation for the official release.
</template>

<script>
export default {
  head () {
    return {
      title: 'Download App'
    }
  }
}
</script>

<style lang="scss" scoped>
.download-full {
  background-image: url(/img/download_background.png);
  height: 100%;
  width: 100%;
  background-size: cover;
}
.row__download {
  @media screen and (max-width: 959px) {
    flex-direction: column-reverse;
  }
}
.page {
  &-download {
    /* max-width: 1450px; */
    margin-top: 86px;
  }
  color: $white;
  font-family: Montserrat;
  &__title {
    font-weight: bold;
    font-size: 54px;
    line-height: 66px;
    &--gold {
      color: #dca33b;
    }
    @media screen and (max-width: 767px) {
      font-size: 28px;
      line-height: 34px;
    }
  }
  &__desc {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-top: 22px;
    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
}
.label {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-top: 55px;
  margin-bottom: 12px;
  display: inline-block;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: 20px;
  }
}
.buttons {
  display: flex;
  & .button:first-child {
    margin-right: 64px;
  }
  @media screen and (max-width: 767px) {
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    & .button:first-child {
      margin-right: 48px;
    }
  }
}
.instruction {
  & .label {
    margin-top: 35px;
  }
  & .button {
    @media screen and (max-width: 767px) {
      width: 80%;
      margin: 0 auto;
    }
  }
}
.button {
  position: relative;
  &:hover .qr_code {
    display: block;
    animation: fade-in 0.25s;
  }
  & .qr_code {
    position: absolute;
    z-index: 2;
    bottom: -188px;
    width: 79%;
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
  & a {
    background: #dba83d;
    border-radius: 16px;
    width: 170px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & img {
    transform: translateY(-10%);
  }
  & span {
    color: #282c37;
    font-weight: 500;
    font-size: 20px;
    margin-left: 12px;
  }
  &__instruction {
    border: 2px solid #dba83d;
    background: transparent !important;
    & img {
      transform: translateY(0%);
    }
    & span {
      color: #dba83d;
    }
  }
  @media screen and (max-width: 767px) {
    & .qr_code {
      bottom: -133px;
      width: 100%;
    }
    & a {
      width: 120px;
      height: 48px;
    }
    & span {
      font-size: 16px;
    }
    &__instruction {
      & span {
        font-size: 14px;
        margin-left: 4px;
      }
    }
    a:first-child {
    margin-right: 0;
  }
  }
}
.screens {
  display: flex;
  .screen {
    position: relative;
    width: 245px;
    /* height: 486px; */
    & img {
      width: 118%;
      max-width: unset;
    }
    &__center {
      top: 60px;
      right: 32px;
      z-index: 2;
    }
    &__right {
      top: -40px;
      right: 86px;
    }
    @media screen and (max-width: 767px) {
      &__center {
        right: 23px;
        top: 45px;
      }
      &__right {
        right: 58px;
      }
    }
    @media screen and (max-width: 500px) {
      &__center {
        right: 15px;
        top: 45px;
      }
      &__right {
        right: 40px;
      }
    }
  }
}
.content {
  margin-bottom: 60px;
  margin-top: 167px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 30px;
    margin-top: 60px;
  }
}
</style>
