import Vue from 'vue';

// Create a new vue component
new Vue({
    el: '#app', // Bind this vue component to the HTML component named 'app'
    data: function () { // The 'data' variable should always return a function
        return {
            message: 'Vue is working!'
        }
    },
    template: '<div>{{ message }}</div>'
});