<script setup>
import { useCarsStore } from '@/stores/cars'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import ModalComponent from '@/components/ModalComponent.vue'
 
const store = useCarsStore()
const { filteredAndSortedCars, selectedCar } = storeToRefs(store)
   
const showCreditCalc = ref(false)

const currentImageIndex = ref(0)

const priceFilter = computed({
  get: () => store.filters.price,
  set: (value) => store.updateFilters({ price: value })
})

const powerFilter = computed({
  get: () => store.filters.power,
  set: (value) => store.updateFilters({ power: value })
})

const selectedTypes = computed({
  get: () => store.filters.selectedTypes,
  set: (value) => store.updateFilters({ selectedTypes: value })
})
const selectedBrand = computed(() => store.filters.selectedBrand)
const sortBy = computed(() => store.filters.sortBy)

// Добавляем локальное состояние для фильтров
const localFilters = ref({
  price: {
    min: 1000000,
    max: 280000000
  },
  power: {
    min: 100,
    max: 1500
  },
  selectedTypes: [],
  selectedBrand: '',
  sortBy: 'priceAsc'
})

const openModal = (car) => {
  store.setSelectedCar(car)
  showCreditCalc.value = false
  currentImageIndex.value = 0
  document.body.style.overflow = 'hidden'
}
const buyCar = (car) => {
  alert(`Поздравляем с покупкой ${car.name}! Наш менеджер свяжется с вами для оформления документов.`)
}

const updatePriceFilter = () => {
  const minPrice = parseInt(priceFilter.value.min)
  const maxPrice = parseInt(priceFilter.value.max)
  
  store.updateFilters({
    price: {
      min: minPrice,
      max: maxPrice
    }
  })
}

const updatePowerFilter = () => {
  console.log('Обновление мощности:', powerFilter.value)
  store.updateFilters({
    power: {
      min: powerFilter.value.min,
      max: powerFilter.value.max
    }
  })
}

// Метод для применения всех фильтров
const applyFilters = () => {
  store.updateFilters(localFilters.value)
}

</script>

<template>
  <div class="main-container">
    <div class="filter-sidebar">
      <h3>Фильтры</h3>
      <div class="filter-section">
        <h4>Цена</h4>
        <div class="price-range">
          <div class="price-inputs">
            <span>От: {{ Number(priceFilter.min).toLocaleString('ru-RU') }} ₽</span>
            <span>До: {{ Number(priceFilter.max).toLocaleString('ru-RU') }} ₽</span>
          </div>
          <input 
            type="range" 
            v-model.number="localFilters.price.min" 
            :min="1000000" 
            :max="280000000" 
            step="10000"
            @input="updatePriceFilter"
          >
          <input 
            type="range" 
            v-model.number="localFilters.price.max" 
            :min="1000000" 
            :max="280000000" 
            step="10000"
            @input="updatePriceFilter"
          >
        </div>
      </div>

      <div class="filter-section">
        <h4>Тип кузова</h4>
        <div class="checkbox-group">
          <label v-for="type in store.carTypes" :key="type">
            <input 
              type="checkbox" 
              :value="type"
              v-model="localFilters.selectedTypes"
            >
            {{ type }}
          </label>
        </div>
      </div>

      <div class="filter-section">
        <h4>Мощность двигателя</h4>
        <div class="power-range">
          <input
            type="range"
            v-model="localFilters.power.min"
            :min="100"
            :max="1500"
            step="50"
            @change="updatePowerFilter"
          >
          <div class="power-inputs">
            <span>От: {{ localFilters.power.min }} л.с.</span>
            <span>До: {{ localFilters.power.max }} л.с.</span>
          </div>
        </div>
      </div>

      <div class="filter-section">
        <h4>Марка автомобиля</h4>
        <select v-model="localFilters.selectedBrand" class="brand-select">
          <option value="">Все марки</option>
          <option v-for="brand in store.carBrands" :key="brand" :value="brand">
            {{ brand }}
          </option>
        </select>
      </div>

      <div class="filter-section">
        <h4>Сортировка</h4>
        <select v-model="localFilters.sortBy" class="sort-select">
          <option value="priceAsc">По цене (возрастание)</option>
          <option value="priceDesc">По цене (убывание)</option>
          <option value="nameAsc">По названию (А-Я)</option>
          <option value="nameDesc">По названию (Я-А)</option>
        </select>
      </div>

      <button class="apply-filters-btn" @click="applyFilters">
        Применить фильтры
      </button>
    </div>
    
    <div class="cars-container">
      <h2>Автомобили</h2>
      <div v-if="filteredAndSortedCars.length" class="cars-grid">
        <div v-for="(car, index) in filteredAndSortedCars" 
             :key="index" 
             class="car-card"
             @click="openModal(car)">
          <img :src="`/image/${car.image[0]}`" :alt="car.name">
          <h3>{{ car.name }}</h3>
          <p>{{ car.price }}</p>
          <p>{{ car.description }}</p>
          <button class="buy-btn" @click="buyCar(car)">Купить</button>
        </div>
      </div>
      <div v-else class="no-results">
        <p>Увы, но по вашим запросам такую машину ещё не сделали :(</p>
      </div>
    </div>    
  </div>
  <ModalComponent :selectedCar="selectedCar" />
</template>

<style scoped>
.main-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.filter-sidebar {
  width: 250px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.filter-section {
  margin-bottom: 20px;
}

.filter-section h4 {
  margin-bottom: 10px;
}

.price-range,
.power-range {
  padding: 10px 0;
}

.price-inputs,
.power-inputs {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-select,
.sort-select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.cars-container {
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px 0;
}

.car-card {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.car-card:hover {
  transform: translateY(-5px);
}

.car-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
}

.car-card h3 {
  margin: 10px 0;
  font-size: 18px;
  cursor: pointer;
}

.car-card p {
  color: #666;
  margin: 5px 0;
  cursor: pointer;
}
.buy-btn {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #285afe;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.buy-btn:hover {
  background: #0e46ff;
}

.buy-btn-modal {
  background: #285afe;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.buy-btn-modal:hover {
  background: #0e46ff;
  transform: translateY(-2px);
}

@media (max-width: 1200px) {
  .cars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }
  .filter-sidebar {
    width: auto;
  }
  .cars-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .action-buttons {
    flex-direction: column;
  }
  .car-specs {
    grid-template-columns: 1fr;
  }
}

.apply-filters-btn {
  width: 100%;
  padding: 12px;
  background: #285afe;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.apply-filters-btn:hover {
  background: #1a41c8;
}
</style>