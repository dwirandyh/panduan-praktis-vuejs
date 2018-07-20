import Vue from 'vue'
import Router from 'vue-router'
import BabSatu from './views/BabSatu.vue'
import BabDua from './views/BabDua.vue'
import BabTiga from './views/BabTiga.vue'
import BabEmpat from './views/BabEmpat'
import BabLima from './views/BabLima'
import BabEnam from './views/BabEnam'
import BabTujuh from './views/BabTujuh'
import BabDelapan from './views/BabDelapan'

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
        },
        {
            path: '/bab4',
            name: 'babEmpat',
            component: BabEmpat
        },
        {
            path: '/bab5',
            name: 'babLima',
            component: BabLima
        },
        {
            path: '/bab6',
            name: 'babEnam',
            component: BabEnam
        },
        {
            path: '/bab7',
            name: 'babTujuh',
            component: BabTujuh
        },
        {
            path: '/bab8',
            name: 'babDelapan',
            component: BabDelapan
        }
    ]
})
