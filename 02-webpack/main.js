import Vue from 'vue';

// Initialize Vue
new Vue({
    el: '#app', // Bind this vue component to the HTML component named 'app'
    data: function () { // The 'data' option should always return a function
        return {
            message: 'Vue is included from NPM, bundled with webpack, and it is working!'
        }
    },
    template: '<div>{{ message }}</div>' // Everything in this template will be injected inside the bound HTML component
});