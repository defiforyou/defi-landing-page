<template>
  <div class="container py-0">
    <v-row class="dig">
      <v-col cols="12" md="6">
        <div class="dig-title">
          <div>
            Hold DFY tokens
          </div>
          <div>
            Get DIG coins
          </div>
        </div>
        <div class="dig-description">
          DeFi For You is airdropping DIG coins to all holders of DFY tokens. You'll get one DIG for every DFY token you hold. Want more DIG coins? You'll get an extra 50% for all your staked DFY tokens!
        </div>
        <v-btn large color="#F8B017" class="mt-8" @click="redirectDig()">
          DIG Calculation
          <v-icon
            right
            dark
          >
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <img src="~/assets/img/dig/dig.png" alt="">
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    redirectDig () {
      window.location.href = `${process.env.APP_URL}/dig-airdrop`
    }
  }
}
</script>

<style lang="scss" scoped>
.dig {
  font-family: 'Inter';
  &-title {
    font-family: dwm;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 12px;
    line-height: 48px;
    @media (min-width: 960px) {
      font-size: 40px;
      margin-bottom: 24px;
    }
  }

  &-description {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #9FA6B2;
  }
}
</style>
