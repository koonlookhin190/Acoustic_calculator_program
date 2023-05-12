<template>
  <form @submit.prevent="onSubmit">
    <div class="greyproductbox">
      <div class="row">
        <div class="inputcol col-lg-3">
          <label v-if="label"> Product {{ label }}</label>
        </div>
        <div class="dropdownlist col-lg-3">
          <BaseSelectVue
            :options="GStore.product"
            v-model="selected"
            required
          />
        </div>
        <div class="materialcolumn col-lg-3">
          <span class="productformtext">Material</span>
          <div v-if="this.name == 'ผนังด้านหน้า'">
            <BaseSelectVue2 :options="GStore.frontWall" v-model="material" />
          </div>
          <div v-if="this.name == 'ผนังด้านซ้าย'">
            <BaseSelectVue2 :options="GStore.leftWall" v-model="material" />
          </div>
          <div v-if="this.name == 'ผนังด้านขวา'">
            <BaseSelectVue2 :options="GStore.rightWall" v-model="material" />
          </div>
          <div v-if="this.name == 'ผนังด้านหลัง'">
            <BaseSelectVue2 :options="GStore.behindWall" v-model="material" />
          </div>
          <div v-if="this.name == 'พื้น'">
            <BaseSelectVue2 :options="GStore.floor" v-model="material" />
          </div>
          <div v-if="this.name == 'เพดาน'">
            <BaseSelectVue2 :options="GStore.ceiling" v-model="material" />
          </div>
        </div>
        <div class="addBox col-lg-3">
          <button class="btn btn-warning">+Add Product</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import BaseSelectVue from '@/components/BaseSelect.vue'
import BaseSelectVue2 from '@/components/BaseSelect2.vue'
import CalculateService from '@/services/CalculateService'
import MaterialService from '@/services/MaterialService'
export default {
  inject: ['GStore'],
  components: {
    BaseSelectVue,
    BaseSelectVue2
  },
  data() {
    return {
      name: this.label,
      selected: '',
      material: ''
    }
  },
  methods: {
    onSubmit() {
      let inputProduct = {
        name: this.name,
        selected: this.selected,
        material: this.material
      }
      console.log(inputProduct)
      CalculateService.calculateProduct(inputProduct)
      this.$emit('comment-submited', inputProduct)
      ;(this.name = this.label), (this.selected = ''), (this.material = '')
      setTimeout(() => {
        if (this.name == 'ผนังด้านหน้า') {
          MaterialService.getProductFrontWall()
        }
        if (this.name == 'ผนังด้านซ้าย') {
          MaterialService.getProductLeftWall()
        }
        if (this.name == 'ผนังด้านขวา') {
          MaterialService.getProductRightWall()
        }
        if (this.name == 'ผนังด้านหลัง') {
          MaterialService.getProductBehindWall()
        }
        if (this.name == 'พื้น') {
          MaterialService.getProductFloor()
        }
        if (this.name == 'เพดาน') {
          MaterialService.getProductCeiling()
        }
      }, 40)
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
.greyproductbox {
  margin: auto;
  width: 75%;
  border: solid;
  padding: 10px;
  background-color: #2a2e34;
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
.productformtext {
  margin-top: 6px;
  margin-right: 5px;
  color: white;
}
.materialcolumn {
  display: inline-flex;
}
@import '~bootstrap/dist/css/bootstrap.css';
</style>
