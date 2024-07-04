<template>
  <div id="app">
    <Navbar/>
    <Slider />
    <WeWillCallYou/>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Slider from './components/Slider.vue'
import Navbar from './components/Navbar.vue'
import WeWillCallYou from './components/WeWillCallYou.vue'

export default defineComponent({
  name: 'App',
  components: {
    Slider,
    Navbar,
    WeWillCallYou
  }
})
</script>