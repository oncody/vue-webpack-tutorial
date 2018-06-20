'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './index.js', // Entry javascript file
    mode: 'development', // Whether to run webpack for development or production
    resolve: {
        alias: {'vue$': 'vue/dist/vue.esm.js'}, // Necessary for vue
        extensions: ['.js', '.vue'] // You can require these files without their extensions
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // regex listing which files vue-loader should process
                loader: 'vue-loader' // vue-loader allows you to write convenient single-file components
            },
            {
                test: /\.js$/, // this will apply to both plain '.js' files and '<script>' blocks in '.vue' files
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,  // this will apply to both plain `.css` files and '<style>' blocks in '.vue' files
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin() // explicitly include the vue loader plugin in your plugins list
    ]
};
