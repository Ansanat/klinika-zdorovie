<template>
<div class="klinika-app">
  <Header/>
  <router-view />
  <Footer/>
</div>
</template>

<script>
import Header from './components/v-header.vue'
import Footer from './components/v-footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.klinika-app {
  background-color: #f2fcf0;
  font-family: Verdana, sans-serif;
}
</style>
