<template>
  <div class="v-header">
    <router-link to="/"><img src="@/images/logo.png" class="logo"></router-link>
    <div class="nav-bar">
        <router-link to="/">
          <div class="nav-item">
            Главная
          </div>
        </router-link>
        <router-link to="/service-page">
          <div class="nav-item">
            Услуги
          </div>
        </router-link>
        <router-link to="/specialists-page">
          <div class="nav-item">
            Специалисты
          </div>
        </router-link>
        <router-link to="/specialists-page">
          <div class="nav-item">
            Акции
          </div>
        </router-link>
        <div class="nav-item">О клинике</div>
        <router-link to="/contacts-page">
          <div class="nav-item">
            Контакты
          </div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  props: {
  }
}
</script>

<style>
.v-header{
  height: 80px;
  background-color: #b9ecad;
}
.logo {
  cursor: pointer;
  height: 50px;
  margin-left: 80px;
  margin-top: 15px;
}
.nav-bar{
  height: 50px;
  width: 70%;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
}
.nav-item{
  font-weight: 100;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  display: inline-block;
  color: black;
  text-decoration: none;
}
.nav-item:hover{
  color: #358c21;
}

@media screen and (max-width: 700px) {
  .nav-bar{
    display: none;
  }
}
@media screen and (min-width: 701px) and  (max-width: 1100px){
  .nav-bar{
    width: 75%;
  }
  .nav-item{
    font-size: 15px;
  }
  .logo{
    margin-left: 20px;
  }
}
</style>
