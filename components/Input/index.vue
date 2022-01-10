<template>
  <div class="input-card__col">
    <div class="input-card__label">
      {{ label }}
    </div>
    <div class="input-card__field">
      <v-select
        v-if="hasSelect"
        :items="items"
        item-value="value"
        item-text="text"
        dense
        outlined
        color="#F8B017"
        :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
        :style="$vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'"
        dark
        rounded
        append-icon="mdi-chevron-down"
        :class="classSelect"
        :placeholder="placeholderSelect"
        :value="valueGender? valueGender: select"
        @input="onSelect($event)"
      />
      <v-text-field
        v-show="hasText"
        :placeholder="placeholder"
        :rules="rules"
        type="text"
        color="#F8B017"
        outlined
        required
        rounded
        :readonly="readonly"
        dense
        dark
        :suffix="suffix?suffix:''"
        :height="$vuetify.breakpoint.smAndUp ? '44px' : '40px'"
        :class="classInput"
        :style="
          $vuetify.breakpoint.smAndUp ? 'font-size: 16px' : 'font-size: 14px'
        "
        :value="text"
        @input="onInput($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    readonly: {
      type: Boolean,
      default: false
    },
    classSelect: {
      type: String,
      default: ''
    },
    hasSelect: {
      type: Boolean,
      default: false
    },
    hasText: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    valueGender: {
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
    placeholder: {
      type: String,
      default: ''
    },
    placeholderSelect: {
      type: String,
      default: ''
    },
    classInput: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      select: ''
    }
  },
  methods: {
    onInput (event) {
      this.$emit('update:text', event)
    },
    onSelect (event) {
      this.$emit('update:select', event)
    }
  }
}
</script>

<style>
@import "~assets/components/home/_input.scss";
</style>
