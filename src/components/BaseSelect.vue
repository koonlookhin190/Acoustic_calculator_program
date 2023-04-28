<template>
  <label v-if="label">{{ label }}</label>
  <select
    class="field"
    :value="selectedOption.id"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        const selectedOption = options.find(
          (option) => option.id === parseInt($event.target.value)
        )
        $emit('update:modelValue', selectedOption)
      }
    }"
  >
    <option
      v-for="option in options"
      :value="option.id"
      :key="option.id"
      :selected="option.id === selectedOption.id"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Object,
      default: null
    },
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectedOption() {
      return this.modelValue ? this.modelValue : this.options[0]
    }
  }
}
</script>
