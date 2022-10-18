import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: '@/pages/Home' },
    { path: '/products', component: '@/pages/Products' },
  ],
  fastRefresh: {},
});
