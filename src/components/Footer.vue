<script>
export default {
  name: "Footer",
};
</script>

<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="logo">
          <span class="logo-text">TERCAN SİGORTA </span><span class="logo-24"></span>
          <span class="logo-slogan">Sigorta Aracılık Hizmetleri</span>
        </div>
        <div class="rights">
          TERCAN SİGORTA © 2024 | Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  </template>

  <style>

  .footer{
    background-color: #e0e0e0;
  }

  .footer-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
.logo{
        display: flex;
        align-items: center;
    }

    .logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #3c3c8c; 
}

.logo-24 {
  font-size: 24px;
  font-weight: bold;
  color: #3c3c8c; 
}

.logo-slogan {
  font-size: 14px;
  margin-left: 10px;
  color: #3c3c8c; 
}

.rights {
  font-size: 14px;
  color: #3c3c8c; 
}

  
    
  </style>

