<template>
  <div class="preferred-products">
    <h2>En Çok Tercih Edilen Ürünlerimiz</h2>
    <p>Diğer ürünlerimizi görmek için menüden ilgili bölüme tıklayabilirsiniz </p>

    <div class="product-grid">
        <div v-for="product in products" :key="product.name" class="product-item" :style="{backgroundColor: product.color}">
            <i :src="product.icon" :alt="product.name"></i>
            <span>{{ product.name }}</span>            
    </div>
</div>




  </div>
</template>



<script>

export default {
    name: 'PreferredProducts', 
    data() {
        return {
            products: [
        { name: 'Kasko', color: '#3366cc', icon: 'fas fa-car' },
        { name: 'Trafik', color: '#888888', icon: 'fas fa-truck' },
        { name: 'Konut', color: '#28a745', icon: 'fas fa-home'},
        { name: 'Sağlık', color: '#a4c639', icon: 'fas fa-heart' },
        { name: 'Dask', color: '#ffd700', icon: 'fas fa-bolt' },
        { name: 'Seyahat', color: '#ffa500', icon: 'fas fa-briefcase' },
        { name: 'İşyeri', color: '#ff6600', icon: 'fas fa-building' },
        { name: 'Ferdi Kaza', color: '#663399', icon: 'fas fa-car-crash' },
        { name: 'Bireysel Emeklilik', color: '#dc3545', icon: 'fas fa-users' },
        { name: 'Tekne Yat', color: '#c71585', icon: 'fas fa-ship'},
        { name: 'Eczane Paket Sigortası', color: '#8b4513', icon: 'fas fa-stethoscope' },
        { name: 'Tarım Sigortası', color: '#9acd32', icon: 'fas fa-cogs' },
      ]
        }
    }
}
</script>

<style>
.preferred-products {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
}
h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>