import Vue from 'vue'
import Router from 'vue-router'
import BabSatu from './views/BabSatu.vue'
import BabDua from './views/BabDua.vue'
import BabTiga from './views/BabTiga.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'babSatu',
            component: BabSatu
        },
        {
            path: '/bab2',
            name: 'babDua',
            component: BabDua
        },
        {
            path: '/bab3',
            name: 'babTiga',
            component: BabTiga
        }
    ]
})
