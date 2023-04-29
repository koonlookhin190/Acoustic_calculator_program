<template>
  <div class="row">
    <form @submit.prevent="onDelete">
      <div class="col-lg-12 boxtest">
        <div class="addelement row">
          <span class="title">{{ info.name }}</span>
          <div class="textelement">
            <span>Material: {{ info.selected }} | </span>
            <span> Input: {{ info.input }}| </span>
            <span> Hz250: {{ info.hz250 }}| </span>
            <span> Hz500: {{ info.hz500 }}| </span>
            <span> Hz1k: {{ info.k1 }}| </span>
            <span> Hz2k: {{ info.k2 }}| </span>
            <span> Hz4k: {{ info.k4 }}| </span>
          </div>
          <button class="removebtn btn btn-danger">Remove</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import MaterialService from '@/services/MaterialService'
export default {
  inject: ['GStore'],
  data() {
    return {
      id: this.info.id,
      name: this.info.name
    }
  },
  methods: {
    onDelete() {
      let deleteInfo = {
        id: this.id,
        name: this.name
      }
      console.log(deleteInfo)
      MaterialService.deleteMaterial(deleteInfo)
      alert('Removing' + ' ' + this.info.name + ' ' + 'successfully')
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
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.boxtest {
  margin: auto;
  width: 75%;
  border: solid;
  padding: 10px;
  background-color: #faf0e6;
}
.textelement {
  margin-top: 8px;
  letter-spacing: 0.5px;
  display: inline;
}
.removebtn {
  margin: 0 auto;
  margin-bottom: 5px;
  width: 10%;
}
</style>
