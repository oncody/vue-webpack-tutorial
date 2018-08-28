import Vue from 'vue';

new Vue({
  el: '#app',
  data() {
    return {
      message: 'Vue is working with html-webpack-plugin!'
    };
  },
  template: '<div>{{ message }}</div>'
});
