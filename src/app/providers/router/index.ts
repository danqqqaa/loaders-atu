import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/ui/Home.vue'),
    props: { label: 'Домашняя страница' }
  },
  {
    path: '/auth',
    name: 'authorization',
    component: () => import('@/pages/auth/ui/Auth.vue'),
    props: { label: 'Страница авторизации' }
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
