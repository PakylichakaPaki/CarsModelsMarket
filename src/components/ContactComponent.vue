<template>
  <div class="contact-page">
    <div class="contact-hero">
      <h1>Свяжитесь с нами</h1>
      <p>Мы всегда рады помочь вам с выбором автомобиля вашей мечты</p>
    </div>

    <div class="contact-content">
      <div class="contact-details">
        <div class="contact-card">
          <div class="icon-wrapper">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <h3>Наш адрес</h3>
          <p>г. Москва, Ленинградский проспект, 39А</p>
          <p>Бизнес-центр "Скайлайт"</p>
        </div>

        <div class="contact-card">
          <div class="icon-wrapper">
            <i class="fas fa-phone"></i>
          </div>
          <h3>Телефоны</h3>
          <p>Продажи: +7 (495) 123-45-67</p>
          <p>Сервис: +7 (495) 765-43-21</p>
        </div>

        <div class="contact-card">
          <div class="icon-wrapper">
            <i class="fas fa-envelope"></i>
          </div>
          <h3>Email</h3>
          <p>sales@carsmodelsmarket.ru</p>
          <p>support@carsmodelsmarket.ru</p>
        </div>

        <div class="contact-card">
          <div class="icon-wrapper">
            <i class="fas fa-clock"></i>
          </div>
          <h3>Время работы</h3>
          <p>Пн-Пт: 9:00 - 21:00</p>
          <p>Сб-Вс: 10:00 - 20:00</p>
        </div>
      </div>

      <div class="contact-form-section">
        <div class="form-container">
          <h2>Оставить заявку</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Ваше имя</label>
              <input 
                id="name"
                type="text" 
                v-model="formData.name"
                required
                placeholder="Иван Иванов"
              >
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                id="email"
                type="email" 
                v-model="formData.email"
                required
                placeholder="example@mail.ru"
              >
            </div>

            <div class="form-group">
              <label for="phone">Телефон</label>
              <input 
                id="phone"
                type="tel" 
                v-model="formData.phone"
                required
                placeholder="+7 (___) ___-__-__"
              >
            </div>

            <div class="form-group">
              <label for="subject">Тема обращения</label>
              <select id="subject" v-model="formData.subject" required>
                <option value="">Выберите тему</option>
                <option value="purchase">Покупка автомобиля</option>
                <option value="service">Сервисное обслуживание</option>
                <option value="parts">Запасные части</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Сообщение</label>
              <textarea 
                id="message"
                v-model="formData.message"
                required
                placeholder="Опишите ваш вопрос..."
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="map-section">
      <h2>Как нас найти</h2>
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7303688286087!2d37.53508731591582!3d55.79233798056543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549c0f63d8f4f%3A0x5e43de0f8cec8c!2z0JvQtdC90LjQvdCz0YDQsNC00YHQutC40Lkg0L_RgC4sIDM50JAsINCc0L7RgdC60LLQsCwgMTI1MTY3!5e0!3m2!1sru!2sru!4v1645000000000!5m2!1sru!2sru" 
          width="100%" 
          height="400" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Отправка формы:', this.formData)
      // Здесь будет логика отправки формы
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.contact-hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #4c4c4c 0%, #666666 100%);
  border-radius: 15px;
  color: white;
  margin-bottom: 40px;
}

.contact-hero h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.contact-hero p {
  font-size: 1.2em;
  opacity: 0.9;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.contact-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.contact-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: #4c4c4c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
}

.icon-wrapper i {
  color: white;
  font-size: 20px;
}

.contact-card h3 {
  color: #333;
  margin-bottom: 15px;
}

.contact-card p {
  color: #666;
  margin: 5px 0;
}

.contact-form-section {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.form-container h2 {
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  color: #333;
}

.form-group textarea {
  height: 120px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: #4c4c4c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #666666;
}

.map-section {
  margin-top: 40px;
}

.map-section h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.map-container {
  height: 400px;
  background: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-details {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .contact-details {
    grid-template-columns: 1fr;
  }
  
  .contact-hero h1 {
    font-size: 2.5em;
  }
}
</style>