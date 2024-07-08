<template>
  <div class="slider-container">
    <div class="slider-header">
      <h2>YETKİLİ ACENTELİKLERİMİZ</h2>
      <div class="slider-controls">
        <button @click="prevSlide" class="control-button">&lt;</button>
        <button @click="nextSlide" class="control-button">&gt;</button>
      </div>
    </div>
    <div class="slider-content">
      <transition-group name="slide">
        <div v-for="(logo, index) in visibleLogos" :key="logo.id" class="logo-container">
          <img :src="logo.src" :alt="logo.name" class="logo-image">
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      logos: [
        { id: 1, name: 'emaa sigorta', src: '' },
        { id: 2, name: 'aveon', src: '' },
        { id: 4, name: 'AcnTURK', src: '' },
        { id: 5, name: 'sa', src: '' },
        { id: 6, name: 'COasdRPUS', src: '' },
        { id: 7, name: 'COasdRPUS', src: '' },
       
      ],
      visibleCount: 5
    }
  },
  computed: {
    visibleLogos() {
      return this.logos.slice(this.currentIndex, this.currentIndex + this.visibleCount)
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.logos.length - this.visibleCount) {
        this.currentIndex++
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    }
  }
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px 0;
}

.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
}

h2 {
  color: #fff;
  background-color: #3f51b5;
  padding: 10px 20px;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.slider-controls {
  display: flex;
}

.control-button {
  background-color: #ccc;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
}

.slider-content {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.logo-container {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-image {
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>