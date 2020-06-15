const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    // library: 'PinvInvoice',
    libraryTarget: 'umd',
  },
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
