import Vue from 'vue'
import Router from 'vue-router'
import BabSatu from './views/BabSatu.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'babSatu',
      component: BabSatu
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
