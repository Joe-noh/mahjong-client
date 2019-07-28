const path = require('path')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development'
const config = require(`./build/webpack.${mode}.js`)

module.exports = webpackMerge(
  {
    entry: {
      bundle: ['./src/main.js']
    },
    resolve: {
      alias: {
        svelte: path.resolve('node_modules', 'svelte')
      },
      extensions: ['.mjs', '.js', '.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].[contenthash].js'
    },
    mode,
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: './src/index.template.html', favicon: './src/favicon.png' })]
  },
  config
)
