import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.filter('kapital', function (value) {
    if (!value) return ''
    value = value.toString();
    return value.toUpperCase();
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
