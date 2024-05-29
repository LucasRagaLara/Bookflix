const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://bookflix-backend.onrender.com' || 'http://localhost:3000',
        changeOrigin: true,
        // pathRewrite: {'^/api': ''}
      }
    }
  }
});

