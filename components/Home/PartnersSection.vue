<template lang="pug">
section.partners
  .container
    //- h2.title Partnership
    .dfy-flex
      .partner(
        v-for="i, k in partners"
        :key="k")
        a(
          :href="i.url"
          :title="i.title"
          target="_blank"
          rel="noopener")
          img.logo(
            :src="i.image"
            :alt="i.title")
</template>

<script>
import { PARTNERS } from '~/settings'

export default {
  computed: {
    partners: () => PARTNERS
  }
}
</script>

<style lang="scss" scoped>
section.partners {
  text-align: center;
  padding: 4em 0 0 0;
  @include media(sm-down) {
    padding: 1em 0 0 0;
  }
  .dfy-flex {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .partner {
    padding: 1em 0;
    text-align: center;
    width: 280px;
    @include media(md) {
      width: 320px;
    }
    > a {
      display: block;
      &:hover {
        .logo {
          filter: grayscale(0) opacity(1);
        }
      }
    }
    .logo {
      max-height: 36px;
      transition: .3s ease-in-out;
      @include media(md) {
        filter: grayscale(.75) opacity(.6);
        max-height: 42px;
      }
    }
  }
}
</style>
