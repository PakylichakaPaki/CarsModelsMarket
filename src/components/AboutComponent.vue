<template>
  <div class="about-container">
    <div class="hero-section">
      <h1>О нашей компании</h1>
      <p class="hero-text">Лидеры автомобильного рынка с 2009 года</p>
    </div>

    <div class="stats-bar">
      <div class="stat-item">
        <span class="stat-number">50K+</span>
        <span class="stat-label">Проданных авто</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">15</span>
        <span class="stat-label">Лет опыта</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">10</span>
        <span class="stat-label">Центров</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">98%</span>
        <span class="stat-label">Довольных клиентов</span>
      </div>
    </div>

    <div class="content-grid">
      <div class="info-card history">
        <h2>История</h2>
        <p>От небольшого автосалона до лидера рынка премиальных автомобилей. Наш путь начался в 2009 году, и сегодня мы продолжаем расти и совершенствоваться.</p>
      </div>

      <div class="info-card mission">
        <h2>Миссия</h2>
        <p>Создавать непревзойденный опыт владения премиальным автомобилем, предоставляя исключительный сервис на каждом этапе.</p>
      </div>

      <div class="info-card services">
        <h2>Услуги</h2>
        <ul>
          <li>Продажа новых автомобилей премиум-класса</li>
          <li>Программа trade-in</li>
          <li>Премиальное кредитование</li>
          <li>Страхование</li>
        </ul>
      </div>

      <div class="info-card values">
        <h2>Ценности</h2>
        <div class="values-grid">
          <div class="value-item">
            <span class="value-icon">★</span>
            <span class="value-text">Качество</span>
          </div>
          <div class="value-item">
            <span class="value-icon">⚖</span>
            <span class="value-text">Честность</span>
          </div>
          <div class="value-item">
            <span class="value-icon">👥</span>
            <span class="value-text">Профессионализм</span>
          </div>
          <div class="value-item">
            <span class="value-icon">💡</span>
            <span class="value-text">Инновации</span>
          </div>
        </div>
      </div>
    </div>

    <div class="partners-section">
      <h2>Наши партнеры</h2>
      <div class="partners-grid">
        <div class="partner">Mercedes-Benz</div>
        <div class="partner">BMW</div>
        <div class="partner">Audi</div>
        <div class="partner">Lexus</div>
        <div class="partner">Porsche</div>
        <div class="partner">Tesla</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style scoped>
.about-container {
  max-width: 100%;
  overflow: hidden;
}
.animated-bg {
  background: linear-gradient(270deg, #4c4c4c, #787878, #4c4c4c);
  background-size: 200% 100%;
  animation: gradientSlide 3s ease infinite;
  color: white;
  padding: 15px;
  border-radius: 8px;
}


.hero-section {
  background: #4c4c4c;
  color: white;
  padding: 120px 20px;
  text-align: center;
}

.hero-section h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 800;
}

.hero-text {
  font-size: 1.5rem;
  opacity: 0.9;
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: white;
  margin: -50px auto 50px;
  max-width: 1000px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3c72;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.info-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card h2 {
  color: #1e3c72;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.info-card p, .info-card ul {
  color: #555;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.value-item {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.value-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 10px;
}

.partners-section {
  background: #f8f9fa;
  padding: 80px 40px;
  text-align: center;
}

.partners-section h2 {
  color: #1e3c72;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.partner {
  background: white;
  padding: 30px;
  border-radius: 15px;
  font-weight: 600;
  color: #1e3c72;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.partner:hover {
  transform: translateY(-5px);
  background: #1e3c72;
  color: white;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: -30px 20px 30px;
  }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 3rem;
  }
  
  .hero-text {
    font-size: 1.2rem;
  }
  
  .content-grid {
    padding: 20px;
  }
  
  .info-card {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .stats-bar {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
}
</style>