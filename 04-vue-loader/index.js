import Vue from 'vue';
import App from './App';

new Vue({
    el: '#app',
    template: '<App/>', // Notice we are now creating a new custom App component in our template
    components: { App }, // List all dependent components here
});
