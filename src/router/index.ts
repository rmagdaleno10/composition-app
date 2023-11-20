import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'
import AboutView from '@/shared/views/AboutView.vue'
import { pokemonRoute } from '../pokemons/router/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../counter/CounterView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      ...pokemonRoute,
      path: '/pokemons'
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: HomeView 
    },
  ]
})

export default router
