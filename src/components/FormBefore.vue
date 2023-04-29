<template>
  <div class="row">
    <div>
      <div class="container2 greybox">
        <div class="row">
          <div class="inputcol col-lg-3">
            <label v-if="label">{{ label }}</label>
          </div>
          <div class="msquare col-lg-3">
            <input class="inputbox" type="text" /> m²
          </div>
          <div class="dropdownlist col-lg-3">
            <BaseSelectVue
              :options="GStore.material"
              v-model="materialSet.material1"
            />
          </div>
          <div class="addBox col-lg-3">
            <button class="btn btn-warning">+Add materials</button>
          </div>
        </div>
      </div>
    </div>
    {{ materialSet.material1 }}
    {{ materialSet.material2 }}
    {{ GStore.keep }}
  </div>
</template>

<script>
import BaseSelectVue from '@/components/BaseSelect.vue'
export default {
  inject: ['GStore'],
  components: {
    BaseSelectVue
  },
  data() {
    return {
      materialSet: {
        material1: {},
        material2: {},
        material3: {},
        material4: {},
        material5: {}
      }
    }
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
.greybox {
  margin: auto;
  width: 75%;
  border: solid;
  padding: 10px;
  background-color: #d9d9d9;
}
.inputcol {
  margin-top: 8px;
  display: inline-block;
}
.inputbox {
  background: #faf0e6;
  margin-top: 5px;
  margin-right: 20px;
  width: 50px;
}
.dropdownlist {
  margin-top: 5px;
  width: 100px;
}
.addBox {
  font-weight: bold;
  margin-left: 105px;
  text-align: right;
}
.msquare {
  margin-bottom: 8px;
}
</style>
