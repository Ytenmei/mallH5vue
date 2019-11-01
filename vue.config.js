module.exports = {
  devServer: {
    proxy: {
      '/api/Mall': {
        target: 'http://172.24.244.112:1250',
        ws: false,
        changeOrigin: true
      },
      '/api/Order': {
        target: 'http://172.24.244.111:1211',
        ws: false,
        changeOrigin: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  assetsDir: 'assets',
  outputDir: 'vue',
  productionSourceMap: true,
  lintOnSave: true,
  filenameHashing: true
}
