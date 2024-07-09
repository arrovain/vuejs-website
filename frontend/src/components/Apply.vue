<template>
    <div class="application-form">
      <h1 class="title">ŞUBELİK BAŞVURUSU</h1>
      <p class="subtitle">Anasayfa / ŞUBELİK BAŞVURUSU</p>
  
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Adınız & Soyadınız</label>
          <input id="name" v-model="form.name" type="text" required>
          <span class="error-message">Bu alanın doldurulması gereklidir.</span>
        </div>
  
        <div class="form-group">
          <label for="phone">Telefon</label>
          <input id="phone" v-model="form.phone" type="tel" required>
          <span class="error-message">Bu alanın doldurulması gereklidir.</span>
        </div>
  
        <div class="form-group">
          <label for="city">Şehir</label>
          <input id="city" v-model="form.city" type="text" required>
        </div>
  
        <div class="form-group">
          <label for="experience">Sigortacılık Tecrübeniz Var Mı?</label>
          <select id="experience" v-model="form.experience">
            <option value="">Seçiniz</option>
            <option value="yes">Evet</option>
            <option value="no">Hayır</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="insurance-experience">Sigortacılık Tecrübeniz (Yıl Olarak)</label>
          <input id="insurance-experience" v-model="form.insuranceExperience" type="number">
        </div>
  
        <div class="form-group">
          <label for="additional-info">Eklemek İstedikleriniz Var İse...</label>
          <textarea id="additional-info" v-model="form.additionalInfo"></textarea>
        </div>
  
        <button type="submit">Bayilik Başvurusunu Tamamla</button>
      </form>
  
      <div class="kvkk-info">
        <h2>K.V.K.K</h2>
        <p>Gizliliğiniz bizim için önemlidir. İşbu Aday Gizlilik Bildirimi, iş başvuru ve işe alım süreçleri kapsamında bize sağlamış olduğunuz kişisel verilerinizi, Hercan Sigorta olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında nasıl işlediğimizi açıklamaktadır.</p>
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          phone: '',
          city: '',
          experience: '',
          insuranceExperience: '',
          additionalInfo: ''
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
  .application-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    color: red;
    text-align: center;
  }
  
  .subtitle {
    text-align: center;
    color: #888;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
  }
  
  .error-message {
    color: red;
    font-size: 0.8em;
  }
  
  button {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .kvkk-info {
    margin-top: 40px;
  }
  </style>