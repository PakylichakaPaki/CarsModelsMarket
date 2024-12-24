<template>
  <nav class="header">
    <div class="nav-container">
      <div class="nav-brand"> <router-link to="/" class="nav-link">CarsModelsMarket</router-link></div>
      <div class="nav-links">
        <router-link to="/models" class="nav-link">Каталог</router-link>
        <router-link to="/contact" class="nav-link">Контакты</router-link>
        <router-link to="/about" class="nav-link">О нас</router-link>
        <router-link to="/" class="nav-link">Главная</router-link>
      </div>
    </div>
    <div class="profile-link"> <router-link to="/profile" class="nav-link">Профиль</router-link> </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const searchQuery = ref('')
</script>


<style scoped>
.header {
  background-color: #4c4c4c;
  color: white;
  padding: 1rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
}
.nav-container{
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3rem;
}
.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.search-box {
  display: flex;
  gap: 0.5rem;
}

.search-input {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  width: 200px;
}
.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: row-reverse;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: none;
}
</style>