const chokidar = require('chokidar');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
    publicPath: '/'
}));

app.use(webpackHotMiddleware(compiler, {}));

app.use((request, response, next) => {
    require('./route1')(request, response, next);
});

const watcher = chokidar.watch('.', {ignored: /(^|[\/\\])\../});
watcher.on('ready', () => {
    // wait for chokidar to reach the ready state. this means the files have initially been loaded

    watcher.on('all', (event, path) => {
        console.log(event, path);

        Object.keys(require.cache).forEach(function (id) {
             if(!/node_modules/.test(id) && id.endsWith(path)) {
                 delete require.cache[id];
             }
        });
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!\n');
});
