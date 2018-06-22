import Vue from 'vue';

new Vue({
  el: '#app',
  data() {
    return {
      message: 'Vue is working with eslint!'
    };
  },
  template: '<div>{{ message }}</div>'
});
