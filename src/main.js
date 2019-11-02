// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // vuex store instance
import mixin_app__token from './utils/mixin_app__token'

 // import './utils/graph/libs/bootstrap/js/bootstrap.min.js'
 // import './utils/graph/libs/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js'

Vue.config.productionTip = false

import { appInitInject, registerFilters,watchAndSetRouteTitle } from './utils/common'
appInitInject(store, router)
registerFilters()
watchAndSetRouteTitle(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mixins: [mixin_app__token],
})
