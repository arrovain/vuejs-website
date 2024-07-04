<template>
    <nav>
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo" />
      </div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Navbar'
  })
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f8f8;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
  }
  
  .nav-links li {
    margin-left: 1rem;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
  }
  </style>