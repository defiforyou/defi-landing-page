<template lang="pug">
v-popover(auto-hide v-bind="$attrs")
  slot
  .exchanges(slot="popover")
    ul
      li(
        v-for="i, k in partners"
        v-if="i.exchange"
        :key="k")
        a(
          :href="i.url"
          :title="i.title"
          target="_blank"
          rel="noopener")
          .favicon
            img(:src="i.favicon")
          span.name(v-text="i.name")
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
.exchanges {
  text-align: left;
  min-width: 160px;
  box-sizing: border-box;
  ::v-deep {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 0;
      a {
        display: flex;
        align-items: center;
        padding: .25rem 0;
        .favicon {
          flex: 0 0 24px;
          height: 24px;
          margin-right: .5rem;
          font-size: 0;
        }
        .name {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
