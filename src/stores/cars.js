import { defineStore } from 'pinia'

export const useCarsStore = defineStore('cars', {
  state: () => ({
    cars: [
        {
          name: '2020 Audi RS6',
          price: '7 800 000 ₽',
          description: 'Спортивный седан с двигателем V8 4.0L Twin-Turbo. Мощность: 600 л.с.',
          image: ['2020AudiRS6.jpg', '2021McLaren765LT.jpg', 'AudiA7.jpg'],
          type: 'Седан'
        },
        {
          name: '2021 McLaren 765LT',
          price: '25 500 000 ₽', 
          description: 'Суперкар с двигателем V8 4.0L. Мощность: 765 л.с., разгон до 100 км/ч за 2.8 сек',
          image: ['2021McLaren765LT.jpg', '2020AudiRS6.jpg', 'AudiA7.jpg'],
          type: 'Суперкар'
        },
        {
          name: 'Audi A7',
          price: '4 900 000 ₽',
          description: 'Премиальный седан с полным приводом quattro. Мощность: 340 л.с.',
          image: ['AudiA7.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Седан'
        },
        {
          name: 'Audi R8',
          price: '6 200 000 ₽', 
          description: 'Бизнес седан с комфортной подвеской и передовыми системами безопасности. Мощность: 367 л.с.',
          image: ['audir8.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Седан'
        },
        {
          name: 'Boss302',
          price: '4 500 000 ₽',
          description: 'Легендарный Ford Mustang Boss 302 - спортивное купе с атмосферным V8 5.0L. Мощность: 444 л.с.',
          image: ['Boss302.png', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Купе'
        },
        {
          name: 'Bugatti Chiron',
          price: '280 000 000 ₽',
          description: 'Гиперкар с W16 8.0L Quad-Turbo. Мощность: 1500 л.с., максимальная скорость 420 км/ч',
          image: ['bugattichiron.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Гиперкар'
        },
        {
          name: 'Carapollo',
          price: '3 200 000 ₽',
          description: 'Городской седан с экономичным расходом и современным оснащением. Мощность: 150 л.с.',
          image: ['carapollo.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Седан'
        },
        {
          name: 'Volkswagen Arteon',
          price: '4 800 000 ₽',
          description: 'Седан с адаптивной подвеской DCC и полным приводом 4Motion. Мощность: 280 л.с.',
          image: ['DetailedmodelVolkswagen.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Седан'
        },
        {
          name: 'Ferrari 260 GTB',
          price: '22 500 000 ₽',
          description: 'Классический спорткар Ferrari с атмосферным V12. Мощность: 260 л.с., коллекционный экземпляр',
          image: ['Ferrari260GTB.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Купе'
        },
        {
          name: 'Ford GT40',
          price: '35 000 000 ₽',
          description: 'Легендарный суперкар, победитель Ле-Мана, V6 3.5L EcoBoost. Мощность: 647 л.с.',
          image: ['GT40.png', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Суперкар'
        },
        {
          name: 'Jeep Compass',
          price: '3 800 000 ₽',
          description: 'Компактный внедорожник с системой полного привода Jeep Active Drive. Мощность: 170 л.с.',
          image: ['JeepCompass.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Внедорожник'
        },
        {
          name: 'Jeep Renegade',
          price: '3 200 000 ₽',
          description: 'Компактный кроссовер с внедорожными возможностями и современными технологиями. Мощность: 150 л.с.',
          image: ['JeepRenegade.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Кроссовер'
        },
        {
          name: 'Koenigsegg Agera',
          price: '150 000 000 ₽',
          description: 'Гиперкар с V8 5.0L Twin-Turbo. Мощность: 1160 л.с., карбоновый монокок',
          image: ['Koenigsegg.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Гиперкар'
        },
        {
          name: 'Mercedes-AMG G63',
          price: '23 500 000 ₽',
          description: 'Люксовый внедорожник с V8 4.0L Biturbo. Мощность: 585 л.с., легендарная проходимость',
          image: ['mercedes-benzs63.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Внедорожник'
        },
        {
          name: 'Mercedes-Benz S-Class',
          price: '12 900 000 ₽',
          description: 'Флагманский седан с инновационными технологиями и максимальным комфортом. Мощность: 435 л.с.',
          image: ['mercedes.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Седан'
        },
        {
          name: 'Mercedes C63 AMG',
          price: '8 500 000 ₽',
          description: 'Спортивное купе с V8 4.0L Biturbo. Мощность: 510 л.с., разгон до 100 км/ч за 3.9 сек',
          image: ['MercedesC63Amg.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Купе'
        },
        {
          name: 'Nissan GT-R R35',
          price: '8 900 000 ₽',
          description: 'Легендарный суперкар с V6 3.8L Twin-Turbo. Мощность: 570 л.с., полный привод ATTESA E-TS',
          image: ['NissanGTRR35.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Суперкар'
        },
        {
          name: 'Porsche 718 Cayman',
          price: '6 500 000 ₽',
          description: 'Среднемоторное спортивное купе с отточенной управляемостью. Мощность: 300 л.с.',
          image: ['Porsche718.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Купе'
        },
        {
          name: 'Porsche 911',
          price: '11 200 000 ₽',
          description: 'Культовое спортивное купе с оппозитным двигателем, задний привод. Мощность: 450 л.с.',
          image: ['Porsche911.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Купе'
        },
        {
          name: 'Volvo S90',
          price: '5 900 000 ₽',
          description: 'Премиальный седан с передовыми системами безопасности и скандинавским дизайном. Мощность: 249 л.с.',
          image: ['VolvoS90.jpg', '2021McLaren765LT.jpg', '2020AudiRS6.jpg'],
          type: 'Седан'
        }
      ],
    carTypes: ['Седан', 'Кроссовер', 'Внедорожник', 'Купе', 'Суперкар', 'Гиперкар'],
    carBrands: ['Audi', 'BMW', 'Mercedes', 'Porsche', 'Ferrari', 'McLaren', 'Bugatti', 'Koenigsegg', 'Jeep', 'Volvo', 'Volkswagen', 'Nissan', 'Ford'],
    selectedCar: null,
    filters: {
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
    }
  }),

  getters: {
    filteredCars: (state) => {
      return state.cars.filter(car => {
        // Цена
        const price = parseInt(car.price.replace(/[^\d]/g, ''))
        const matchesPrice = price >= state.filters.price.min && price <= state.filters.price.max
        
        // Мощность
        const powerMatch = car.description.match(/(\d+)\s*л\.с\./)
        const power = powerMatch ? parseInt(powerMatch[1]) : 0
        const matchesPower = power >= state.filters.power.min && power <= state.filters.power.max
        
        // Тип кузова
        const matchesType = state.filters.selectedTypes.length === 0 || 
          state.filters.selectedTypes.includes(car.type)
        
        // Марка (новая логика)
        const matchesBrand = !state.filters.selectedBrand || 
          car.name.toLowerCase().includes(state.filters.selectedBrand.toLowerCase())

        // Возвращаем результат всех проверок
        const result = matchesPrice && matchesPower && matchesType && matchesBrand
        
        // Логируем результаты для отладки
        if (state.filters.selectedBrand || state.filters.selectedTypes.length > 0) {
          console.log(`Фильтрация ${car.name}:`, {
            type: car.type,
            matchesType,
            brand: state.filters.selectedBrand,
            matchesBrand,
            result
          })
        }
        
        return result
      })
    },
    
    filteredAndSortedCars: (state) => {
      let sorted = [...state.filteredCars]
      
      switch(state.filters.sortBy) {
        case 'priceAsc':
          sorted.sort((a, b) => 
            parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''))
          )
          break
        case 'priceDesc':
          sorted.sort((a, b) => 
            parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''))
          )
          break
        case 'nameAsc':
          sorted.sort((a, b) => a.name.localeCompare(b.name))
          break
        case 'nameDesc':
          sorted.sort((a, b) => b.name.localeCompare(a.name))
          break
      }
      
      return sorted
    }
  },

  actions: {
    setSelectedCar(car) {
      this.selectedCar = car
    },
    updateFilters(filters) {
      this.filters = { ...this.filters, ...filters }
    }
  }
}) 