<template>
  <section id="first" class="howtouse">
    <div class="container">
      <div class="row">
        <div class="blog col-lg-12 animate__animated animate__fadeInUp">
          <div class="title">
            <h3>วิธีใช้งาน</h3>
          </div>
          <div class="howtousetext">
            <span
              >Hansolution acoustic calculator จะแสดงค่าความก้อง ของห้อง
              โดยคำนวณ จาก ขนาด ความยาว ความกว้าง ความสูงของห้อง <br />
              และวัสดุบนพื้นผิวในแต่ละด้านของห้อง แสดงผลออกมาเป็นกราฟ RT 60
              ในช่วงความถี่ต่างๆ</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="areacalculate">
    <div class="container">
      <div class="title2">
        <h3>พื้นที่และปริมาตร</h3>
      </div>
      <div class="calculatetext">
        <div class="blog pttext col-lg-12 animate__animated animate__fadeInUp">
          <span
            >ให้ทำการใส่ขนาด ความกว้าง ควมยาว ความสูง
            ลงไประบบจะทำการคำนวณพื้นที่ผิวในด้านต่างๆ และปริมาตรให้อัตโนมัติ
            <br />
            ในส่วนของประตูและหน้าต่าง สามารถไปเพิ่มในส่วนของ Materials and
            calculation</span
          >
          <div class="ptdiv">
            <div class="pt"></div>
          </div>
        </div>

        <div class="col-lg-12">
          <img src="../assets/figure1.png" class="image" />
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
              <button type="submit" class="button btn">Calculate</button>
            </Form>
          </div>

          <div class="col-lg-4">
            <div>
              <div>
                <span class="outputLabel">ปริมาตร</span>
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
            <div>
              <div>
                <span class="outputLabel">พื้นที่ผนังด้านซ้าย</span>
              </div>
              <div class="box">
                <div class="resultBox">
                  <span v-if="GStore.resultCal != null">
                    {{ GStore.resultCal.left_wall }}
                  </span>
                </div>
                <span class="metres">ตารางเมตร</span>
              </div>
            </div>
            <div>
              <div>
                <span class="outputLabel">พื้นที่ผนังด้านหน้า</span>
              </div>
              <div class="box">
                <div class="resultBox">
                  <span v-if="GStore.resultCal != null">
                    {{ GStore.resultCal.front_wall }}
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
            <div>
              <div>
                <span class="outputLabel">พื้นที่ผนังด้านขวา</span>
              </div>
              <div class="box">
                <div class="resultBox">
                  <span v-if="GStore.resultCal != null">
                    {{ GStore.resultCal.right_wall }}
                  </span>
                </div>
                <span class="metres">ตารางเมตร</span>
              </div>
            </div>
            <div>
              <div>
                <span class="outputLabel">พื้นที่ผนังด้านหลัง</span>
              </div>
              <div class="box">
                <div class="resultBox">
                  <span v-if="GStore.resultCal != null">
                    {{ GStore.resultCal.behind_wall }}
                  </span>
                </div>
                <span class="metres">ตารางเมตร</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="blog col-lg-12">
          <div class="title3">
            <h3>วัสดุและการคำนวณ</h3>
          </div>
          <div class="calgr">
            <span
              >โปรดเลือกวัสดุในพื้นที่ผิวผนังแต่ละด้านของห้อง
              ในกรณีที่มีหลายวัสดึในหนึ่งด้านให้กดปุ่มเพิ่มเติมเพื่อเลือกวัสดุอื่นในพื้นที่ผิวนั้นๆ<br />
              และใส่ขนาดพื้นที่ของวัสดุนั้นๆ
              ให้ใช้วิธีเดียวกันในนี้ในด้านที่มีประตูและหน้าต่าง</span
            >
          </div>
        </div>
        <FormBefore label="ผนังด้านหน้า" />
        <FormAfterAdd
          v-for="info in GStore.frontWall"
          :key="info.id"
          :info="info"
        />
        <FormBefore label="ผนังด้านซ้าย" />
        <FormAfterAdd
          v-for="info in GStore.leftWall"
          :key="info.id"
          :info="info"
        />
        <FormBefore label="ผนังด้านขวา" />
        <FormAfterAdd
          v-for="info in GStore.rightWall"
          :key="info.id"
          :info="info"
        />
        <FormBefore label="ผนังด้านหลัง" />
        <FormAfterAdd
          v-for="info in GStore.behindWall"
          :key="info.id"
          :info="info"
        />
        <FormBefore label="พื้น" />
        <FormAfterAdd
          v-for="info in GStore.floor"
          :key="info.id"
          :info="info"
        />
        <FormBefore label="เพดาน" />
        <FormAfterAdd
          v-for="info in GStore.ceiling"
          :key="info.id"
          :info="info"
        />
        <button class="beforert60cal" @click="calculateRt">Calculate</button>
        <div>
          <div class="hzelement_bf" v-if="GStore.graphBefore != null">
            <span style="color: #ffb703">RT60 Value before improve | </span>
            <span> @250 Hz : {{ GStore.graphBefore.at250 }}</span>
            <span> @500 Hz :{{ GStore.graphBefore.at500 }}</span>
            <span> @1k Hz :{{ GStore.graphBefore.atK1 }}</span>
            <span> @2k Hz :{{ GStore.graphBefore.atK2 }}</span>
            <span> @4k Hz :{{ GStore.graphBefore.atK4 }}</span>
          </div>
        </div>
      </div>

      <div v-if="GStore.graphBefore != null" class="graph">
        <BarChart />
      </div>
      <div v-if="GStore.graphBefore != null">
        <div>
          <ProductForm label="ผนังด้านหน้า" />
          <FormAfterAddPro
            v-for="info in GStore.productfrontWall"
            :key="info.id"
            :info="info"
          />
          <ProductForm label="ผนังด้านซ้าย" />
          <FormAfterAddPro
            v-for="info in GStore.productleftWall"
            :key="info.id"
            :info="info"
          />
          <ProductForm label="ผนังด้านขวา" />
          <FormAfterAddPro
            v-for="info in GStore.productrightWall"
            :key="info.id"
            :info="info"
          />
          <ProductForm label="ผนังด้านหลัง" />
          <FormAfterAddPro
            v-for="info in GStore.productbehindWall"
            :key="info.id"
            :info="info"
          />
          <ProductForm label="พื้น" />
          <FormAfterAddPro
            v-for="info in GStore.productfloor"
            :key="info.id"
            :info="info"
          />
          <ProductForm label="เพดาน" />
          <FormAfterAddPro
            v-for="info in GStore.productceiling"
            :key="info.id"
            :info="info"
          />
        </div>
        <button class="beforert60cal" @click="calculateUpdate">
          Calculate
        </button>
        <div>
          <div class="hzelement_bf" v-if="GStore.graphAfter != null">
            <span style="color: #ffb703">RT60 Value after improve | </span>
            <span> 250 Hz : {{ GStore.graphAfter.at250 }}</span>
            <span> 500 Hz :{{ GStore.graphAfter.at500 }}</span>
            <span> 1k Hz :{{ GStore.graphAfter.atK1 }}</span>
            <span> 2k Hz :{{ GStore.graphAfter.atK2 }}</span>
            <span> 4k Hz :{{ GStore.graphAfter.atK4 }}</span>
          </div>
        </div>
        <div v-if="GStore.graphAfter != null" class="graph">
          <BarChart2 />
        </div>
      </div>
    </div>
  </section>
  <section class="footer">
    <div>
      <span>Hans Solution</span>
    </div>
  </section>
