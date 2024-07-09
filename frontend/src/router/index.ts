import { createRouter, createWebHistory } from 'vue-router'

import Kurumsal from '../views/Kurumsal.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Navbar from '@/components/Navbar.vue'


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Navbar }
    ]
  },
  { path: '/kurumsal', component: Kurumsal },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router