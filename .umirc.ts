import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/login',
      component: '@/pages/Login',
    },
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          path: '/home',
          component: '@/pages/Home',
        },
        {
          path: '/time',
          component: '@/pages/Time',
        },
        {
          path: '/study',
          component: '@/pages/Study',
        },
      ],
    },
    {
      component: '@/pages/NotFound',
    },
  ],
  fastRefresh: {},
});