</template>

<script>
import CalculateService from '@/services/CalculateService.js'
import { Form, Field } from 'vee-validate'
import FormBefore from '@/components/FormBefore.vue'
import FormAfterAdd from '@/components/FormAfterAdd.vue'
import FormAfterAddPro from '@/components/FromAfterAddPro.vue'
import * as yup from 'yup'
import ProductForm from '@/components/ProductForm.vue'
import GStore from '@/store'
import BarChart from '@/components/LineChart.vue'
import BarChart2 from '@/components/LineChart2.vue'
export default {
  inject: ['GStore'],
  components: {
    Form,
    Field,
    FormBefore,
    FormAfterAdd,
    FormAfterAddPro,
    ProductForm,
    BarChart,
    BarChart2
  },
  data() {
    const schema = yup.object().shape({
      width: yup.string(),
      length: yup.string(),
      height: yup.string()
    })
    return {
      schema,
      chartKey: 0
    }
  },
  methods: {
    submit(schema) {
      console.log(schema)
      console.log(JSON.stringify(this.material))
      CalculateService.getCalculate(schema)
    },
    calculateRt() {
      let calR = {
        volume: GStore.resultCal.volume
      }
      console.log(calR)
      CalculateService.getCalculateR(calR)
      this.chartKey += 1
    },
    calculateUpdate() {
      let calUp = {
        volume: GStore.resultCal.volume
      }
      console.log(calUp)
      CalculateService.getCalculateUpdate(calUp)
      this.chartKey += 1
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');

.container {
  padding: 20px;
  font-family: 'Kanit', sans-serif;
}
h3 {
  color: #f4a301;
  font-weight: bold;
  text-shadow: 3px 2px black;
}
span {
  font-weight: bold;
  font-size: 15px;
}
.blog {
  margin-bottom: 30px;
}
.title {
  margin-right: 1100px;
}
.title2 {
  margin-top: 50px;
  margin-right: 1000px;
}
.title3 {
  margin-top: 100px;
  margin-right: 1000px;
}
.image {
  margin-bottom: 10px;
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
  background-color: #f4a301;
  border-radius: 25px;
}
.inputField {
  border-radius: 25px;
  background-color: #f3f2fc;
  text-align: center;
  box-shadow: 5px 5px 0px #000000;
}
.inputField::placeholder {
  text-align: center;
}
.outputLabel {
  margin-top: 20px;
  padding-right: 70px;
}
.button {
  padding: 0.75rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  background: #f4a301;
  border: 3px solid #121212;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 5px 5px 0px #000000;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-right: 45px;
}
.beforert60cal {
  padding: 1rem 2.7rem;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: #f4a301;
  border: 3px solid #121212;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 5px 5px 0px #000000;
  width: 15%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.areacalculate {
  background-color: #3a3f46;
}
.howtouse {
  padding-top: 50px;
  padding-bottom: 25px;
  background-color: #2a2e34;
}
.howtousetext {
  padding-top: 20px;
  padding-bottom: 20px;
  border: solid;
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 5px 5px 0px #000000;
}
.calculatetext {
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: solid;
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 5px 5px 0px #000000;
}
.pt {
  padding-top: 5%;
  border-bottom: solid 2px;
}
.ptdiv {
  padding-left: 120px;
  width: 90%;
}
.pttext {
  margin-top: 30px;
}
.calgr {
  padding-top: 20px;
  padding-bottom: 20px;
  border: solid;
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 5px 5px 0px #000000;
}
.hzelement_bf {
  background: white;
  border: solid;
  width: 48%;
  margin-left: 325px;
}
.footer {
  color: white;
  background-color: black;
  padding-bottom: 10px;
}
@import 'animate.css';
</style>
