import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: ':id', component: '@/pages/tabList/index' },
      ],
    },
  ],
  fastRefresh: {},
  antd: {
    compact: false,
  },
});
