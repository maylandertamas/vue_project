import Vue from 'vue'
import Router from 'vue-router'
import Videos from './components/Videos.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'videos',
      component: Videos,
      alias: '/videos',
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})