// Webpack allows us to import code from other javascript files into the scope of this javascript file
// This is different than old javascript days where you globally load your javascript libraries at the start of your web app
// This import statement will import the vue package from NPM node_modules directory
// Webpack will bundle all of this file's dependencies into this file during build time when webpack runs
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
