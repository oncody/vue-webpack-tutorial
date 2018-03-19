'use strict';

module.exports = {
    entry: './main.js',
    mode: 'development',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // Necessary for Vue
        }
    },
};