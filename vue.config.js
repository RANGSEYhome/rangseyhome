const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: 'https://dummyjson.com',
    proxy: process.env.VUE_API_URL || 'https://dummyjson.com'
  }
})