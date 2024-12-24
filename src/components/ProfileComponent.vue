<template>
  <div class="profile-container">
    <div class="profile-header">
      <div class="profile-info">
        <h2>Иван Иванов</h2>
        <p>ivan@example.com</p>
      </div>
    </div>

    <div class="profile-content">
      <div class="profile-section">
        <h3>Личные данные</h3>
        <div class="form-group">
          <label>Имя:</label>
          <input type="text" v-model="userData.name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" v-model="userData.email">
        </div>
        <div class="form-group">
          <label>Телефон:</label>
          <input type="tel" v-model="userData.phone">
        </div>
      </div>

      <div class="profile-section">
        <h3>Избранные автомобили</h3>
        <div class="favorites-grid">
          <div v-for="car in favoritesCars" :key="car.id" class="favorite-car">
            <img :src="car.image" :alt="car.name">
            <h4>{{ car.name }}</h4>
            <p>{{ car.price }}</p>
          </div>
        </div>
      </div>

      <button class="save-button">Сохранить изменения</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userData = ref({
  name: 'Иван Иванов',
  email: 'ivan@example.com',
  phone: '+7 (999) 123-45-67'
})

const favoritesCars = ref([
  {
    id: 1,
    name: 'Mercedes-Benz S63',
    price: '12 000 000 ₽',
    image: '/image/mercedes-benzs63.jpg'
  },
  {
    id: 2,
    name: 'McLaren 765LT',
    price: '25 000 000 ₽',
    image: '/image/2021McLaren765LT.jpg'
  }
])
</script>

<style scoped>
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.profile-avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info h2 {
  margin: 0;
  color: #fff;
}

.profile-info p {
  margin: 5px 0;
  color: #fff;
}

.profile-section {
  background: #4c4c4c;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.profile-section h3 {
  margin-top: 0;
  color: #fff;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.favorite-car {
  background: #333;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.favorite-car img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
}

.favorite-car h4 {
  margin: 10px 0;
  color: #fff;
}

.favorite-car p {
  margin: 5px 0;
  color: #fff;
}

.save-button {
  background: #30c02b;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.save-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>