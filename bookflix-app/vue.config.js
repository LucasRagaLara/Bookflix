const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://bookflix-app.netlify.app/',
        changeOrigin: true,
        // pathRewrite: {'^/api': ''}
      }
    }
  }
});
