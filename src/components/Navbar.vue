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
          <div v-for="(type, index) in insuranceTypes :key="index" class="type-icon">

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
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f8f8;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
  }
  
  .nav-links li {
    margin-left: 1rem;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
  }
  </style>