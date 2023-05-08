const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist_react'),
    filename: 'js/[name].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css'
    }),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html',
      chunks:['index']
    })],
  module:{
    rules:[
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'images'
          }
        },
        {
          test: /\.mp4$/,
          loader: 'file-loader',
          options: {
            outputPath: 'videos'
          }
        }
      ]
    }
};