<template>
  <header>
    <div class="top-bar">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="contact-info">
          <button class="btn btn-sm btn-danger">Hemen Başvur!</button>
          
        </div>
      
          <div class="gpp">
            <span>
            <i class="fa fa-envelope"></i> info@hercan.com.tr</span>
          <span><i class="fa fa-phone"></i> +90 (352) 231 43 43</span>
          </div>
        
       
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand" href="#">
          
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#">ANASAYFA</a></li>
            <li class="nav-item"><a class="nav-link" href="#">KURUMSAL</a></li>
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
.imgg{
  width: 20px;
  height: 20px;
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
