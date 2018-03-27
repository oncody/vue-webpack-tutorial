new Vue({
    el: '#app',
    data: function () { // The 'data' option should always return a function
        return {
            message: 'Vue is working from NPM!'
        }
    },
    template: '<div>{{ message }}</div>'
});
