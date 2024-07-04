<template>
  <div id="app">
    <Navbar/>
    <Slider />
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Slider from './components/Slider.vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Slider,
    Navbar
  }
})
</script>