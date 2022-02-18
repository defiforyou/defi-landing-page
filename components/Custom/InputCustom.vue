<template>
  <div>
    <div class="label">
      <span>{{ label }}</span>
      <span v-if="required" style="color: red">*</span>
    </div>
    <v-text-field
      v-model="isValue"
      dark
      outlined
      class="v-text-field-custom"
      :placeholder="placeholder"
      required
      :rules="rules"
      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
      :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
    />
  </div>
</template>

<script>
export default {
  name: 'InputCustom',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: null
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isValue: {
      get () { return this.value },
      set (val) { this.$emit('input', val) }
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  margin-bottom: 4px;
  height: 21px;
}
.v-text-field-custom ::v-deep {
  .v-input__slot {
    min-height: 44px !important;
  }
}
</style>
