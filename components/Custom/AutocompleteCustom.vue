<template>
  <div>
    <div class="label">
      <span>{{ label }}</span>
      <span v-if="required" style="color: red">*</span>
    </div>
    <v-autocomplete
      v-model="isValue"
      :items="options"
      :placeholder="placeholder"
      rounded
      solo
      class="v-autocomplete-custom"
      filled
      outlined
      dense
      hide-details="auto"
      dark
      required
      :rules="rules"
      :item-text="itemText"
      :item-value="itemValue"
      color="#F8B017"
      :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
      :style="
        $vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'
      "
    >
      <template #no-data>
        <slot name="no-data" />
      </template>
      <template #selection="{ item }">
        <slot name="selection" :item="item" />
      </template>
      <template #item="{ item }">
        <slot name="item" :item="item" />
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'AutoCompleteCustom',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    rules: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    itemText: {
      type: String,
      default: 'text'
    },
    itemValue: {
      type: String,
      default: 'value'
    }
  },
  computed: {
    isValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-autocomplete-custom ::v-deep {
  .v-input__slot {
    background: transparent !important;
    //min-height: 44px !important;
  }
}
.label {
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 4px;
  height: 21px;
}
</style>
