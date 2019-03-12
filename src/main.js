import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import Animation from 'animate.css'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.use(Animation);
Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


