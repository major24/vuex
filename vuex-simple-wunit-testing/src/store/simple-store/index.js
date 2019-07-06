import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value_1: 'val 1',
    value_2: 'val 2',
    value_3: 'val 3',
    gettertestvalue: 24
  },
  mutations: {
    updateValue1(state, payload) {
      console.log('in store mutating value 1')
      state.value_1 = payload
    },
    setValue2(state, payload) {
      console.log('in store mutating setValue2')
      state.value_2 = payload
    },
    incrementGetterTestValue(state) {
      state.gettertestvalue++;
    }
  },
  actions: {
    getData(context) {
      console.log('in store action getData')
    },
    setStateByParamValue(context, payload) {
      console.log('in store action setStateByParamValue')
      console.log(context); // state
      console.log(payload); // 22
      console.log(context.state.value_2);
      context.commit('setValue2', payload)
      console.log(context.state.value_2);
    },
    callActionWithMultiValues(context, payload) {
      console.log('in store action callActionWithMultiValues')
      console.log(context); // state
      console.log(payload); 
    },
    testAction(context) {
      console.log('in testAction: ', context);
    },
    testAction2({ commit, state, getters }) {
      console.log('in testAction2: ', commit);
      console.log('>>: ', state);
      console.log('>>>>: ', getters);
      let x = getters.getter_value_3;
      console.log('>>--', x);
      // increment
      commit('incrementGetterTestValue');
    },
  },
  getters: {
    getter_value_1(state, getters) {
      return state.value_1;
    },
    getter_value_2(state, getters) {
      return state.value_2;
    },
    getter_value_3(state) {
      console.log('in getters 3');
      return state.gettertestvalue;
    }
  }
});
