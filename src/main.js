import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'

import 'todomvc-common/base.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
