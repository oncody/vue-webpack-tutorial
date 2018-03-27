'use strict';

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
                loader: 'vue-loader', // vue-loader allows you to write convenient single-file components
                test: /\.vue$/ // regex listing which files vue-loader should process
            }
        ]
    }
};
