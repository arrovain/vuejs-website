<template>
    <div class="insurance-banner">
        <div class="banner-content">
      
    <div class="message">
        <h2>Tercan Sigorta Aracılık Hizmetleri: Güvenirlik ve Profesyonellik ile 7 Gün 24 Saat Sizin Yanınızdayız</h2>
       
      </div>
    </div>

    <button class="call-button" @click="handleCallRequest">

        <img src="https://www.svgrepo.com/show/506269/phone.svg" alt="phoneicon"/>

        Sizi Arayalım
        

    </button>

    <div class="banner-fold"></div>
    
</div>
      
</template>



<script>
export default {
    name: 'WeWillCallYou',
    methods: {
        handleCallRequest() {
            console.log('tıklandı');
    }
}
}

</script>



<style scoped>



.insurance-banner {
    background-color: #f5f5f5;
    margin-top: 50px;

    padding: 20px 330px;
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    align-items: center;
    border-radius: 10px;
    position: relative;

    

}

.banner-content {
    display: flex;
    align-items: center;

}

.logo img {
  width: 50px;
  height: auto;
  margin-right: 20px;

}

.message h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.message p {
  font-size: 14px;
  margin: 0;
}


.call-button {
  background-color: #808080;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 2;
}

.call-button img {
  width: 20px;
  height: auto;
  margin-right: 10px;
}
.banner-fold {
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 40px;
  height: 40px;
  background-color: white;
  transform: rotate(45deg);
}

</style>