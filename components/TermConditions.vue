<template>
  <v-dialog
    v-model="show"
    persistent
    width="1324px"
  >
    <v-card
      class="py-6 py-md-11 dialog-term-conditions"
    >
      <div class="title mb-2 mb-md-8 pb-3 pt-4">
        <span v-if="isSelectInvestor">
          DeFi For You Crypto Ethics & Regulation UK
        </span>
        <span v-else>Select your investor type</span>
      </div>
      <div class="content mb-1">
        <div v-if="isSelectInvestor" class="scroll-step2 px-4 px-md-11">
          <term-conditions-content-term-condition />
        </div>
        <div v-else class="scroll px-4 px-md-11">
          <term-conditions-content-investor
            v-model="isSelectInvestor"
          />
        </div>
        <v-checkbox
          v-if="isSelectInvestor"
          v-model="scrollEnd"
          class="pl-md-12 pl-4"
          label="I confirm to have read, understood and accepted the Terms and conditions."
        />
      </div>
      <div class="actions">
        <v-btn
          v-if="isSelectInvestor"
          depressed
          dense
          color="#F8B017"
          rounded
          :height="$vuetify.breakpoint.smAndUp ? '47px' : '40px'"
          width="114px"
          class="btn-bg-custom"
          :disabled="!scrollEnd"
          @click="onIUnderstand"
        >
          Confirm
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
const localName = {
  investor: 'investor',
  term: 'term'
}
export default {
  name: 'TermConditions',
  data () {
    return {
      show: true,
      investorType: null,
      isSelectInvestor: false,
      scrollEnd: false
    }
  },
  mounted () {
    this.checkStatus()
  },
  methods: {
    onIUnderstand () {
      this.setTermCondition()
      this.show = false
    },
    handleScroll (e) {
      const { target } = e
      if (target.scrollTop + target.offsetHeight >= target.scrollHeight - 10) {
        this.scrollEnd = true
      }
    },
    onContinue () {
      this.setInvestor()
      this.isSelectInvestor = true
    },
    checkStatus () {
      if (['0', '1', '2'].includes(this.getInvestor())) {
        this.isSelectInvestor = true
      }
      if (+this.getTermCondition() === 1) {
        this.show = false
      } else {
        this.show = true
      }
    },
    setTermCondition () {
      localStorage.setItem(localName.term, 1)
    },
    getTermCondition () {
      return localStorage.getItem(localName.term)
    },
    setInvestor () {
      localStorage.setItem(localName.investor, this.investorType)
    },
    getInvestor () {
      return localStorage.getItem(localName.investor)
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-term-conditions {
  background: #3D414B !important;

  .title {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  .content {
    position: relative;

    & > ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 30px;
      background: linear-gradient(#3D414B, #3D414B00);
      top: 0;
      left: 0;
    }

    & > ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 30px;
      background: linear-gradient(#3D414B00, #3D414B);
      bottom: 0;
      left: 0;
    }

    .scroll {
      height: 100%;
      padding-top: 30px;
      // padding-bottom: 30px;
      // max-height: 445px;
      // overflow-x: auto;
    }
    .scroll-step2 {
      height: 100%;
      padding-top: 30px;
      // padding-bottom: 30px;
      max-height: 445px;
      overflow-x: auto;
    }
  }

  .actions {
    text-align: center;
  }

  .btn-bg-custom {
    background: linear-gradient(-0.40turn, #BD8727, #FFD574, #FECA50, #BD8727);
    color: #282C37;
    &:disabled {
      background: linear-gradient(-0.4turn, #989899, #ffffff, #ffffff, #999999) !important;
    }
  }
}
@media screen and (min-width: 768px) {
  .dialog-term-conditions {
    .title {
      font-size: 40px !important;
    }
  }
}
@media screen and (max-width: 480px) {
  .scroll-step2 {
    max-height: 300px !important;
    font-size: 12px;
  }
}
</style>
