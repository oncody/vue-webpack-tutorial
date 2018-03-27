// This will import the vue package from NPM node_modules directory
// Webpack will bundle all of this file's dependencies into this file when webpack runs
import Vue from 'vue';

new Vue({
    el: '#app',
    data: function () { // The 'data' option should always return a function
        return {
            message: 'Vue is working with webpack!'
        }
    },
    template: '<div>{{ message }}</div>'
});
