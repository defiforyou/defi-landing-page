<template>
  <div>
    <div class="label">
      <span>{{ label }}</span>
      <span v-if="required" style="color: red">*</span>
    </div>
    <v-select
      v-model="isValue"
      :items="options"
      :placeholder="placeholder"
      :rules="rules"
      outlined
      :item-text="itemText"
      :item-value="itemValue"
      dense
      color="#F8B017"
      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
      :style="
        $vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'
      "
      dark
      rounded
    >
      <template v-if="custom" #no-data>
        <slot name="no-data" />
      </template>
      <template v-if="custom" #selection="{ item }">
        <slot name="selection" :item="item" />
      </template>
      <template v-if="custom" #item="{ item }">
        <slot name="item" :item="item" />
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'SelectCustom',
  props: {
    options: {
      type: Array,
      default: () => []
      // [{text: 'Key', value: 'value'}]
    },
    itemText: {
      type: String,
      default: 'text'
    },
    itemValue: {
      type: String,
      default: 'value'
    },
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
    custom: {
      type: Boolean,
      default: false
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
  color: #ffffff;
  margin-bottom: 4px;
  height: 21px;
}
</style>
