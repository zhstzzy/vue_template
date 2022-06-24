import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    name: 'Demo',
    meta: {
      title: 'Demo',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/components/Demo.vue')
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: 'Pinia',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/components/usePinia.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;

