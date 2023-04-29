<template>
  <div class="row">
    <form @submit.prevent="onSubmit">
      <div class="greybox">
        <div class="row">
          <div class="inputcol col-lg-3">
            <label v-if="label">{{ label }}</label>
          </div>
          <div class="col-lg-3">
            <input class="inputbox" type="text" v-model="input" required />
            <span class="msquare">m²</span>
          </div>
          <div class="dropdownlist col-lg-3">
            <BaseSelectVue
              :options="GStore.material"
              v-model="selected"
              required
            />
          </div>
          <div class="addBox col-lg-3">
            <button class="btn btn-warning">+Add materials</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseSelectVue from '@/components/BaseSelect.vue'
import CalculateService from '@/services/CalculateService'
import MaterialService from '@/services/MaterialService'
export default {
  inject: ['GStore'],
  components: {
    BaseSelectVue
  },
  data() {
    return {
      name: this.label,
      selected: '',
      input: ''
    }
  },
  methods: {
    onSubmit() {
      let inputMaterial = {
        name: this.name,
        selected: this.selected,
        input: this.input
      }
      console.log(inputMaterial)
      CalculateService.calculateMaterial(inputMaterial)
      alert('Adding' + ' ' + this.name + ' ' + 'successfully')
      this.$emit('comment-submited', inputMaterial)
      ;(this.name = this.label), (this.selected = ''), (this.input = '')
      if (this.name == 'ผนังด้านหน้า') {
        MaterialService.getFrontWall()
      }
      if (this.name == 'ผนังด้านซ้าย') {
        MaterialService.getLeftWall()
      }
      if (this.name == 'ผนังด้านขวา') {
        MaterialService.getRightWall()
      }
      if (this.name == 'ผนังด้านหลัง') {
        MaterialService.getBehindWall()
      }
      if (this.name == 'พื้น') {
        MaterialService.getFloor()
      }
      if (this.name == 'เพดาน') {
        MaterialService.getCeiling()
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
  background-color: #405b6f;
}
.inputcol {
  margin-top: 8px;
  display: inline-block;
  color: white;
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
  color: white;
}
</style>
