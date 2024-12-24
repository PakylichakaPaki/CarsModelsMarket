<template>
  <div class="error-container">
    <div class="spider-web" ref="spiderWeb"></div>
    <h1 class="animate-fade-in">Ошибка 404</h1>
    <h2 class="animate-slide-in">Страница не найдена</h2>
    <p class="animate-fade-up">К сожалению, запрашиваемая вами страница не существует.</p>
    <router-link to="/" class="home-link animate-fade-up">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent',
  mounted() {
    const spiderWeb = this.$refs.spiderWeb;
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      spiderWeb.style.transform = `translate(-50%, -50%) rotate(${x * 20}deg) scale(${1 + y * 0.2})`;
    });
  }
}
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.spider-web {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, transparent 10%, rgba(255, 255, 255, 0.1) 10.1%, transparent 10.2%),
              repeating-radial-gradient(circle at center, transparent 0%, transparent 7%, rgba(255, 255, 255, 0.1) 7.1%, transparent 7.2%),
              repeating-conic-gradient(from 0deg at center, transparent 0deg, transparent 20deg, rgba(255, 255, 255, 0.1) 20.1deg, transparent 20.2deg);
  background-size: 100% 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: -1;
  transition: transform 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.animate-fade-in {
  font-size: 4rem;
  color: #ff4444;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-out;
}

.animate-slide-in {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  animation: slideIn 1s ease-out 0.3s both;
}

.animate-fade-up {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  animation: fadeUp 1s ease-out 0.6s both;
}

.home-link {
  padding: 1rem 2rem;
  background-color: #4c4c4c;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  animation: fadeUp 1s ease-out 0.9s both;
}

.home-link:hover {
  background-color: #333;
  opacity: 0;
  transform: scale(0.8);
}
</style>