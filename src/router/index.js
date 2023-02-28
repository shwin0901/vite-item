
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue')
      }
    ],
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue')
  }
]

export default routes;