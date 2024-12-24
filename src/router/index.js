import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Models from '../components/CarsComponent.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import ErrorComponent from '../components/ErrorComponent.vue';
import Profile from '../components/ProfileComponent.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/models',
    name: 'Models',
    component: Models
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorComponent
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;