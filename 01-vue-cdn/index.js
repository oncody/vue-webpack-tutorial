// Initialize Vue
new Vue({
  // Bind this vue component to the HTML component named 'app'
  el: '#app',
  data() {
    // The 'data' option should always return a function
    return {message: 'Vue is working from a CDN!'};
  },
  // This entire html template string will be injected
  // '{{message}}' will be replaced by the value we set above
  template: '<div>{{ message }}</div>'
});
