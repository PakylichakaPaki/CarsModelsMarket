<script setup>
import { useCarsStore } from '@/stores/cars'
import { ref, computed } from 'vue'
const store = useCarsStore()

const props = defineProps({
  selectedCar: Object
})

const showCreditCalc = ref(false)
const isFavorite = ref(false)
const creditCalc = ref({
  downPayment: 0,
  term: 36
})

const calculateMonthlyPayment = computed(() => {
  if (!creditCalc.value.downPayment || !creditCalc.value.term) return 0
  
  // Преобразуем строку цены в число, убирая все нечисловые символы
  const carPrice = Number(props.selectedCar.price.replace(/[^\d]/g, ''))
  const loanAmount = carPrice - creditCalc.value.downPayment
  const monthlyInterest = 0.12 / 12 // 12% годовых
  const months = creditCalc.value.term
  
  const payment = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / 
                 (Math.pow(1 + monthlyInterest, months) - 1)
                 
  return Math.round(payment) || 0
})

const closeModal = () => {
  store.setSelectedCar(null)
  document.body.style.overflow = 'auto'
  currentImageIndex.value = 0
}

const calculateCredit = () => {
  showCreditCalc.value = !showCreditCalc.value
}

const scheduleTestDrive = () => {
  alert('Заявка на тест-драйв отправлена! Мы свяжемся с вами в ближайшее время.')
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}
const currentImageIndex = ref(0)
const setMainImage = (index) => {
  currentImageIndex.value = index
}

const extractPower = (description) => {
  const match = description.match(/(\d+)\s*л\.с\./)
  return match ? match[1] : 'Н/Д'
}

const extractType = (description) => {
  for (const type of store.carTypes) {
    if (description.toLowerCase().includes(type.toLowerCase())) {
      return type;
    }
  }
  return 'Не указан';
}
</script>
<template>
<div v-if="selectedCar" class="modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <span class="close-button" @click="closeModal">&times;</span>
      <div class="modal-car-info">
        <div class="modal-gallery">
          <img :src="`/image/${selectedCar.image[currentImageIndex]}`" :alt="selectedCar.name" class="main-image">
          <div class="thumbnail-container">
            <img v-for="(image, index) in selectedCar.image" 
                 :key="index" 
                 :src="`/image/${image}`" 
                 class="thumbnail" 
                 :class="{'active': currentImageIndex === index}"
                 @click="setMainImage(index)">
          </div>
        </div>
        
        <div class="modal-details">
          <h2>{{ selectedCar.name }}</h2>
          <p class="modal-price">{{ selectedCar.price }}</p>
          <div class="car-specs">
            <div class="spec-item">
              <i class="fas fa-tachometer-alt"></i>
              <span>Мощность: {{ extractPower(selectedCar.description) }} л.с.</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-gas-pump"></i>
              <span>Расход: 12л/100км</span>
            </div>
            <div class="spec-item">
              <i class="fas fa-car"></i>
              <span>{{ extractType(selectedCar.description) }}</span>
            </div>
          </div>
          
          <div class="description-block">
            <h3>Описание</h3>
            <p class="modal-description">{{ selectedCar.description }}</p>
          </div>

          <div class="additional-features">
            <h3>Комплектация</h3>
            <ul>
              <li>Климат-контроль</li>
              <li>Кожаный салон</li>
              <li>Панорамная крыша</li>
              <li>Система помощи при парковке</li>
            </ul>
          </div>

          <div class="action-buttons">
            <button class="buy-btn-modal" @click="buyCar(selectedCar)">Купить</button>
            <button class="test-drive-btn" @click="scheduleTestDrive">Записаться на тест-драйв</button>
            <button class="calculate-credit-btn" @click="calculateCredit">Рассчитать кредит</button>
            <button class="add-favorite-btn" @click="toggleFavorite" :class="{'favorite-active': isFavorite}">
              <i :class="['fas', {'fa-heart': isFavorite, 'fa-heart-o': !isFavorite}]"></i>
              {{ isFavorite ? 'В избранном' : 'В избранное' }}
            </button>
          </div>

          <div v-if="showCreditCalc" class="credit-calculator">
            <h3>Кредитный калькулятор</h3>
            <div class="calc-inputs">
              <div class="input-group">
                <label>Первоначальный взнос</label>
                <input type="number" v-model="creditCalc.downPayment">
              </div>
              <div class="input-group">
                <label>Срок кредита (мес)</label>
                <input type="number" v-model="creditCalc.term">
              </div>
              <div class="calc-result">
                <p>Ежемесячный платеж: {{ calculateMonthlyPayment }} ₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Улучшенные стили для модального окна */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
    padding: 20px;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
}
.thumbnail-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.thumbnail {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.credit-calculator {
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
}
.test-drive-btn,
.calculate-credit-btn,
.add-favorite-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.test-drive-btn {
  background: #2c3e50;
  color: white;
}

.calculate-credit-btn {
  background: #34495e;
  color: white;
}

.add-favorite-btn {
  background: #fff;
  border: 2px solid #2c3e50;
  color: #2c3e50;
  transition: all 0.3s ease;
}

.add-favorite-btn.favorite-active {
  background: #30c02b;
  border-color: #30c02b;
  color: white;
}

.test-drive-btn:hover,
.calculate-credit-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.add-favorite-btn:hover {
  background: #f8f9fa;
}

.add-favorite-btn.favorite-active:hover {
  background: #30c02b;
  border-color: #30c02b;
}

.calc-inputs {
  display: grid;
  gap: 20px;
}
.input-group label {
  font-size: 14px;
  color: #666;
}

.input-group input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.modal-content {
  background: white;
  padding: 40px;
  border-radius: 16px;
  max-width: 1200px;
  width: 95%;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 35px;
  cursor: pointer;
  color: #333;
  z-index: 2;
}

.modal-car-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
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

.no-results {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
}
.thumbnail:hover {
  opacity: 0.8;
}

.modal-details {
  text-align: left;
}

.modal-details h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.modal-price {
  font-size: 28px;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 25px;
}

.car-specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.spec-item i {
  font-size: 20px;
  color: #2c3e50;
}

.description-block {
  margin-bottom: 30px;
}

.description-block h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
}

.modal-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
}

.additional-features {
  margin-bottom: 30px;
}

.additional-features h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
}

.additional-features ul {
  list-style: none;
  padding: 0;
}

.additional-features li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.calc-result {
  margin-top: 20px;
  padding: 15px;
  background: white;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
}
.modal-gallery {
  position: relative;
}
@media (max-width: 1200px) {

  .modal-car-info {
    grid-template-columns: 1fr;
  }
}
</style>