<template>
  <div class="v-about">
    <div class="about-zag">Клиника Здоровья</div>
    <div class="about-content">
        <div class="about-item"><img src="@/images/About.jpg" class="about-img"/></div>
        <div class="about-item">Это многопрофильная клиника с командой профессионалов, специализирующихся на гинекологии, урологии, эндокринологии, терапии, дерматологии, репродукции и планировании семьи. Под чутким надзором нашей команды на свет появился 141 малыш. Из них четыре двойни и одна тройня.Мы знаем все о подготовке к беременности, лечении при невынашивании, бесплодии и с радостью делаем вас красивыми. Стремимся сделать период беременности для каждой пациентки особенным. Обещаем быть лучше для вас!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-about',
  props: {
  }
}
</script>

<style>
.v-about {
    width: 85%;
    height: 500px;
    background-color: white;
    border-radius: 30px;
    margin: auto;
    margin-top: 40px;
    box-shadow: 4px 4px 20px #b9ecad;
}
.about-zag {
    padding-top: 20px;
    margin-left: 20px;
    font-size: 40px;
    color: #358c21;
    font-weight: bold;
}
.about-content{
    margin-left: 40px;
    margin-top: 40px;
    width: 100%;
    height: 300px;
}
.about-item{
    width: 45%;
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    text-align: justify;
    overflow: hidden;
}
.about-img{
    border-radius: 20px;
    width: 80%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}
@media screen and (max-width: 700px) {
    .v-about {
        width: 95%;
        height: 800px;
    }
    .about-content{
        margin: auto;
        width: 100%;
        height: 300px;
    }
    .about-img{
        width: 100%;
        aspect-ratio: 3 / 3;
        object-fit: cover;
    }
    .about-item{
        padding-top: 20px;
        margin: auto;
        display: block;
        width: 80%;
        font-size: 15px;
    }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){
    .about-item{
        font-size: 13px;
    }
    .v-about {
        height: 400px;
    }
}
</style>
