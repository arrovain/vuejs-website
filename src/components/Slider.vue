<template>
  <div class="slider-container">
    <h2>YETKİLİ ACENTELİKLERİMİZ</h2>
    <carousel :per-page="3" :navigation-enabled="true">
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="slider-image" />
      </slide>
    </carousel>
  </div>
</template>


<script>


import {Carousel, Slide} from 'vue-carousel'

export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide
  },

}
</script>
