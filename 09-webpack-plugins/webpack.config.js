'use strict';

const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './index.js', // Entry javascript file
    ],
    mode: 'development', // Whether to run webpack for development or production
    resolve: {
        alias: {'vue$': 'vue/dist/vue.esm.js'}, // Necessary for vue
        extensions: ['.js', '.vue'] // You can require these files without their extensions
    },
    devtool: 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/
    devServer: {
        overlay: true,
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // regex listing which files vue-loader should process
                loader: 'vue-loader' // vue-loader allows you to write convenient single-file components
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
        new webpack.HotModuleReplacementPlugin(), // Hot module replacement live reloading of your app!
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new VueLoaderPlugin(), // explicitly include the vue loader plugin in
        new HtmlWebpackPlugin({template: 'index.html'}), // Include html webpack plugin and point it at our index.html file
        new webpack.NoEmitOnErrorsPlugin(), // Don't emit assets that contain errors
        new FriendlyErrorsWebpackPlugin() // Shows error messages in a better way
    ]
};
