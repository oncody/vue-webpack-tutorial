const nodeHotModuleReplacement = require('node-hot-module-replacement');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const coreServerFiles = [
  __filename,
  path.join(__dirname, 'production-server.js'),
  path.join(__dirname, 'server.js')
];

module.exports = app => {
  const webpackCompiler = webpack(webpackConfig);

  const devMiddleware = webpackDevMiddleware(webpackCompiler, {
    publicPath: '/'
  });

  const hotMiddleware = webpackHotMiddleware(webpackCompiler);

  app.use(devMiddleware);
  app.use(hotMiddleware);

  nodeHotModuleReplacement(__dirname, coreServerFiles);
};
