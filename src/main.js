import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'
import './plugins/aws-amplify'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
