const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');


const serverConfig = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // Do not include (in bundle.js) packages that are available in `node_modules`
  externals: [webpackNodeExternals()]
};
module.exports = merge(baseConfig, serverConfig);
