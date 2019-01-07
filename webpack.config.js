const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');


module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    app: ['./public/index.html', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ]
  },
  plugins: [
    new Visualizer({ filename: './statistics.html' })
  ]
};
