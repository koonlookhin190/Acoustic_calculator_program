<template>
  <div class="container">
    <div class="row">
      <div class="blog col-lg-12">
        <div class="title">
          <h3>วิธีใช้งาน</h3>
        </div>
        <span
          >Hansolution acoustic calculator จะแสดงค่าความก้อง ของห้อง โดยคำนวณ
          จาก ขนาด ความยาว ความกว้าง ความสูงของห้อง <br />
          และวัสดุบนพื้นผิวในแต่ละด้านของห้อง แสดงผลออกมาเป็นกราฟ RT 60
          ในช่วงความถี่ต่างๆ</span
        >
      </div>
      <div class="blog col-lg-12">
        <div class="title2">
          <h3>พื้นที่และปริมาตร</h3>
        </div>
        <span
          >ให้ทำการใส่ขนาด ความกว้าง ควมยาว ความสูง
          ลงไประบบจะทำการคำนวณพื้นที่ผิวในด้านต่างๆ และปริมาตรให้อัตโนมัติ
          <br />
          ในส่วนของประตูและหน้าต่าง สามารถไปเพิ่มในส่วนของ Materials and
          calculation</span
        >
      </div>
    </div>
    <div class="col-lg-12">
      <img src="../assets/figure.png" class="image" />
    </div>

    <div class="row">
      <div class="col-lg-4">
        <Form @submit="submit" :validation-schema="schema">
          <div>
            <div>
              <span class="inputlabel">กว้าง</span>
            </div>
            <Field
              class="inputField"
              type="input"
              name="width"
              placeholder="width"
            />
            <span class="metres">เมตร</span>
          </div>
          <div>
            <div>
              <span class="inputlabel">ยาว</span>
            </div>
            <Field
              class="inputField"
              type="input"
              name="length"
              placeholder="length"
            />
            <span class="metres">เมตร</span>
          </div>
          <div>
            <div>
              <span class="inputlabel">สูง</span>
            </div>
            <Field
              class="inputField"
              type="input"
              name="height"
              placeholder="height"
            />
            <span class="metres">เมตร</span>
          </div>
          <button type="submit" class="button btn btn-secondary">
            Calculate
          </button>
        </Form>
      </div>

      <div class="col-lg-4">
        <div>
          <div>
            <span class="outputLabel">ปริมาณ</span>
          </div>
          <div class="box">
            <div class="resultBox">
              <span v-if="GStore.resultCal != null">
                {{ GStore.resultCal.volume }}
              </span>
            </div>
            <span class="metres">ตารางเมตร</span>
          </div>
        </div>

        <div>
          <div>
            <span class="outputLabel">พื้นที่ชั้นทั้งหมด</span>
          </div>
          <div class="box">
            <div class="resultBox">
              <span v-if="GStore.resultCal != null">
                {{ GStore.resultCal.total_floor_area }}
              </span>
            </div>
            <span class="metres">ตารางเมตร</span>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div>
          <div>
            <span class="outputLabel">พื้นที่ผนังทั้งหมด</span>
          </div>
          <div class="box">
            <div class="resultBox">
              <span v-if="GStore.resultCal != null">
                {{ GStore.resultCal.total_wall_area }}
              </span>
            </div>
            <span class="metres">ตารางเมตร</span>
          </div>
        </div>

        <div>
          <div>
            <span class="outputLabel">พื้นที่เซลล์ทั้งหมด</span>
          </div>
          <div class="box">
            <div class="resultBox">
              <span v-if="GStore.resultCal != null">
                {{ GStore.resultCal.total_celling_area }}
              </span>
            </div>
            <span class="metres">ตารางเมตร</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="blog col-lg-12">
        <div class="title3">
          <h3>วัสดุและการคำนวณ</h3>
        </div>
        <span
          >โปรดเลือกวัสดุในพื้นที่ผิวผนังแต่ละด้านของห้อง
          ในกรณีที่มีหลายวัสดึในหนึ่งด้านให้กดปุ่มเพิ่มเติมเพื่อเลือกวัสดุอื่นในพื้นที่ผิวนั้นๆ<br />
          และใส่ขนาดพื้นที่ของวัสดุนั้นๆ
          ให้ใช้วิธีเดียวกันในนี้ในด้านที่มีประตูและหน้าต่าง</span
        >
      </div>
      <FormBefore label="ผนังด้านหน้า" />
      <FormBefore label="ผนังด้านซ้าย" />
      <FormBefore label="ผนังด้านขวา" />
      <FormBefore label="ผนังด้านหลัง" />
      <FormBefore label="พื้น" />
      <FormBefore label="เพดาน" />
    </div>
  </div>
</template>

<script>
import CalculateService from '@/services/CalculateService.js'
import { Form, Field } from 'vee-validate'
import FormBefore from '@/components/FormBefore.vue'
import * as yup from 'yup'
export default {
  inject: ['GStore'],
  components: {
    Form,
    Field,
    FormBefore
  },
  data() {
    const schema = yup.object().shape({
      width: yup.string(),
      length: yup.string(),
      height: yup.string()
    })
    return {
      schema
    }
  },
  methods: {
    submit(schema) {
      console.log(schema)
      console.log(JSON.stringify(this.material))
      CalculateService.getCalculate(schema)
    }
  }
}
</script>
<style scoped>
.container {
  padding: 20px;
  border-left: solid 1px;
  border-right: solid 1px;
  border-top: solid 1px;
}
h3 {
  color: #fb8b24;
  font-weight: bold;
}
span {
  font-weight: bold;
  font-size: 15px;
}
.blog {
  margin-bottom: 50px;
}
.title {
  margin-right: 1100px;
}
.title2 {
  margin-right: 1000px;
}
.title3 {
  margin-top: 100px;
  margin-right: 1000px;
}
.image {
  width: 600px;
  height: 400px;
}
.metres {
  padding-left: 10px;
}
.inputlabel {
  padding-right: 30px;
}
.box {
  display: inline-flex;
}
.resultBox {
  border: solid;
  width: 200px;
  height: 30px;
  background-color: #fb8b24;
}
.inputField {
  background-color: #faf0e6;
}
.outputLabel {
  padding-right: 70px;
}
.button {
  margin-top: 20px;
  margin-right: 40px;
}
</style>
