<template>
  <div
    class="d-flex flex-column flex-md-row justify-md-space-between"
  >
    <div v-for="item in listInvestor" :key="item.type">
      <div
        class="investor-item rounded-xl pa-5"
        :class="`${item.type < 2 ? 'mb-6' : ''} ${item.type == investorType ? 'active' : ''}`"
        @click="onChangeInvestorType(item.type)"
      >
        <p class="mb-7">
          {{ item.title }}
        </p>
        <img :src="item.img" alt="" class="mb-6">
        <p class="des px-4">
          {{ item.desc }}
        </p>

        <v-btn
          depressed
          dense
          color="#F8B017"
          rounded
          :height="$vuetify.breakpoint.smAndUp ? '48px' : '40px'"
          width="164px"
          class="mt-16 btn-bg-custom"
          @click="onContinue"
        >
          Choose
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
const localName = {
  investor: 'investor',
  term: 'term'
}
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
      investorType: null,
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
      this.investorType = val
    },
    onContinue () {
      this.type = true
      this.setInvestor()
      this.isSelectInvestor = true
    },
    setInvestor () {
      localStorage.setItem(localName.investor, this.investorType)
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
    font-size: 24px;
  }
  .des {
    line-height: 17px;
    font-size: 14px;
    font-weight: 400;
  }

  &.active {
    box-shadow: 0px 0px 0px 5px rgb(219, 168, 61);
  }
}
.btn-bg-custom {
    background: linear-gradient(-0.40turn, #BD8727, #FFD574, #FECA50, #BD8727);
    color: #282C37;
    font-size: 16px;
    border-radius: 1000px;
    &:disabled {
      background: linear-gradient(-0.4turn, #989899, #ffffff, #ffffff, #999999) !important;
    }
  }
@media #{map-get($display-breakpoints, 'md-and-up')} {
  .investor-item {
    height: 480px;
  }
}
</style>
