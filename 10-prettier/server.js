const chokidar = require('chokidar');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config');
const route1 = require('./route1');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {publicPath: '/'}));

app.use(webpackHotMiddleware(compiler, {}));

app.use((request, response, next) => {
  route1(request, response, next);
});

const watcher = chokidar.watch('.', {ignored: /(^|[/\\])\../});
watcher.on('ready', () => {
  // this means the files have initially been loaded

  watcher.on('all', (event, path) => {
    console.log(event, path);

    Object.keys(require.cache).forEach(id => {
      if (!/node_modules/.test(id) && id.endsWith(path)) {
        delete require.cache[id];
      }
    });
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});
