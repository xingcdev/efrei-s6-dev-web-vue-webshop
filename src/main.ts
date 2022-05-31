import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/boostrap.css';
import 'bootstrap-vue/dist/boostrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
