import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/app',
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
