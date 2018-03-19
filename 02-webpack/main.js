import Vue from 'vue';

// Create a new vue component
new Vue({
    el: '#app', // Bind this vue component to the HTML component named 'app'
    data: function () { // The 'data' variable should always return a function
        return {
            message: 'Including vue from NPM and bundling it with webpack'
        }
    },
    // Everything in this template will be injected inside the bound HTML component
    template: '<div><p>{{ message }}</p></div>'
});