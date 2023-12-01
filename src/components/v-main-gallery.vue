<template>
  <swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="@/images/main-gallery/Image1.jpg" class="card-gallery">
      <Button class="route-button" text="Подробнее"/>
    </swiper-slide>
    <swiper-slide><img src="@/images/main-gallery/Image1.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/main-gallery/Image1.jpg" class="card-gallery"></swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  import Button from '@/components/v-button'

  export default {
    name: 'v-card-gallery',
    components: {
      Swiper,
      SwiperSlide,
      Button,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style>
.route-button{
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%,-50%);
}
.card-gallery{
    width: 100%;
    aspect-ratio: 16 / 6;
    object-fit: cover;
}
.swiper-pagination-bullet, .swiper-pagination-bullet-active {
    background-color: #121820;
    width: 13px;
    height:13px;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    color: #121820;
}
.swiper-button-next:hover{
    color: white;
    opacity:0.4;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-prev:after {
    color: #121820;
}
.swiper-button-prev:hover{
    color: white;
    opacity:0.4;
}

@media screen and (max-width: 700px) {
    .card-gallery{
        aspect-ratio: 3 / 3;
        object-fit: cover;
    }
}
</style>
