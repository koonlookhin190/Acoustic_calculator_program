<template>
  <div class="row">
    <div>
      <div class="container2 greybox">
        <div class="row">
          <div class="inputcol col-lg-4">
            <label v-if="label">{{ label }}</label>
            <input class="inputbox" type="text" />
            <BaseSelectVue
              :options="GStore.material"
              v-model="materialSet.material1"
            />
          </div>
          <div class="dropdownlist col-lg-4"></div>
          <div class="col-lg-4">
            <span class="addBox">+ Add materials</span>
          </div>
        </div>
      </div>
    </div>
    {{ materialSet.material1 }}
    {{ materialSet.material2 }}
    {{ GStore.keep }}
    <button @click="calCulate">Presss it</button>
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
  width: 50%;
  border: solid;
  padding: 10px;
  background-color: #d9d9d9;
}
.inputcol {
  display: inline-block;
}
.inputbox {
  margin-top: 5px;
  margin-right: 20px;
  width: 50px;
}
.dropdownlist {
  margin-top: 5px;
  width: 100px;
}
.addBox {
  margin-left: 60px;
}
</style>
