<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-contentt">
        <div class="contact-info">
          <h3>İLETİŞİM BİLGİLERİMİZ</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt"></i> Cumhuriyet Mahallesi,Umut Sk. No 93/9
Melikgazi/Kayseri</li>
            <li><i class="fas fa-phone"></i>  0 505 112 78 44</li>
            <li><i class="fas fa-envelope"></i> info@tercansigorta.net</li>
          </ul>
        </div>
        <div class="branches">
          <h3>BRANŞLARIMIZ</h3>
          <ul>
            <li>Trafik Sigortası</li>
            <li>Seyahat Sigortası</li>
            <li>Dask Sigortası</li>
            <li>İşyeri Sigortası</li>
            <li>Kasko Sigortası</li>
            <li>Tamamlayıcı Sağlık Sigortası</li>
            <li>Konut Sigortası</li>
          </ul>
        </div>
        <div class="social-media">
          <h3> </h3>
          <ul>
            <li><a href="https://www.facebook.com/tercansigorta/?locale=tr_TR"><i class="fab fa-facebook-f"></i></a></li>
            
            <li><a href="https://www.instagram.com/tercansigorta/"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://tr.linkedin.com/company/tercan-sigorta"><i class="fab fa-linkedin-in"></i></a></li>
         
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <img src="../assets/logo.jpg" alt="logo" class="footer-logo">
        <img src="../assets/eterna.jpg" alt="eterna" class="footer-logo">
        <p>TERCAN SİGORTA © 2024 | Tüm hakları saklıdır.</p>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>



.footer {
  display: flex;
  
  color: white;
  background-color: #2d2d2d;
  padding: 20px 0;
  border-top: 1px solid #ccc;
}

.container {
  max-width: 1200px;
  
 
}
.branches{
  margin-left: 99px;
}

.footer-contentt {
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
}

.contact-info, .branches, .social-media {
  flex: 1;
}

.contact-info h3, .branches h3, .social-media h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.contact-info ul, .branches ul, .social-media ul {
  list-style: none;
  padding: 0;
}

.contact-info ul li, .branches ul li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.contact-info ul li i, .branches ul li i {
  margin-right: 10px;
}

.social-media ul {
  display: flex;
  gap: 20px;
  margin-left: 99px;
}

.social-media ul li a {
  color: white;
  
  font-size: 20px;
}

.footer-bottom {

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 10px;
}

.footer-logo {
 
  max-height: 60px;
}

.footer-bottom p {
  font-size: 14px;
}
</style>
