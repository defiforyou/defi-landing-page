<template>
  <v-dialog v-model="show" content-class="dialog-overflow-hidden" width="1123">
    <div v-if="show" class="outSide">
      <div class="btn_remove" @click="show = false">
        <v-icon>
          mdi-close
        </v-icon>
      </div>
      <img v-show="type === TYPE_MODEL.IMAGE" v-lazy="url" alt="" class="image">
      <d-player v-show="type === TYPE_MODEL.VIDEO" ref="dPlayer" :options="options" class="video" />
    </div>
  </v-dialog>
</template>

<script>

const TYPE_MODEL = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
}

export default {
  name: 'PreViewMedia',
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      TYPE_MODEL
    }
  },
  computed: {
    options: {
      get () {
        return {
          video: {
            volume: 1,
            autoPlay: true,
            // url: this.$getIpfs('QmNeNhgeHCYSx5R3qrQwmwrGhxAUKb8v4gtuDc9C6Pw8HV', 1),
            url: this.url
            // pic: imgThumbnailVideo
          }
        }
      }
    },
    show: {
      get () {
        return this.dialog
      },
      set (val) {
        this.$emit('update:dialog', val)
      }
    }
  },
  watch: {
    dialog (newVal) {
      if (newVal) {
        setTimeout(() => {
          const player = this.$refs.dPlayer.dp
          console.log(player)
          player.play()
        }, 0)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.outSide {
  height: 808px;
  width: 1123px;
  position: relative;
  background-color: #1b1d22;
  border: 1px solid #45484f;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }

  .video {
    height: 100%;
  }

  .btn_remove {
    z-index: 1;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 35px;
    background: #D1D1D350;
    box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    i {
      font-size: 24px;
      color: #282C37;
      caret-color: #282C37;
    }
  }
}
@media(max-width: 600px){
  .outSide {
    height: 248px;
    width: 100%;

    .btn_remove {
      top: 10px;
      right: 10px;
      width: 25px;
      height: 25px;
      i{
        font-size: 12px;
      }
    }
  }
}
</style>
