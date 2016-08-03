var webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: './assets/',
    publicPath: '/assets/',
    filename: 'main.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 51200,
          name: 'images/[name].[ext]?[hash]'
        }
      }
    ]
  },
  babel:{
      presets:["es2015"]
  },
  devServer: {
      historyApiFallback: true,
      hot: false,
      inline: true,
      grogress: true
  }
}
