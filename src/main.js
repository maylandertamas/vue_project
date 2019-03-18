import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import Animation from 'animate.css'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueScrollReveal from 'vue-scroll-reveal';
import VueScrollProgressBar from 'vue-scroll-progressbar'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

Vue.use(SequentialEntrance);
Vue.use(VueScrollProgressBar)
Vue.use(Animation);
Vue.use(VeeValidate);
Vue.use(VueScrollReveal);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


