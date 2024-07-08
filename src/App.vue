<template>
  <div id="app">
   
    <Navbar/>
    <HeroSection/>
    <ActionCards/>

    <WeWillCallYou/>
    <PreferredPorducts/>
    <Slider/>
    <News/>
    <Footer/>
    
  </div>
</template>

<script lang="ts">




import { defineComponent } from 'vue'
import News from './components/News.vue'
import Slider from './components/Slider.vue'
import Navbar from './components/Navbar.vue'
import WeWillCallYou from './components/WeWillCallYou.vue'
import ActionCards from "./components/ActionCards.vue"
import PreferredPorducts from './components/PreferredPorducts.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'



export default defineComponent({
  name: 'App',
  components: {
    Slider,
    Navbar,
    HeroSection,
    WeWillCallYou,
    ActionCards,
    PreferredPorducts,
    News,
    Footer,
    

   
    
  }
})
</script>

<style>

body {
  
  margin: 0;
  padding: 0;
}


</style>