module.exports = {
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true
          }
        }
      }
    ]
  },
  devtool: false
}
