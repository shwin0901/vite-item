
const routes = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue')
      }
    ],
  }
]

export default routes;