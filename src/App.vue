<template>
  <div id="app">
    <Slider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Slider from './components/Slider.vue'

export default defineComponent({
  name: 'App',
  components: {
    Slider
  }
})
</script>