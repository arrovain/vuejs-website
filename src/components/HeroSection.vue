<template>
    <section class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-section">
            <h1>Türkiye'nin <span>En Hızlı</span> Büyüyen Sigorta Acentesi</h1>
            <p>Türkiye'nin Sigorta AVM'si Hercan Sigorta Şubesi Olun</p>
            <div class="buttons">
              <button class="btn btn-secondary">Detaylar</button>
              <button class="btn btn-outline-secondary">Şubelik Başvurusu</button>
            </div>
          </div>
          <div class="col-lg-6 image-section">
            <img src="" alt="Insurance Image">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  };
  </script>
  
  <style scoped>
  .hero-section {
    background-color: #c0392b;
    color: white;
    padding: 50px 0;
  }
  
  .text-section h1 {
    font-size: 36px;
    font-weight: bold;
  }
  
  .text-section h1 span {
    color: #e74c3c;
  }
  
  .text-section p {
    font-size: 18px;
    margin: 20px 0;
  }
  
  .buttons .btn {
    margin-right: 10px;
  }
  
  .image-section img {
    width: 100%;
  }
  </style>
  