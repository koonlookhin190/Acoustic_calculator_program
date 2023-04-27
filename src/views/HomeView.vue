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
        <form id="">
          <div>
            <div>
              <span class="inputlabel">กว้าง</span>
            </div>
            <input class="inputbar" type="text" id="width" />
            <span class="metres">เมตร</span>
          </div>
          <div>
            <div>
              <span class="inputlabel">ยาว</span>
            </div>
            <input class="inputbar" type="text" id="lenght" />
            <span class="metres">เมตร</span>
          </div>
          <div>
            <div>
              <span class="inputlabel">สูง</span>
            </div>
            <input class="inputbar" type="text" id="height" />
            <span class="metres">เมตร</span>
          </div>
        </form>
      </div>

      <div class="col-lg-4">
        <div>
          <div>
            <span>ปริมาณ</span>
          </div>
          <span class="metres">เมตร</span>
        </div>

        <div>
          <div>
            <span>พื้นที่ชั้นทั้งหมด</span>
          </div>
          <span class="metres">เมตร</span>
        </div>
      </div>
      <div class="col-lg-4">
        <div>
          <div>
            <span>พื้นที่ผนังทั้งหมด</span>
          </div>
          <span class="metres">เมตร</span>
        </div>

        <div>
          <div>
            <span>พื้นที่เซลล์ทั้งหมด</span>
          </div>
          <span class="metres">เมตร</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>
