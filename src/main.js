import Vue from 'vue';
import store from './store.js'
import BootstrapVue from 'bootstrap-vue'
import MyList from './MyList.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  store,
  render: h => h(MyList),
}).$mount('#app')
