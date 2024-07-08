<template>
      <div class="image-section">
     
        <div class="overlay-text">Trafik Sigortaları</div>
      </div>
  
     
     <div class="action-cards">
      <div class="card">
        <h3>TIKLA TEKLIF AL</h3>
        <p>Tıklayın size özel tekliflerimizden faydalanın...</p>
        <button class="card-btn green">Teklif Al</button>
      
      </div>
      <div class="card">
        <h3>ARA TEKLIF AL</h3>
        <p>Telefon ile bize her zaman ulaşabilir bilgi alabilirsiniz...</p>
        <button class="card-btn orange">0 505 112 78 44</button>
      </div>
      <div class="card">
        <h3>E-POSTA LISTESI</h3>
        <p>Yeniliklerimizden haberdar olmak ister misiniz?</p>
        <button class="card-btn red">Kaydol</button>
      </div>
    </div>
    
</template>


<script>

export default {
    name: "ActionCards",
    data() {
    return {
      navIcons: ['traffic-light', 'car', 'plane', 'handshake', 'house', 'home', 'deal'],
      form: {
        brand: '',
        model: '',
        year: '',
        profession: ''
      }
    }
  },
  methods: {
    
    submitForm() {
      console.log('Form submitted:', this.form)
    }
  }
}

</script>

<style scoped>

.insurance-app {
  font-family: Arial, sans-serif;
}

.nav-icons {
  display: flex;
  background-color: #474d6b;
  padding: 10px;
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.main-section {
    display: flex;
}
.form-section, .image-section {
  flex: 1;
}

.image-section {
  background-image: url('');
  background-size: cover;
  position: relative;
}


.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
}
.action-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  
}

.card {
    
  color: white;
  background-color: #5a5a5c;
  padding: 20px;
  width: 30%; }

.card-btn {
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}

.green { background-color: #4CAF50; }
.orange { background-color: #FF9800; }
.red { background-color: #F44336; }
 





</style>