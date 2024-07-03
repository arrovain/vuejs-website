<template>
    <section id="featured">
      <div class="slider-container">
        <div class="slider" :style="sliderStyle">
          <div v-for="(slide, index) in slides" :key="index" class="slide">
            <img :src="slide.image" :alt="slide.title" />
            <div class="caption">
              <strong>{{ slide.title }}</strong>
              <p>{{ slide.description }}</p>
            </div>
          </div>
        </div>
        <button class="prev" @click="prevSlide">&lt;</button>
        <button class="next" @click="nextSlide">&gt;</button>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  
  import slider1 from '../assets/slider.jpg'
  import slider2 from '../assets/slider2.jpg'
  import slider3 from '../assets/slider3.jpg'
  
  export default defineComponent({
    setup() {
      const slides = [
        { image: slider1, title: 'Slide 1', description: 'Description 1' },
        { image: slider2, title: 'Slide 2', description: 'Description 2' },
        { image: slider3, title: 'Slide 3', description: 'Description 3' },
      ]
  
      const currentIndex = ref(0)
  
      const sliderStyle = computed(() => ({
        transform: `translateX(-${currentIndex.value * 100}%)`
      }))
  
      const nextSlide = () => {
        currentIndex.value = (currentIndex.value + 1) % slides.length
      }
  
      const prevSlide = () => {
        currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
      }
  
      return { slides, sliderStyle, nextSlide, prevSlide }
    }
  })
  </script>
  
  <style scoped>
  .slider-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    flex: 0 0 100%;
    position: relative;
  }
  
  .slide img {
    width: 100%;
    height: auto;
  }
  
  .caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
  
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .prev { left: 10px; }
  .next { right: 10px; }
  </style>