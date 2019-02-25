import { shallowMount, createLocalVue } from '@vue/test-utils'
import PhoneDisplayState from '@/components/phone/PhoneDisplayState.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

// INJECT STATE, TO ENABLE COMPONENT...
// store.state.phoneDetails.types.mobile.phoneNumber

describe('PhoneDisplayState.vue', () => {
  it('renders component and value from $store.state', () => {
    const wrapper = shallowMount(PhoneDisplayState, {
      mocks: {
        $store: {
          state: {
            phoneDetails: {
              types: {
                mobile: {
                  phoneNumber: '647-777'
                },
                home: {
                  phoneNumber: '647-999'
                }
              }
            }
          }
        }
      },

      localVue
    });

    expect(wrapper).toBeDefined();
    // console.log(wrapper.html());
    expect(wrapper.find('#phoneNumber').text().trim()).toEqual('647-777');
  })

})


// test for computed value
describe('PhoneDisplayState.vue', () => {
  it('renders component and value from computed state', () => {
    const wrapper = shallowMount(PhoneDisplayState, {
      mocks: {
        $store: {
          state: {
            phoneDetails: {
              types: {
                mobile: {
                  phoneNumber: '647-500-9999'
                },
                home: {
                  phoneNumber: '647-999-7777'
                }
              }
            }
          }
        }
      },

      computed: {
        mobileNumber: () => '905-999-0000'
      },
      localVue
    });

    expect(wrapper).toBeDefined();
    // console.log(wrapper.html());
    expect(wrapper.find('.computed-mobile').text().trim()).toEqual('905-999-0000');
  })
  
})