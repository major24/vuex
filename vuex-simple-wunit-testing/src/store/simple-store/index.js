import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value_1: 'val 1',
    value_2: 'val 2',
    value_3: 'val 3'
  },
  mutations: {
    updateValue1(state, payload) {
      console.log('in store mutating value 1')
      state.value_1 = payload
    },
    setValue2(state, payload) {
      console.log('in store mutating setValue2')
      state.value_2 = payload
    }
  },
  actions: {
    getData(context) {
      console.log('in store action getData')
    },
    setStateByParamValue(context, payload) {
      console.log('in store action setStateByParamValue')
      console.log(context); // state
      console.log(payload); // 2424
      console.log(context.state.value_2);
      context.commit('setValue2', payload)
      console.log(context.state.value_2);
    }
  },
  getters: {
    getter_value_1(state, getters) {
      return state.value_1;
    },
    getter_value_2(state, getters) {
      return state.value_2;
    }
  }
});
