var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var paths = {
  appSrc: path.resolve('src'),
  appBuild: path.resolve('build')
}

module.exports = {
  devtool: 'eval',
  entry: [
    path.join(paths.appSrc, 'index')
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.appSrc,
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
        ]
      }),
    ];
  }
};
