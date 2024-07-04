<template>
<div id="app">
  <header>
    <div>  <h3> TERCAN SİGORTA </h3></div>
    <div class="contact-row">
    
<img src="https://www.svgrepo.com/show/533200/mail-alt-3.svg" alt="Email" class="icon">
<p class="text">info@tercansigorta.net</p>
</div>
<div class="contact-row">
<img src="https://www.svgrepo.com/show/528451/phone-calling-rounded.svg" alt="Phone" class="icon">
<p class="text">0 505 112 78 44</p>
</div>

    



    <nav>
      <ul class="nav-links">
        <li><a href="#">ANA SAYFA</a></li>
        <li>
          <a href="#">KURUMSAL <i class="dropdown-icon"></i></a>
        </li>
        <li>
          <a href="#">HİZMETLERİMİZ <i class="dropdown-icon"></i></a>
        </li>
        <li><a href="#">POLİÇE HATIRLAT</a></li>
        <li><a href="#">İLETİŞİM</a></li>
        <button class="teklif-al-btn">TEKLİF AL</button>
      </ul>
      
    </nav>
  </header>

  <div class="insurance-section">
    <!-- Navigation icons -->
    <div class="nav-icons">
      <div v-for="icon in navIcons" :key="icon" class="icon">
        <img src="" :alt="icon">
      </div>
    </div>

    <!-- Main content area -->
    <div class="main-content">
      <!-- Form section -->
      <div class="form-section">
        <h2>TRAFIK SIGORTASI TEKLIF AL</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="brand">Araç Markası *</label>
            <select v-model="form.brand" id="brand" required>
              <option value="">Marka Seçiniz</option>
              <!-- Add options here -->
            </select>
          </div>
          <div class="form-group">
            <label for="model">Araç Modeli *</label>
            <select v-model="form.model" id="model" required>
              <option value="">Model Seçiniz</option>
              <!-- Add options here -->
            </select>
          </div>
          <div class="form-group">
            <label for="year">Araç Yılı</label>
            <select v-model="form.year" id="year">
              <option value="">Araç Yılı Seçiniz</option>
              <!-- Add options here -->
            </select>
          </div>
          <div class="form-group">
            <label for="profession">Mesleğiniz</label>
            <select v-model="form.profession" id="profession">
              <option value="">Meslek Seçiniz</option>
              <!-- Add options here -->
            </select>
          </div>
          <button type="submit" class="submit-btn">Hızlı Teklif Al →</button>
        </form>
      </div>

      <!-- Slider section -->
      <div class="slider-section">
        <transition-group name="fade" tag="div">
          <div v-for="(slide, index) in slides" :key="slide.id" v-show="currentSlide === index" class="slide">
            <img :src="slide.image" :alt="slide.alt">
            <div class="overlay-text">{{ slide.text }}</div>
          </div>
        </transition-group>
        <div class="slider-controls">
          <button @click="prevSlide" class="slider-btn prev">&lt;</button>
          <button @click="nextSlide" class="slider-btn next">&gt;</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navIcons: ['traffic-light', 'car', 'plane', 'handshake', 'house', 'home', 'deal'],
      form: {
        brand: '',
        model: '',
        year: '',
        profession: ''
      },
      currentSlide: 0,
      slides: [
        { id: 1, image: 'path/to/family-image.jpg', alt: 'Happy Family', text: 'Güvenle İzle Mutlu Bir Gelecek' },
        // Add more slides as needed
      ]
    }
  },
  methods: {
    
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form)
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    }
  }
}
</script>

<style scoped>
.teklif-al-btn {
  background-color: #00a86b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.nav-links {
    display: flex;
    list-style: none;
  }
  
  .nav-links li {
    margin-right: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
  }
.contact-row {
  display: flex;
  align-items: center;
  gap: 10px; 
}
.text {
  margin: 0; 
}
header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f8f8;
}


.insurance-section {
  font-family: Arial, sans-serif;
}
h3{
  color: red;
}


.nav-icons {
  display: flex;
  background-color: #3f51b5;
  padding: 10px;
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.main-content {
  display: flex;
  height: 400px; /* Adjust as needed */
}

.form-section, .slider-section {
  flex: 1;
}

.form-section {
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group select {
  width: 100%;
  padding: 8px;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.slider-section {
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.slider-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}

.slider-btn {
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

/* Transition effects */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
  
