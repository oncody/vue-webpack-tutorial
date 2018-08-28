'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    mode: 'development',
    resolve: {
        alias: {'vue$': 'vue/dist/vue.esm.js'}
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'})
    ]
};
