import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Icon from "@/components/Icon.vue";
import Layout from "@/components/Layout.vue";
import tagListModel from "@/models/tagListModel";


Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('Icon',Icon)
Vue.component('Layout',Layout)

window.tagList= tagListModel.fetch()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
