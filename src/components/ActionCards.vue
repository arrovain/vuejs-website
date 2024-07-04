<template>
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
        <p>Kampanya ve yeniliklerimizden haberdar olmak ister misiniz...</p>
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
  background-color: #3f51b5;
  padding: 10px;
}




</style>