import { shallowMount, createLocalVue } from '@vue/test-utils'
import PhonePage from '@/components/PhonePage.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PhonePage store test', () => {
  let store;

  beforeEach(() => {

    store = new Vuex.Store({
      state: getData(),

    });
    store.dispatch = jest.fn();
  });

  it('renders the page and calls dispatch', () => {
    const wrapper = shallowMount(PhonePage, {
      store, localVue
    })
    console.log(wrapper.html());
    console.log('wrapper comp>>>');
    console.log(wrapper)
    console.log('-----');
    expect(wrapper).toBeDefined();
    expect(store.dispatch).toHaveBeenCalled();
  })

  it('ensure loadData is called', () => {
    const wrapper = shallowMount(PhonePage, {
      store, localVue
    })
    expect(wrapper).toBeDefined();
    //const created = jest.spyOn(PhonePage, 'created');
    // console.log(created)
    // const createdCalled = created();
    // expect(store.dispatch).toHaveBeenCalled();
    // expect(wrapper.created_loadData).toHaveBeenCalled();
    //expect(wrapper.text()).toMatch(msg)
  })

  it('ensure phone data is found', () => {
    const wrapper = shallowMount(PhonePage, {
      store, localVue
    })
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('4166')
  })

  it('ensure mobile control is found', () => {
    const wrapper = shallowMount(PhonePage, {
      store, localVue, stubs: ['input']
    })

    //const el = wrapper.find('#phone_templ');
    //console.log('ctrl')
    //console.log(wrapper)
  })

});


function getData() {
  return  {
    phoneDetails: {
      phoneDetails: {
        types: {
          mobile: {
            phoneNumber: '4166'
          },
  
          home: {
            phoneNumber: '9052'
          }
        }
      }
    }
  }
}



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

