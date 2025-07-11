// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const base = import.meta.env.VITE_BASE_URL || '/';
const router = createRouter({
  history: createWebHistory(base),
  routes: [
{
path: '/',

name: 'home',
component: HomeView
}
]
});
export default router;
