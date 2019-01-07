const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');


module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new Visualizer({ filename: './statistics.html' })
  ]
};
