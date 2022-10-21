module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://www.breakingbadapi.com/api/',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }