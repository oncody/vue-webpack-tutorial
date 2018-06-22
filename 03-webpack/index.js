import Vue from 'vue';

new Vue({
  el: '#app',
  data() {
    return {
      message: 'Vue is working with webpack!'
    };
  },
  template: '<div>{{ message }}</div>'
});
