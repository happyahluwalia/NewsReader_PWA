module.exports = {
  staticFileGlobs : [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images',
    'dist/assets/icons'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  minify: true,
  runtimeCaching: [
    {
      urlPattern : /newsapi/,
      handler: 'cacheFirst',
      options : {
                  cache : {
                              maxEnteries : 150,
                              maxAgeSeconds: 120
                          }
                }

      }
    ]
};
