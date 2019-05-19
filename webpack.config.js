var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'immutable', 'prop-types', 'redux-pack'];
var extractSass = new MiniCssExtractPlugin({
  filename: '[name][chunkhash].css',
});

var config = {
  entry: {
    bundle: './src/index.js',
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
        test: /\.jsx?$/,
      },
      {
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        test: /\.scss$/,
      },
      {
        use: [
          {
            loader: 'file-loader',
            options: {},
          }
        ],
        test: /\.(jpe?g|png|gif|svg)$/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Legislators',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    extractSass,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

module.exports = config;
