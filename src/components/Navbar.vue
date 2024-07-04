<template>
<div id="app">
    <header>
        <div class="contact-info">
            <span><i class="email-icon"> info@tercansigorta.net </i> </span>
            <span><i class="phone-icon"> 0 505 112 78 44 </i> </span>
        </div>
        
  


      <nav>
        <div class="logo">
          <img src="./assets.logo.png" alt=" Logo">
          <span>Sigorta Aracılık Hizmetleri</span>
        </div>
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
        </ul>
        <button class="teklif-al-btn">TEKLİF AL</button>
      </nav>
    </header>

    <main>
      <div class="slider-container">
        <div class="insurance-types">
          <div v-for="(type, index) in insuranceTypes" :key="index" class="type-icon">
            <img :src="type.icon" :alt="type.name">
          </div>
        </div>

          <div class="content-wrapper"
          >
        <div class="qoute-form">
          <h2>TRAFİK SİGORTASI TEKLİF AL</h2>
          <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label for="car-Brand"> Araç markası </label>
              <select id="carBrand" v-model="carBrand" required>
                <option value="">Marka Seçiniz</option>
              </select>
            </div>
              
              <div class="form-group">
                <label for="carModel">Araç modeli</label>
                <select id="carModel" v-model="carModel" required>
                  <option value="">Model Seçiniz</option>

                </select>
              </div>
              
              <div class="form-group">
                  <label for="profession">Mesleğiniz</label>
                  <select id="profession" v-model="profession">
                    <option value="">Meslek Seçiniz</option>
                   
                  </select>
                </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="carYear" >Araç Yılı</label>
                <select id="carYear" v-model="carYear">
                  <option value="">Araç Yılını Seçiniz</option>
                </select>
              </div>
            </div>
            <button type="submit" class="submit-btn">Hızlı Teklif Al →</button>
          </form>
        </div>
        <div class="slider-image">
            <img src="./assets/slider.jpg" alt="Trafik Sigortaları">
            <div class="slider-caption">Trafik Sigortaları</div>
            <div class="slider-nav">
              <button class="prev"></button>
              <button class="next"></button>


                


        </div>
      </div>

        </div>
      </div>
    </main>

    
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Navbar'
  })
  </script>
  
  <style scoped>
  *{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  nav {
    display: flex;

    align-items: center;
  
    
  }

header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f8f8;
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


.teklif-al-btn {
  background-color: #00a86b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.slider-container{
  position: relative;
}

.insurance-types {
  display: flex;
  background-color: #3f51b5;
  padding: 10px;
}
  </style>