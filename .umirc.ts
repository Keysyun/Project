import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          path: '/home',
          component: '@/pages/Home',
        },
      ],
    },
    {
      component: '@/pages/NotFound',
    },
  ],
  fastRefresh: {},
});
