const path = require('path')

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js',
    filename: 'app.js',
    sourceMapFilename: '[file].map',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      src: path.join(__dirname, 'src'),
    },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8581,
    historyApiFallback: {
      index: 'index.html',
    },
    inline: true,
    watchContentBase: true,
  },
}
