import { shallowMount, createLocalVue } from '@vue/test-utils'
import ActionSimpleState from '@/components/ActionSimpleState.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

// INJECT STATE, TO ENABLE COMPONENT...

describe('ActionSimpleState.vue', () => {
  it('renders action component', () => {
    const wrapper = shallowMount(ActionSimpleState, {
      localVue
    });

    expect(wrapper).toBeDefined();
  });
});


// Test actions
describe('ActionSimpleState.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
        getData: jest.fn()
    }

    store = new Vuex.Store({
      actions
    });
  });

  it('dispatches an action when action button clicked', () => {
    const wrapper = shallowMount(ActionSimpleState, {
      store,
      localVue
    });

    wrapper.find('#btn1').trigger('click');
    // ensure it is called once
    expect(actions.getData.mock.calls).toHaveLength(1);
    // hardcoed passed from vue method
    //console.log(mutations.updateValue1.mock.calls);  // [ [ {}, 'value 100 ] ]
    //expect(mutations.updateValue1.mock.calls[0][1]).toEqual('value 100');
  });
});



// Test actions with params
describe('ActionSimpleState.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
        getData: jest.fn(),
        setStateByParamValue: jest.fn()
    }

    store = new Vuex.Store({
      actions
    });
  });

  it('dispatches an action and call mutations when action button clicked', () => {
    const wrapper = shallowMount(ActionSimpleState, {
      store,
      localVue
    });

    wrapper.find('#btn2').trigger('click');
    // ensure it is called once
    expect(actions.setStateByParamValue.mock.calls).toHaveLength(1);
    // console.log(actions.setStateByParamValue.mock.calls);
    // value passed is below 
    // [ [ { dispatch: [Function: boundDispatch],
    //   commit: [Function: boundCommit],
    //   getters: {},
    //   state: {},
    //   rootGetters: {},
    //   rootState: {} },
    // 'new value 22',
    // undefined ] ]

    expect(actions.setStateByParamValue.mock.calls[0][1]).toEqual('new value 22');
  });


  // test watches with async 
  it('dispatches an action when wathed value changes', async () => {
    const wrapper = shallowMount(ActionSimpleState, {
      store,
      localVue
    });

    await wrapper.setData({ val: 'new watched value 2' });
    // TODO: NOT working. error on prop ***
    //expect(actions.setStateByParamValue.mock.calls[0][1]).toEqual('new value 22');
  });


});
