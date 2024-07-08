import { createRouter, createWebHistory } from 'vue-router'
import Institutional from '../components/Institutional.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/Institutional',
      name: 'Institutional',
      component: 'Institutional'
      
      
    }
  ]
})

export default router
