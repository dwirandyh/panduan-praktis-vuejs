import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BoldComponent from './components/BoldComponent'
import SlotComponent from './components/SlotComponent'
import DaftarComponent from './components/DaftarComponent'
import PropComponent from './components/PropComponent'
import EventComponent from './components/EventComponent'

Vue.config.productionTip = false
Vue.filter('kapital', function (value) {
    if (!value) return ''
    value = value.toString();
    return value.toUpperCase();
});

Vue.component('bold-component', BoldComponent);
Vue.component('slot-component', SlotComponent);
Vue.component('daftar-component', DaftarComponent);
Vue.component('prop-component', PropComponent);
Vue.component('event-component', EventComponent);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
