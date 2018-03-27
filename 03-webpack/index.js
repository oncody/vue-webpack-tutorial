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
