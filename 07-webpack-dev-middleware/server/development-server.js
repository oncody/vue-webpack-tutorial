const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

module.exports = (app) => {
  const webpackCompiler = webpack(webpackConfig);

  const devMiddleware = webpackDevMiddleware(webpackCompiler, {
    publicPath: '/',
  });

  const hotMiddleware = webpackHotMiddleware(webpackCompiler);

  app.use(devMiddleware);
  app.use(hotMiddleware);
};
