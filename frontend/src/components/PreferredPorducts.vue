<template>
  <div class="preferred-products">
    <h2>En Çok Tercih Edilen Ürünlerimiz</h2>
    <p>Diğer ürünlerimizi görmek için menüden ilgili bölüme tıklayabilirsiniz </p>

    <div class="product-grid">
        <i v-for="product in products" :key="product.name" class="product-item" :style="{backgroundColor: product.color}">
            <i :class="product.icon" :alt="product.name"></i>
            <span>{{ product.name }}</span>            
    </i>
</div>




  </div>
</template>




<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



export default {
    name: 'PreferredProducts', 
    data() {
        return {
            products: [
        { name: 'Kasko', color: '#3366cc', icon: 'fa fa-car' },
        { name: 'Trafik', color: '#888888', icon: 'fa fa-truck' },
        { name: 'Konut', color: '#28a745', icon: 'fa-solid fa-building' },
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


<style scoped>
.preferred-products {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto;
}

.product-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  aspect-ratio: 1;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.product-item i {
  font-size: 36px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.product-item span {
  font-weight: bold;
  transition: all 0.3s ease;
}

.product-item::after {
  content: 'Detaylar';
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: #3366cc;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.product-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-item:hover i {
  transform: translateY(-10px);
}

.product-item:hover span {
  opacity: 0;
}

.product-item:hover::after {
  bottom: 20px;
}
</style>
