const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index.js',
    library: 'pinv-inovice',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  mode: 'production',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.(ts|js)$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
  },
}
