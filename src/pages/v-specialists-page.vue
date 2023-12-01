<template>
  <div class="v-specialists-page">
    <div class="specialist-card">
    </div>
    <div class="specialist-card">
    </div>
    <div class="specialist-card">
    </div>
    <div class="specialist-card">
    </div>
    <div class="specialist-card">
    </div>
    <div class="specialist-card">
    </div>
    <div class="specialist-card">
    </div>
    <div class="specialist-card">
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-specialists-page',
  props: {
  }
}
</script>

<style>
.specialist-card{
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
  height: 300px;
  width: 300px;
  background-color: white;
  box-shadow: 3px 3px 10px gray;
}
.specialist-card:hover{
  border: 2px solid #358c21;
  box-shadow: 3px 3px 10px #b9ecad;
}
</style>
