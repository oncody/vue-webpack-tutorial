import Vue from 'vue';
import App from './App';

// Initialize Vue
new Vue({
    el: '#app', // Bind this vue component to the HTML component named 'app'
    template: '<App/>', // Anything inside the 'template' section of our App.vue file will be injected here!
    components: { App }, // List all dependent components here
});
