import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Example' },
  },
  {
    path: '/example',
    name: 'Example',
    redirect: { name: 'ViewInputs' },
    component: () => import('@/examples/Layout.vue'),
    children: [
      {
        path: 'input',
        name: 'ViewInputs',
        component: () => import('@/examples/views/ViewInput.vue'),
      },
      {
        path: 'list',
        name: 'ViewLists',
        component: () => import('@/examples/views/ViewList.vue'),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

