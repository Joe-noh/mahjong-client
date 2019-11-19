const path = require('path')
const { EnvironmentPlugin } = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'
const config = require(`./build/webpack.${mode}.js`)

module.exports = webpackMerge(
  {
    entry: {
      bundle: ['./src/main.js']
    },
    resolve: {
      alias: {
        svelte: path.resolve('node_modules', 'svelte'),
        '@': path.resolve('src')
      },
      extensions: ['.mjs', '.js', '.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].[contenthash].js'
    },
    mode,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.template.html', favicon: './src/favicon.png' }),
      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
      new EnvironmentPlugin({
        NODE_ENV: 'development',
        BACKEND_URL: 'http://localhost:4000',
        FIREBASE_API_KEY: 'AIzaSyCL2aXJ4OcJcUniX4Uc66oM0uJoQDF9KAI',
        FIREBASE_AUTH_DOMAIN: 'mah-development.firebaseapp.com'
      })
    ]
  },
  config
)