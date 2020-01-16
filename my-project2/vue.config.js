// vue.config.js
module.exports = {
  // 不提示
  lintOnSave: false,
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    open: true,
    host: 'localhost',
    port: '8081',
    proxy: {
      '/api': {
        //target: 'http://localhost:8000', // 要请求的地址
        target: 'http://localhost', // 要请求的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}