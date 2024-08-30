import { createApp } from 'vue'
import '@/app/styles/global.css'
import App from './App.vue'
import { router } from './providers/router'
import { pinia } from './providers/store'
import { useAuthStore } from '@/features/auth/model/index'

export const app = createApp(App).use(pinia).use(router)

const auth = useAuthStore()

// router.beforeEach((to, from, next) => {    
//     if (to.name !== "authorization" && !auth.token) next({name: 'authorization'})
//     else next()
//   })
