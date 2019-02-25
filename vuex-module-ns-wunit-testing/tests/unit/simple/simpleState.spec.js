import { shallowMount, createLocalVue } from '@vue/test-utils'
import SimpleState from '@/components/SimpleState.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

// INJECT STATE, TO ENABLE COMPONENT...

describe('SimpleState.vue', () => {
  it('renders component and value from $store.state', () => {
    const wrapper = shallowMount(SimpleState, {
      mocks: {
        $store: {
          state: {
            value_1: 'mock value 1'
          }
        }
      },
      localVue
    });

    expect(wrapper).toBeDefined();
    // console.log(wrapper.html());
    expect(wrapper.find('.state-1').text().trim()).toEqual('mock value 1');
  })

  it('renders a $store.state value from computed', () => {
    const wrapper = shallowMount(SimpleState, {
      mocks: {
        $store: {
          state: {
            value_1: 'mock value 1'
          }
        }
      },
      computed: {
        value_2: () => 'mock value 2'
      },
      localVue
    });

    // console.log(wrapper.html());
    expect(wrapper.find('.state-2').text().trim()).toEqual('mock value 2');
  });

  it('renders a $store.state value from mapState', () => {
    const wrapper = shallowMount(SimpleState, {
      mocks: {
        $store: {
          state: {
            value_1: 'mock value 1'
          }
        }
      },
      computed: {
        value_2: () => 'mock value 2',
        value_3: () => 'mock value 3'
      },
      localVue
    });

    expect(wrapper.find('.state-3').text().trim()).toEqual('mock value 3');
  });


});


