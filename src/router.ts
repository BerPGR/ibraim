import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/pages/Welcome.vue'
import Auth from '@/pages/Auth.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'welcome', component: Welcome },
    { path: '/auth', name: 'auth', component: Auth },
  ],
})

export default router
