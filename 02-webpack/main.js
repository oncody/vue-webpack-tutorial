import Vue from 'vue';

new Vue({
    el: '#app',
    data: function () {
        return {
            message: 'We are including vue from NPM and this message is coming from the \'main.js\' file'
        }
    },
    template: '<div><p>{{ message }}</p></div>'
});