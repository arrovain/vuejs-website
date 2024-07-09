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
      <transition-group name="slide" tag="div" class="logo-slider">
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
        { id: 1, name: 'quick sigorta', src: './src/assets/quick.jpg' },
        { id: 2, name: 'ankara', src: './src/assets/ankara.png' },
        { id: 4, name: 'AcnTURK', src: './src/assets/corpus.jpg' },
        { id: 5, name: 'aveoon', src: './src/assets/aveon.png' },
        { id: 6, name: 'alianz', src: './src/assets/alianz.jpg' },
        { id: 7, name: 'atlas', src: './src/assets/atlas.png' },
        { id: 8, name: 'arex', src: './src/assets/arex.png' },
        { id: 9, name: 'unico', src: './src/assets/unico.png' },
        { id: 10, name: 'anadolu', src: './src/assets/anadolu.png' },
        { id: 11, name: 'türkiye', src: './src/assets/türkiye.png' },
        { id: 12, name: 'hepiyi', src: './src/assets/hep.png' },
        { id: 13, name: 'koru', src: './src/assets/koru.jpg' },
        { id: 14, name: 'seker', src: './src/assets/seker.png' },
        { id: 15, name: 'orient', src: './src/assets/orient.png' },
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
  background-color: #3f51b5;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
}

.slider-content {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.logo-slider {
  display: flex;
  transition: transform 0.5s ease;
}

.logo-container {
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.logo-image {
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}


</style>
