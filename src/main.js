import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';

// Bootstrap
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue);
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
	routes
});

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
