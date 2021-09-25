import Vue from 'vue'
import App from './App.vue'

import VueIntersect from 'vue-intersect-directive'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false

Vue.use(VueIntersect)
Vue.use(VueSmoothScroll, {   duration: 1000,   updateHistory: false, })

new Vue({
  render: h => h(App),
}).$mount('#app')
