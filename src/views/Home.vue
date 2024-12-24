<template>
  <div class="home">
    <h1 class="main-title">Автомобильные новости</h1>
    <div class="news-container">
      <div class="featured-news">
        <article v-for="news in largeNews" :key="news.id" class="featured-item">
          <div class="featured-image">
            <img :src="news.image" :alt="news.title">
            <div class="featured-overlay">
              <span class="news-date">{{ news.date }}</span>
              <h2>{{ news.title }}</h2>
              <p>{{ news.description }}</p>
            </div>
          </div>
        </article>
      </div>
      
      <div class="news-grid">
        <article v-for="news in smallNews" :key="news.id" class="news-card">
          <div class="news-image">
            <img :src="news.image" :alt="news.title">
          </div>
          <div class="news-content">
            <span class="news-date">{{ news.date }}</span>
            <h3>{{ news.title }}</h3>
            <p>{{ news.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const smallNews = [
  {
    id: 1,
    title: 'Новый электромобиль Tesla 2024',
    description: 'Компания Tesla представила новую модель электромобиля с революционными характеристиками.',
    date: '20.03.2024',
    image: '/image/mercedes-benzs63.jpg'
  },
  {
    id: 2,
    title: 'BMW представляет гибридную серию',
    description: 'Немецкий автопроизводитель анонсировал новую линейку гибридных автомобилей.',
    date: '18.03.2024',
    image: '/image/2021McLaren765LT.jpg'
  },
  {
    id: 3,
    title: 'Mercedes-Benz обновляет S-класс',
    description: 'Компания Mercedes-Benz представила обновленную версию флагманского седана.',
    date: '15.03.2024',
    image: '/image/mercedes.jpg'
  },
  {
    id: 4,
    title: 'Toyota разрабатывает водородный двигатель',
    description: 'Японский автопроизводитель инвестирует в разработку водородных двигателей.',
    date: '12.03.2024',
    image: '/image/Boss302.png'
  },
  {
    id: 5,
    title: 'Porsche выпускает юбилейную версию 911',
    description: 'К 60-летию модели 911 компания выпустит ограниченную серию спорткаров.',
    date: '10.03.2024',
    image: '/image/audir8.jpg'
  },
  {
    id: 6,
    title: 'Audi представляет новый электрический SUV',
    description: 'Немецкий производитель расширяет линейку электромобилей новым кроссовером.',
    date: '08.03.2024',
    image: '/image/bugattichiron.jpg'
  },
  {
    id: 7,
    title: 'Volvo переходит на полную электрификацию',
    description: 'Шведский автопроизводитель объявил о полном отказе от ДВС к 2030 году.',
    date: '05.03.2024',
    image: '/image/carapollo.jpg'
  },
  {
    id: 8,
    title: 'Lexus обновляет модельный ряд',
    description: 'Японский премиум-бренд представил обновленные версии популярных моделей.',
    date: '03.03.2024',
    image: '/image/DetailedmodelVolkswagen.jpg'
  },
  {
    id: 9,
    title: 'Hyundai развивает водородные технологии',
    description: 'Корейский концерн инвестирует в развитие водородной инфраструктуры.',
    date: '01.03.2024',
    image: '/image/Ferrari260GTB.jpg'
  },
  {
    id: 10,
    title: 'Volkswagen представляет новый ID.7',
    description: 'Электрический флагман немецкого бренда готов к выходу на рынок.',
    date: '28.02.2024',
    image: '/image/GT40.png'
  },
  {
    id: 11,
    title: 'Kia обновляет линейку электромобилей',
    description: 'Корейский производитель представил новое поколение электрокаров.',
    date: '25.02.2024',
    image: '/image/JeepCompass.jpg'
  },
  {
    id: 12,
    title: 'Ford возрождает легендарную модель',
    description: 'Американский автогигант анонсировал возвращение классической модели в современном исполнении.',
    date: '22.02.2024',
    image: '/image/mercedes-benzs63.jpg'
  },
  {
    id: 13,
    title: 'Mazda экспериментирует с роторным двигателем',
    description: 'Японский производитель разрабатывает новую версию роторного двигателя.',
    date: '19.02.2024',
    image: '/image/MercedesC63Amg.jpg'
  },
  {
    id: 14,
    title: 'Subaru анонсирует электрический WRX',
    description: 'Культовая спортивная модель получит полностью электрическую версию.',
    date: '16.02.2024',
    image: '/image/NissanGTRR35.jpg'
  },
  {
    id: 15,
    title: 'Renault обновляет дизайн-концепцию',
    description: 'Французский автопроизводитель представил новую дизайнерскую философию.',
    date: '13.02.2024',
    image: '/image/Porsche718.jpg'
  },
  {
    id: 16,
    title: 'Alfa Romeo возвращается в премиум-сегмент',
    description: 'Итальянский бренд представил новую флагманскую модель.',
    date: '10.02.2024',
    image: '/image/VolvoS90.jpg'
  }
]

const largeNews = [
  {
    id: 1,
    title: 'Революция в автомобильной индустрии',
    description: 'Ведущие автопроизводители объединяются для создания универсальной платформы электромобилей. Этот шаг может полностью изменить будущее автомобильной промышленности. Новая технология позволит существенно снизить стоимость производства электромобилей и сделать их более доступными для массового потребителя. Кроме того, единая платформа упростит обслуживание и ремонт электромобилей различных марок.',
    date: '21.03.2024',
    image: '/image/Ferrari260GTB.jpg'
  },
  {
    id: 2,
    title: 'Прорыв в технологии аккумуляторов',
    description: 'Группа ученых разработала революционную технологию производства аккумуляторов, которая увеличивает запас хода электромобилей втрое. Новая технология также позволяет заряжать батарею до 80% всего за 10 минут. Это открытие может стать решающим фактором в массовом переходе на электротранспорт.',
    date: '19.03.2024',
    image: '/image/JeepRenegade.jpg'
  }
]

defineExpose({
  smallNews,
  largeNews
})
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.main-title {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
}

.featured-news {
  margin-bottom: 40px;
}

.featured-item {
  position: relative;
  margin-bottom: 30px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.featured-image {
  position: relative;
  height: 500px;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  color: white;
}

.featured-overlay h2 {
  font-size: 2em;
  margin: 10px 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  height: 200px;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  padding: 20px;
}

.news-date {
  color: #666;
  font-size: 0.9em;
  display: block;
  margin-bottom: 10px;
}

.news-content h3 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #333;
}

.news-content p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .featured-image {
    height: 300px;
  }
  
  .featured-overlay h2 {
    font-size: 1.5em;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
