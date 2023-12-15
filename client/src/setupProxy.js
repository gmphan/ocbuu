const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // '/api', // this like wildcard for any api route start with /api
    ['/api', '/auth/google'], //this is a fix api route
    createProxyMiddleware({
      target: 'http://localhost:8000',
    //   changeOrigin: true, // not understand about this one, yet.
    })
  );
};