<template>
  <div class="row">
    <form @submit.prevent="onSubmit">
      <div class="greybox">
        <div class="row">
          <div class="inputcol col-lg-3">
            <label v-if="label">{{ label }}</label>
            <span v-if="keep != 0"> มีพื้นที่ {{ keep }}</span>
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
      input: '',
      keep: 0
    }
  },
  watch: {
    'GStore.resultCal': function () {
      this.updateKeepValue()
    }
  },
  methods: {
    onSubmit() {
      if (this.GStore.resultCal != null) {
        if (this.input <= this.keep && this.input != 0) {
          this.keep = this.keep - this.input
          let inputMaterial = {
            name: this.name,
            selected: this.selected,
            input: this.input
          }

          this.$emit('comment-submited', inputMaterial)
          ;(this.name = this.label), (this.selected = ''), (this.input = '')
          CalculateService.calculateMaterial(inputMaterial)
        } else if (this.input > this.keep || this.input == 0) {
          setTimeout(
            () =>
              this.$swal.fire({
                icon: 'error',
                title: 'พื้นที่ไม่เพียงพอ',
                showConfirmButton: false,
                timer: 800
              }),
            300
          )
        }
        setTimeout(() => {
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
        }, 100)
      }
    },
    updateKeepValue() {
      if (this.name == 'ผนังด้านหน้า' && this.GStore.resultCal != null) {
        this.keep = this.GStore.resultCal.front_wall
      }
      if (this.name == 'ผนังด้านซ้าย' && this.GStore.resultCal != null) {
        this.keep = this.GStore.resultCal.left_wall
      }
      if (this.name == 'ผนังด้านขวา' && this.GStore.resultCal != null) {
        this.keep = this.GStore.resultCal.right_wall
      }
      if (this.name == 'ผนังด้านหลัง' && this.GStore.resultCal != null) {
        this.keep = this.GStore.resultCal.behind_wall
      }
      if (this.name == 'พื้น' && this.GStore.resultCal != null) {
        this.keep = this.GStore.resultCal.total_celling_area
      }
      if (this.name == 'เพดาน' && this.GStore.resultCal != null) {
        this.keep = this.GStore.resultCal.total_floor_area
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
