<template>
  <q-layout view="lHh Lpr lFf">
    <div class="banner-styles relative-position" >
      <q-header  class="q-pa-md header  absolute text-white" elevated >
      <ToolbarNavigation/>
    </q-header>
    <h1 class="absolute fixed-center  banner-title text-white flex justify-center items-center">بیمه،راه جبران خسارت</h1>
    </div>
    <q-page-container> 
      <router-view />
    </q-page-container>
    <FooterSection/>
  </q-layout>
</template>

<script>
import { defineComponent, } from 'vue'
import ToolbarNavigation from '../components/Header/toolbar-navigation.vue';
import FooterSection from '../components/Footer-Layout/footer-section.vue';


export default defineComponent({
  name: 'MainLayout',
 
  components: {
    ToolbarNavigation,
    FooterSection
  },
})
</script>
<style scoped>
.banner-styles{
  background: url(../assets/banner.png);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 600px;
  opacity:0/80;
}
.banner-title{
  font-weight: 900;
  background-color: #007BFF;
  opacity: 40%;
  width: 100%;
  padding: 10px;
}
.header{
  width: 1280px;
   margin: auto; 
   border-radius: 1000px;
   margin-top:60px;
   background: #CCE4FF;
}
</style>