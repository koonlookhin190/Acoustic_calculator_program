<template>
  <label v-if="label">{{ label }}</label>
  <select
    class="field productdrop"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($material) => {
        $emit('update:modelValue', $material.target.value)
      }
    }"
  >
    <option
      v-for="option in options"
      :value="option.selected"
      :key="option.id"
      :selected="option.id === modelValue.id"
    >
      {{ option.selected }}
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
      type: [String, Number, Object],
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
.productdrop {
  margin-top: 4.77px;
  width: 200px;
}
</style>
