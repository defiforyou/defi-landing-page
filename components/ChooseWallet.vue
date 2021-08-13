<template>
  <v-dialog
    v-model="showLocalDialog"
    width="500px"
    @click:outside="$emit('update:show', false)"
  >
    <v-card class="choose-wallet-connet">
      <v-card-title>
        <h3>Wallet integration</h3>
        <v-btn
          class="ml-auto"
          small
          color="shades carbon-4"
          fab
          @click="$emit('update:show', false)"
        >
          <v-icon color="grey grey-10">
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions style="flex-direction: column">
        <v-chip
          class="ma-2 mt-5 wallet"
          color="red red-3"
          label
          :loading="true"
          large
          @click="connectWallet('Metamask')"
        >
          <div v-if="isSigning !== 'Metamask'">
            <img
              src="~/assets/img/wallet/meta-mask.png"
              alt
            >
            Metamask wallet
          </div>
          <div
            v-else
            class="loading"
          >
            <v-progress-circular
              indeterminate
              color="amber"
            />
          </div>
        </v-chip>
        <v-chip
          v-show="$vuetify.breakpoint.smAndUp"
          class="ma-2 wallet"
          color="yellow yellow-4"
          large
          label
          @click="connectWallet('BinanceChain')"
        >
          <div v-if="isSigning !== 'BinanceChain'">
            <img
              src="~/assets/img/wallet/binance.png"
              alt
            >
            Binance wallet
          </div>
          <div
            v-else
            class="loading"
          >
            <v-progress-circular
              indeterminate
              color="amber"
            />
          </div>
        </v-chip>
        <v-chip
          v-show="$vuetify.breakpoint.xsOnly"
          class="ma-2 wallet"
          color="deep-purple lighten-4"
          large
          label
          @click="connectWallet('SafePal')"
        >
          <div v-if="isSigning !== 'SafePal'">
            <img
              src="~/assets/img/wallet/safepal.png"
              alt
            >
            SafePal wallet
          </div>
          <div
            v-else
            class="loading"
          >
            <v-progress-circular
              indeterminate
              color="amber"
            />
          </div>
        </v-chip>
        <v-chip
          v-show="$vuetify.breakpoint.xsOnly"
          class="ma-2 wallet"
          color="blue blue-5"
          large
          label
          @click="connectWallet('TrustWallet')"
        >
          <div v-if="isSigning !== 'TrustWallet'">
            <img
              src="~/assets/img/wallet/trust.png"
              alt
            >
            Trust wallet
          </div>
          <div
            v-else
            class="loading"
          >
            <v-progress-circular
              indeterminate
              color="amber"
            />
          </div>
        </v-chip>
        <v-chip
          v-show="$vuetify.breakpoint.smAndUp"
          class="ma-2 wallet"
          color="grey grey-1"
          large
          label
          @click="connectWallet('WalletConnect')"
        >
          <div v-if="isSigning !== 'WalletConnect'">
            <img
              src="~/assets/img/wallet/wallet-connect.png"
              alt
            >
            Get WalletConnect QR code
          </div>
          <div
            v-else
            class="loading"
          >
            <v-progress-circular
              indeterminate
              color="amber"
            />
          </div>
        </v-chip>
        <div class="note-dashboard-zone">
          <div class="note-dashboard">
            <div>Get WalletConnect QR code</div>
            <div><b>On Desktop</b>: MetaMask, QR code WalletConnect and Binance Chain extensions </div>
            <div><b>On Mobile</b>: Trust, SafePal, MetaMask and WalletConnect support</div>
            <div>Please access our website through browser of the wallet app to connect your wallet to DeFi account.</div>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isSigning: false,
      availableWallet: null
    }
  },

  computed: {
    showLocalDialog: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('update:show', value)
      }
    }
  },

  mounted () {
    const available = []
    if (window.ethereum && window.ethereum.isMetaMask) { available.push('Metamask') }
    if (window.BinanceChain) { available.push('BinanceChain') }
    if (window.ethereum && window.ethereum.isTrust) { available.push('TrustWallet') }
    if (window.ethereum && window.ethereum.isSafePal) { available.push('SafePal') }
    this.availableWallet = available
  },

  methods: {
    async connectWallet (walletName) {
      if (this.availableWallet && this.availableWallet.includes(walletName)) {
        try {
          this.isSigning = walletName
          localStorage.setItem('extensionName', walletName)
          await this.$connectWallet(walletName, false)
          this.isSigning = false
          this.$emit('update:show', false)
        } catch (e) {
          localStorage.removeItem('extensionName')
        }
      } else {
        this.$notify.error({ text: `You need to have the ${walletName} extension first. Please set up or login to your ${walletName} account and connect it to continue.` })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.choose-wallet-connet {
  @media #{map-get($display-breakpoints, 'sm-and-up')}{
    padding: pxToRem(20px) pxToRem(30px)
  }
}
.wallet {
  color: $dark !important;
  width: 100%;
  margin: 0 0 5px 0;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 40px;
      margin-right: 10px;
    }
  }
  .loading {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
