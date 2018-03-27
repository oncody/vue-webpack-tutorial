'use strict';

module.exports = {
    entry: './index.js', // Entry javascript file
    mode: 'development', // Whether to run webpack for development or production
    resolve: {
        alias: {'vue$': 'vue/dist/vue.esm.js'} // Necessary for vue
    }
};
