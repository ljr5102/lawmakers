var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom'];

var config = {
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx$/,
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: './src/index.html',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

module.exports = config;
