
const routes = [
  {
    path: '/',
    key: 'main',
    redirect: '/home',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        path: '/home',
        key: 'home',
        name: '首页',
        component: () => import('@/pages/home/index.vue')
      },
    ],
  },
  {
    path: '/login',
    key: 'login',
    component: () => import('@/pages/login/index.vue')
  }
]

export default routes;