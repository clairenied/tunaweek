'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './browser/react/index.jsx',
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/, 
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'airbnb', 'es2015', 'es2017', 'stage-0'],
          plugins: [
            'transform-object-rest-spread',
            'transform-object-assign',
            'transform-runtime', 
            'transform-decorators-legacy', 
            'transform-class-properties'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  }
};