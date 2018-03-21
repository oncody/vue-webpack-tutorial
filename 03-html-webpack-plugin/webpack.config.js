'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js', // Entry javascript file
    mode: 'development', // Whether to run webpack for development or production
    resolve: {
        alias: {'vue$': 'vue/dist/vue.esm.js'} // Necessary for vue
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}) // Tell webpack to use our html file and glue to it our javascript files
    ]
};