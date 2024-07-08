<template>
  <header>
    <div class="top-bar">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="contact-info">
          <button class="btn btn-sm btn-danger">Hemen Başvur!</button>
          
        </div>
      
          <div class="gpp">
            <span>
            <i class="fa fa-envelope"></i> info@tercansigorta.net</span>
          <span><i class="fa fa-phone"></i> 0 505 112 78 443</span>
          </div>
        
       
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
       
        
        <div > <img class="imggggg" src="../assets/logo.jpg" alt=""></div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#">ANASAYFA</a></li>
            <li class="nav-item"><a class="nav-link" href="/">KURUMSAL</a></li>
            <li class="nav-item"><a class="nav-link" href="#">ÜRÜNLER</a></li>
            <li class="nav-item"><a class="nav-link" href="#">ŞUBELİK BAŞVURUSU</a></li>
            <li class="nav-item"><a class="nav-link" href="#">KARİYER</a></li>
            <li class="nav-item"><a class="nav-link" href="#">İLETİŞİM</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>


.gpp{
  display: flex;
  gap: 2rem;
}
.imggggg{
  max-height: 60px;


}

.top-bar {
  background-color: #f8f8f8;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.navbar-brand{
  width: 222px;
  height: 50px;
}
.contact-info span {
  margin-right: 15px;
  color: #666;
}

.contact-info span i {
  margin-right: 5px;
}

.navbar-nav .nav-link {
  color: #333;
}

.navbar-nav .nav-link:hover {
  color: #d9534f;
}

.btn-danger {
  background-color: #d9534f;
  border-color: #d9534f;
}
</style>
