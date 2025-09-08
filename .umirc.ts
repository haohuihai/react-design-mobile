import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/form/:id/submit', component: 'index' },
    { path: '/docs', component: 'docs' },
    { path: '*', component: '404' },
  ],

  npmClient: 'yarn',
  tailwindcss: {},
  theme: {},
  styles: [],
  extraBabelPlugins: [],
  // 重点是这个：
  extraBabelIncludes: [],
  chainWebpack(memo) {
    //  memo.module.rule('css').test(/\.css$/).exclude.add(/\.css$/);
    return memo;
  },
  conventionRoutes: {
    exclude: [/\.chunk.css$/],
  },
  proxy: {
    '/api': {
      // 要代理的地址
      // target: 'http://192.168.10.58:9000',
      target: 'http://192.168.10.58:9000',
      // 配置了这个可以从 http 代理到 https
      secure: false,
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: false,
      pathRewrite: { '^/api': '' },
    },
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 375, // 设计稿宽度
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1,
    }),
  ],
});
