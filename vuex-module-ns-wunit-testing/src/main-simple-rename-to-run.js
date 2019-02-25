import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

// SAMPLE from
// https://github.com/lmiller1990/vuex-testing-example
// https://codeburst.io/vuex-store-d888de10d499

// NOTE: ** Uncomment to test/run simple store **
import store from '../src/store/simple-store'

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')