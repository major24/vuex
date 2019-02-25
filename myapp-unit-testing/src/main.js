import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import createStore from '../src/store'


// return the store as module
const setup = async () => {
  
  Vue.config.productionTip = false;
  Vue.use(Vuex);

  const store = await createStore();

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

}

setup();




