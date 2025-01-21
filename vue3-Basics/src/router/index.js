import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/vue-instance',
    name: 'vue-instance',
    component: () => import('../views/VueInstanceView.vue')
  },
  {
    path: '/directives',
    name: 'directives',
    component: () => import('../views/DirectivesView.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/ComputedView.vue')
  },
  {
    path: '/component-basics',
    name: 'component-basics',
    component: () => import('../views/ComponentBasicsView.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('../views/SlotView.vue')
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: () => import('../views/HooksView.vue')
  },
  {
    path: '/element-plus',
    name: 'elementPlus',
    component: () => import('../views/ElementPlusView.vue')
  },
  {
    path: '/pinia-demo',
    name: 'PiniaDemo',
    component: () => import('../views/PiniaDemo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
