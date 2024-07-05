<template>
  <div class="insurance-app">
 
    <header>
      <div class="logo"> <img class="imgg" src="../assets/logo.jpg"/></div>
      <div class="contact-info">
        <span><i class="fas fa-envelope"></i> info@tercansigorta.net</span>
        <span><i class="fas fa-phone"></i> 0 505 112 78 44</span>
      </div>
      <nav>
        <a href="#" v-for="link in navLinks" :key="link">{{ link }}</a>
        <button class="teklif-al">TEKLİF AL</button>
      </nav>
    </header>

    <div class="main-content">
     
      <div class="blue-bar"></div>

      
      <div class="form-slider-container">
        <div class="form-section">
          <h2>TRAFİK SİGORTASI TEKLİF AL</h2>
          <i class="bi bi-arrows-angle-contract"></i>

          <i class="bi bi-arrows-angle-contract"></i>

          <i class="bi bi-arrows-angle-contract"></i>

          
          <form @submit.prevent="submitForm">
            <div class="form-group" v-for="field in formFields" :key="field.name">
              <label :for="field.name">{{ field.label }}</label>
              <select :id="field.name" v-model="form[field.name]">
                <option value="">{{ field.placeholder }}</option>
              </select>
            </div>
            <button type="submit" class="submit-btn" >Hızlı Teklif Al →</button>
          </form>
        </div>
        <div class="slider-section">
          <img src="../assets/trafic.jpg" alt="Happy Family">
          <div class="overlay-text">Güvenle İzle Mutlu Bir Gelecek</div>
          <div class="slider-controls">
            <button @click="prevSlide" class="slider-btn prev">&lt;</button>
            <button @click="nextSlide" class="slider-btn next">&gt;</button>
          </div>
        </div>
      </div>

    
      <div class="action-cards">
        <div class="card" v-for="card in actionCards" :key="card.title">
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <button :class="card.buttonClass">{{ card.buttonText }}</button>
        </div>
      </div>

  
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Navbar',
      navLinks: ['ANA SAYFA', 'KURUMSAL', 'HİZMETLERİMİZ', 'POLİÇE HATIRLAT', 'İLETİŞİM'],
      form: {},
      formFields: [
        { name: 'brand', label: 'Araç Markası *', placeholder: 'Marka Seçiniz' },
        { name: 'model', label: 'Araç Modeli *', placeholder: 'Model Seçiniz' },
        { name: 'year', label: 'Araç Yılı', placeholder: 'Araç Yılı Seçiniz' },
        { name: 'profession', label: 'Mesleğiniz', placeholder: 'Meslek Seçiniz' }
      ],
      
    }
  },
  methods: {
    submitForm() {
   
    },
    prevSlide() {
  
    },
    nextSlide() {
   
    }
  }
}
</script>

<style scoped>
.insurance-app {
  font-family: Arial, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.imgg{
  color: red;
  max-height: 77px;
  max-width: 77px;
}

.contact-info span {
  margin-right: 20px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: black;
}

.teklif-al {
  background-color: green;
  color: white;
  border: none;
  padding: 5px 10px;
}

.blue-bar {
  height: 10px;
  background-color: blue;
}

.form-slider-container {
  display: flex;
}

.form-section, .slider-section {
  flex: 1;
}

.form-group {
  margin-bottom: 15px;
}

.submit-btn {
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
}

.slider-section {
  position: relative;
}

.slider-section img {
  width: 100%;
  height: auto;
}

.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}

.slider-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}

.action-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card {
  background-color: #666;
  color: white;
  padding: 20px;
  flex: 1;
  margin: 0 10px;
}

.footer-message {
  text-align: center;
  margin-top: 20px;
}

.call-btn {
  background-color: gray;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
}


</style>