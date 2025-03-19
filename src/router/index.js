import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../views/HomeView.vue'),
      children:[
        {
          path: '',
          name: 'home',
          component: () => import('../views/MainContent.vue')
        },
        {
          path: 'store',
          name: 'store',
          component: () => import('../views/RightBody/DShop.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('../views/UserView.vue'),
        }
       
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    

  ],
})

export default router
