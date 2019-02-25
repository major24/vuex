import { shallowMount, createLocalVue } from '@vue/test-utils'
import MutateSimpleState from '@/components/MutateSimpleState.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

// INJECT STATE, TO ENABLE COMPONENT...

describe('MutateSimpleState.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(MutateSimpleState, {
      localVue
    });

    expect(wrapper).toBeDefined();
    console.log(wrapper.html());
  });
});


// Test mutations
describe('MutateSimpleState.vue', () => {
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      updateValue1: jest.fn()
    }

    store = new Vuex.Store({
      mutations
    });
  });

  it('mutates state value1', () => {
    const wrapper = shallowMount(MutateSimpleState, {
      store,
      localVue
    });

    wrapper.find('button').trigger('click');
    
    // ensure it is called once
    expect(mutations.updateValue1.mock.calls).toHaveLength(1);
    // ensure the param
    // hardcoed passed from vue method
    console.log(mutations.updateValue1.mock.calls);  // [ [ {}, 'value 100 ] ]
    expect(mutations.updateValue1.mock.calls[0][1]).toEqual('value 100');
  });
});








// TODO: if we can get old and new value??
// additional test to ensure the store contains new value
// afer update
/*
describe('MutateSimpleState.vue', () => {
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      updateValue1: jest.fn()
    }

    store = new Vuex.Store({
      state: {
        'value_1': 'val 1'
      },
      mutations
    });
  });

  it('mutates state value1', () => {
    const wrapper = shallowMount(MutateSimpleState, {
      store,
      localVue
    });

    expect(wrapper).toBeDefined();
    // console.log(store.state.value_1); // val 1
    // wrapper.find('button').trigger('click');
    // console.log(store.state.value_1);
    // TODO: how get the new state updated value
    // expect(store.state.value_1).toEqual('val 1');
  });
});
*/


