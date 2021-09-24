import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueIntersect from 'vue-intersect-directive'

Vue.use(VueIntersect)

new Vue({
  render: h => h(App),
}).$mount('#app')
