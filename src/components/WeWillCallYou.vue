<template>
    <div class="insurance-banner">
        <div class="banner-content">
        <div class="logo"> <img src="./assets/logo.png" />
    </div>
    <div class="message">
        <h2>Hayatın beklenmedik süprizlerine karşı önlem aldınız mı ?</h2>
        <p>Sigorta Çözümlerimizi inceleyin.</p>
      </div>
    </div>
    <button class="call-button" @click="handleCallRequest">
        
    </button>
      
</template>



<script>
 export default defineComponent({
    name: 'WeWillCallYou'
  })

</script>



<style scoped>

.insurance-banner {
    background-color: #f0f0f0;
}


</style>