import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

// SAMPLE from
// https://github.com/lmiller1990/vuex-testing-example
// https://codeburst.io/vuex-store-d888de10d499

// NOTE:
// Uncomment to test/run simple store **
// Uncomment on router to see the links..
// import store from '../src/store/simple-store'

// NOTE: to run module based store
import createStore from '../src/store'

const setupApp = async () => {

  Vue.config.productionTip = false;
  Vue.use(Vuex);

  const store = await createStore()

  console.log(store)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
};

setupApp()
