<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Контакты</h3>
        <p>Email: bershadskiyegorpixel@gmail.com</p>
        <p>Телефон: +7 (800) 555-35-35</p>
      </div>
      <div class="footer-section">
        <h3>Социальные сети</h3>
        <div class="social-links">
          <a href="https://vk.com/bershadskiyegor" class="social-link">VK</a>
          <a href="https://t.me/bershadskiyegor" class="social-link">Telegram</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 CarsModelsMarket. Все права защищены.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 20px;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.footer-section {
  padding: 0 20px;
}

.footer-section h3 {
  color: #333;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  color: #666;
  text-decoration: none;
}

.social-link:hover {
  color: #42b983;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #ddd;
  padding-top: 15px;
  color: #666;
}
</style>