'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/ts/index.tsx',
  devtool: "source-map",
  output: {
    filename: './index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    open: true,
  },
  plugins: [
    // new WebpackPwaManifest({
    //   name: 'My Awesome App',
    //   short_name: 'MyApp',
    //   description: 'My awesome Progressive Web App!',
    //   background_color: '#ffffff',
    //   theme_color: '#000000',
    //   start_url: '.',
    //   display: 'standalone',
    //   fingerprints: false,
    //   publicPath: '.',
    //   icons: [
    //     {
    //       src: path.resolve('public/favicon.ico'), // путь к исходной иконке
    //       sizes: [128, 256, 512] // различные размеры иконок
    //     }
    //   ]
    // }),
    // new WorkboxWebpackPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   maximumFileSizeToCacheInBytes: 5000000
    // }),
    new HtmlWebpackPlugin({ 
      template: './src/index.html',
      favicon: './public/favicon.ico' 
    }),
  ],
  
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader'
          }
        },
        {
          test: /\.s?css$/,
          exclude: /\.module\.css$/,
          use: ['style-loader', 'css-loader','sass-loader']
        },
        {
          test: /\.module\.css$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  }
}
