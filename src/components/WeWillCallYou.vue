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
    background-color: #f0f0f0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    align-items: center;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    border-radius: 20px;
    unicode-bidi: isolate;

}


</style>