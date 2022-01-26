/* eslint-disable */
// const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'headers-and-footers': './src/headers-and-footers.js',
    'colors-and-types': './src/colors-and-types.js',
    'form-elements': './src/form-elements.js',
    cards: './src/cards.js',
    'landing-page': './src/landing-page.js',
    'search-room': './src/search-room.js',
    'room-details': './src/room-details.js',
    'login': './src/login.js',
    'register': './src/register.js',
    'temporary': './src/temporary.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: '/node_modules/' },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'headers-and-footers.html',
      template: './src/templates/headers-and-footers/headers-and-footers.pug',
      chunks: ['headers-and-footers'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'colors-and-types.html',
      template: './src/templates/colors-and-types/colors-and-types.pug',
      chunks: ['colors-and-types'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'form-elements.html',
      template: './src/templates/form-elements/form-elements.pug',
      chunks: ['form-elements'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'cards.html',
      template: './src/templates/cards/cards.pug',
      chunks: ['cards'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'index.html',
      template: './src/templates/landing-page/landing-page.pug',
      chunks: ['landing-page'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'search-room.html',
      template: './src/templates/search-room/search-room.pug',
      chunks: ['search-room'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'room-details.html',
      template: './src/templates/room-details/room-details.pug',
      chunks: ['room-details'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'login.html',
      template: './src/templates/login/login.pug',
      chunks: ['login'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'register.html',
      template: './src/templates/register/register.pug',
      chunks: ['register'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.png',
      filename: 'temporary.html',
      template: './src/templates/temporary/temporary.pug',
      chunks: ['temporary'],
      inject: 'body',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
