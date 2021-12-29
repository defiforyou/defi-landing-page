<template>
  <div
    class="d-flex flex-column flex-md-row justify-md-space-between"
  >
    <div v-for="item in listInvestor" :key="item.type">
      <div
        class="investor-item rounded-xl pa-4"
        :class="`${item.type < 2 ? 'mb-6' : ''} ${item.type == type ? 'active' : ''}`"
        @click="onChangeInvestorType(item.type)"
      >
        <p class="mb-5">
          {{ item.title }}
        </p>
        <img :src="item.img" alt="" class="mb-4">
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentInvestor',
  props: {
    value: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      listInvestor: [
        {
          type: 0,
          title: 'Sophisticated investor',
          img: require('~/assets/img/term-conditions/card-1.svg'),
          desc: 'I have sufficient capital, experience and net worth to engage in more advanced crypto opportunities.'
        },
        {
          type: 1,
          title: 'High net worth investor',
          img: require('~/assets/img/term-conditions/card-2.svg'),
          desc: 'I accept that the crypto currency to which all promotions contained within this website may expose me to significant risk of losing any and all money and or property.'
        },
        {
          type: 2,
          title: 'Professional investor',
          img: require('~/assets/img/term-conditions/card-3.svg'),
          desc: 'I possess the experience, knowledge and expertise to make my own investment decisions and properly assess and accept the risks it incurs.'
        }
      ]
    }
  },
  computed: {
    type: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onChangeInvestorType (val) {
      this.type = val
    }
  }
}
</script>

<style lang="scss" scoped>
.investor-item {
  background: #282C37;
  box-sizing: border-box;
  text-align: center;
  max-width: 358px;
  p {
    font-weight: bold;
    font-size: 16px;
  }

  &.active {
    box-shadow: 0px 0px 0px 5px rgb(219, 168, 61);
  }
}
@media #{map-get($display-breakpoints, 'md-and-up')} {
  .investor-item {
    height: 345px;
  }
}
</style>
