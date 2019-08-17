const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|svelte)$/,
        exclude: [/node_modules/, path.resolve(__dirname, '../../core')],
        loader: 'eslint-loader'
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            hotReload: true
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    port: 8080
  }
}
