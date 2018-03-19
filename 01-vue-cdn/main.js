new Vue({
    el: '#app', // Here we bind this vue component to the HTML component named 'app' in index.js
    data: function () {
        return {
            // Set the message variable equal to the following value
            message: 'We are including vue from a CDN and this message is coming from the \'main.js\' file'
        }
    },
    // Everything in this template will be injected inside our HTML component we are bound to.
    // We are also going to output the value of 'message'
    template: '<div>{{ message }}</div>'
});