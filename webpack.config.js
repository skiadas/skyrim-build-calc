const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
  target: 'web',
  devServer: {
    open: true,
    hot: false,
    liveReload: true,
    client: {
      overlay: true,
      progress: true
    }
  },
  mode: 'development',
  context: path.join(__dirname, 'app'),
  entry: {
    app: './js/app.tsx',
    styles: './css/main.css'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[contenthash:8].js',
    publicPath: './',
    pathinfo: false
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: env.production === true ? '[name].[contenthash:8].css' : '[name].css',
      chunkFilename: env.production === true ? '[name].[contenthash:8].css' : '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/index.html'),
      inject: 'body'
    })
  ]
});
