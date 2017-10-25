var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'immutable', 'prop-types', 'redux-pack'];
var extractSass = new ExtractTextPlugin({
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
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
        }),
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
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
