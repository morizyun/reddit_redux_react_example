const webpack = require('webpack');
const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
    hints: 'warning'
  }
};
