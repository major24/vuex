import Vue from 'vue'
import Vuex from 'vuex'

//import actions from './actions'
//import mutations from './mutations'
import phoneNumbers from './phoneNumbers'

Vue.use(Vuex)

// create the store as module
async function createStore() {
  return new Vuex.Store({
    modules: {
      phoneDetails: phoneNumbers
    }
  }) 
}

export default createStore;

/*
const initState = {
  data: {
    phoneData: {
      mobile: {
        phoneNumber: ''
      },
      home: {
        phoneNumber: ''
      }
    }
  }
}

export default new Vuex.Store({
  state: initState,
  actions,
  mutations
})
*/
