<template>
  <div class="row">
    <form @submit.prevent="onSubmit">
      <div class="productbox">
        <div class="row">
          <label v-if="label">{{ label }}</label>
          <div class="textproductelement">
            <div>
              <span>Material: </span>
              <span>All Area: m²| </span>
              <span> Area of product: </span>
            </div>
            <div class="containForm">
              <span>Product: </span>
              <div>
                <BaseSelectVue
                  :options="GStore.material"
                  v-model="selected"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseSelectVue from '@/components/BaseSelect.vue'
export default {
  inject: ['GStore'],
  components: {
    BaseSelectVue
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.productbox {
  margin: auto;
  width: 75%;
  border: solid;
  padding: 10px;
  background-color: #faf0e6;
}
.textproductelement {
  margin-top: 8px;
  letter-spacing: 0.5px;
  display: inline;
}
.containForm {
  display: inline-flex;
}
</style>
