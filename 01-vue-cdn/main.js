// Create a new vue component
new Vue({
    el: '#app', // Bind this vue component to the HTML component named 'app'
    data: function () { // The 'data' variable should always return a function
        return {
            message: 'Basic example of vue being included from a CDN'
        }
    },
    // Everything in this template will be injected inside the bound HTML component
    // '{{message}}' will be replaced with the value of message set above
    template: '<div>{{ message }}</div>'
});