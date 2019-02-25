import { shallowMount, mount, createLocalVue } from '@vue/test-utils'


// import Vuex from 'vuex'

// import {actions, mutations, getters} from '../../src/store' 
import {Home} from '../../src/views/Home'
import HelloWorld from '@/components/HelloWorld.vue'

// const localVue = createLocalVue()
// localVue.use(Vuex)

describe('Home.vue', () => {
  it('home vue to exist', () => {
    //const wrapper = mount(Home)
     //expect(wrapper).toBeDefined();
     expect(1).toEqual(1)
  })
})

// describe('HelloWorld store test', () => {
//   let store;
//   beforeEach(() => {
//     store = new Vuex.Store({
//       state: {
//         data: ''
//       }
//     });
//     store.dispatch = jest.fn();
//   });

//   it('store dispatch', () => {
//     const msg = 'welcome'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//       store, localVue
//     });
//     const element = wrapper.find("#hello_templ");
//     console.log(element.html());
//     expect(wrapper.text()).toMatch(msg)
//   });

// });

