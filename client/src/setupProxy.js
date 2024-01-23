const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // '/api', // this like wildcard for any api route start with /api
    ['/api/*', '/auth/google'], 
    createProxyMiddleware({
      target: 'http://127.0.0.1:50000',
    //   changeOrigin: true, // not understand about this one, yet.
    })
  );
};