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
    <div class="imggggg"> <img  src="../assets/eterna.jpg"/></div>
  </template>

  <style>
  .imggggg{
    background-color: black;
    max-width: 12000px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  .footer{
    background-color: black;
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
  color: white; 
}

.logo-24 {
  font-size: 24px;
  font-weight: bold;
  color: white; 
}

.logo-slogan {
  font-size: 14px;
  margin-left: 10px;
  color: white; 
}

.rights {
  font-size: 14px;
  color: white; 
}

  </style>

