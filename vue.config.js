module.exports = {
  devServer: {
    proxy: {
      '/todo': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
