import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
    },
    {
      path: '/',
      component: () => import('../views/Layout.vue'),
      meta: { requireAuth: true },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/create-checklist',
          name: 'create-checklist',
          component: () => import('../views/checklist/AddChecklist.vue')
        },
        {
          path: '/check-list',
          name: 'check-list',
          component: () => import('../views/checklist/Checklist.vue')
        },
        {
          path: '/checklist/:id',
          name: 'updateChecklist',
          component: () => import('../views/checklist/UpdateChecklist.vue')
        },
        {
          path: '/todolist/:id',
          name: 'todolist',
          component: () => import('../views/todolist/TodoList.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/auth/UserView.vue')
        }
      ]
    },
  ]
})

export default router
