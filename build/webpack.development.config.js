const Config = require('webpack-config').Config;
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

module.exports = new Config().extend('build/webpack.base.config.js').merge({
  devtool: 'source-map',
  output: {
    pathinfo: true
  },
  plugins: [
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000
  }
});