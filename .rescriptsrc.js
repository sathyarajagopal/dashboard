// https://github.com/arackaf/customize-cra/blob/master/src/customizers/webpack.js

module.exports = [
  {
    webpack: config => {
      config.output.libraryTarget = 'amd';
      config.output.filename = 'static/js/bundle.js';
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false
        }
      };
      config.optimization.runtimeChunk = false;

      return config;
    },
    devServer: config => {
      config.headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      };

      return config;
    }
  },
  [
    'use-babel-config',
    {
      presets: ['react-app']
    }
  ]
];