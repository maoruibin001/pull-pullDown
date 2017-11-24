/**
 * Created by lenovo on 2017/11/24.
 */
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const config = {
  entry: './example/index.js',
  output: {
    filename: '[name].js',
    path: resolve('./dist')
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: resolve('./node_modules')},
      {test: /\.tpl/, loader: 'string-loader'}
    ],
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new HtmlPlugin({
      template: './example/index.html',
      name: 'index2.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;