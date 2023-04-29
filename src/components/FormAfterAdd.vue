<template>
  <div class="row">
    <div>
      <div class="col-lg-12 boxtest">
        <div class="addelement row">
          <span class="title">ผนังด้านหน้า</span>
          <div class="textelement">
            <span>Material: |</span>
            <span> Input: |</span>
            <span> Hz250: |</span>
            <span> Hz500: |</span>
            <span> Hz1k: |</span>
            <span> Hz2k: |</span>
            <span> Hz4k: |</span>
            <button class="removebtn btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
  margin-left: 90px;
  margin-top: 8px;
  letter-spacing: 0.5px;
  display: inline-flex;
}
.removebtn {
  margin-left: 280px;
  margin-bottom: 5px;
  width: 10%;
}
</style>
