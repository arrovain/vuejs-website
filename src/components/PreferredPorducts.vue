<template>
  <div class="preferred-products">
    <h2>En Çok Tercih Edilen Ürünlerimiz</h2>
    <p>Diğer ürünlerimizi görmek için menüden ilgili bölüme tıklayabilirsiniz </p>

    <div class="product-grid">
        <div v-for="product in products" :key="product.name" class="product-item" :style="{backgroundColor: product.color}">
            <img :src="product.icon" :alt="product.name">
            <span>{{ product.name }}</span>            
    </div>





  </div>
</template>



<script>

export default {
    name: 'PreferredProducts', 
    data() {
        return {
            products: [
        { name: 'Kasko', color: '#3366cc', icon: '' },
        { name: 'Trafik', color: '#888888', icon: '' },
        { name: 'Konut', color: '#28a745', icon: ''},
        { name: 'Sağlık', color: '#a4c639', icon: '' },
        { name: 'Dask', color: '#ffd700', icon: '' },
        { name: 'Seyahat', color: '#ffa500', icon: '' },
        { name: 'İşyeri', color: '#ff6600', icon: '' },
        { name: 'Ferdi Kaza', color: '#663399', icon: '' },
        { name: 'Bireysel Emeklilik', color: '#dc3545', icon: '' },
        { name: 'Tekne Yat', color: '#c71585', icon: ''},
        { name: 'Eczane Paket Sigortası', color: '#8b4513', icon: '' },
        { name: 'Tarım Sigortası', color: '#9acd32', icon: '' },
      ]
        }
    }
}
</script>