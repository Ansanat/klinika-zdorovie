<template>
  <div class="v-main-page">
    <Gallery/>
    <About/>
    <Services/>
  </div>
</template>

<script>
import Gallery from '@/components/v-main-gallery.vue'
import About from '@/components/v-about.vue'
import Services from '@/components/v-services.vue'

export default {
  name: 'v-main-page',
  components: {
    Gallery,
    About,
    Services
  }
}
</script>

<style>

</style>
