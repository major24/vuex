import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

import Vuex from 'vuex'

import {actions, mutations, getters} from '../../src/store' 
import {Home} from '../../src/views/Home'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('HelloWorld store test', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        data: ''
      }
    });
    store.dispatch = jest.fn();
  });

  it('store dispatch', () => {
    const msg = 'welcome'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      store, localVue
    });
    const element = wrapper.find("#hello_templ");
    // console.log(element.html());
    expect(wrapper.text()).toMatch(msg)
  });

});

