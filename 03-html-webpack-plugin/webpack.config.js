'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    mode: 'development',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // Necessary for Vue
        }
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'})
    ]
};