<template>
    <div class="v-button">
        {{text}}
    </div>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    text: String,
  }
}
</script>

<style>

.v-button{
    background-color: #b9ecad;
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
    cursor: pointer;
    width: 200px;
    height: 40px;
    color: black;
    border-radius: 10px;
    border: 3px solid black;
}

.v-button:hover {
    color: #358c21;
    border: 3px solid #358c21;
}

@media screen and (max-width: 700px) {

}
@media screen and (min-width: 701px) and  (max-width: 1100px){

}
</style>
